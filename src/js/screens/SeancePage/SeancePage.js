import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './SeancePage.css';
import {
	getSeance,
	bookTicket,
	clearMessage,
	clearSeance,
} from '../../actions/seance';

import StatusPanel from './components/StatusPanel';
import SeanceHall from './components/SeanceHall';
import Layer from '../components/Layer';

const getRowNum = seatId => Math.floor(seatId / 100);

const getSeatNum = seatId => seatId % 100;

class SeancePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeSeats: [],
			isLayer: false,
		};

		this.getSeance = this.getSeance.bind(this);
		this.getHallScheme = this.getHallScheme.bind(this);
		this.onSelectSeat = this.onSelectSeat.bind(this);
		this.onDeleteSeat = this.onDeleteSeat.bind(this);
		this.onAddSeat = this.onAddSeat.bind(this);
		this.getSeatPrice = this.getSeatPrice.bind(this);
		this.getFullPrice = this.getFullPrice.bind(this);
		this.getSeatStatus = this.getSeatStatus.bind(this);
		this.onDeleteAllSeats = this.onDeleteAllSeats.bind(this);
		this.onSendOrder = this.onSendOrder.bind(this);
		this.onOpenLayer = this.onOpenLayer.bind(this);
		this.onCloseLayer = this.onCloseLayer.bind(this);
	}

	componentDidMount() {
		this.seanceId = this.props.match.params.id;
		this.getSeance();
	}

	componentWillUnmount() {
		this.props.clearSeance();
	}

	async getSeance() {
		// eslint-disable-next-line
		const { getSeance } = this.props;
		await getSeance(this.seanceId);
	}

	getSeatStatus(seatId) {
		const { activeSeats } = this.state;
		const isSeatOccuped = activeSeats.find(item => item.id === seatId);
		return isSeatOccuped ? 'occuped' : 'empty';
	}

	onAddSeat(seat) {
		// eslint-disable-next-line
		const activeSeats = this.state.activeSeats;
		const newSeat = { ...seat };
		newSeat.price = this.getSeatPrice(seat.id);
		activeSeats.push(newSeat);
		this.setState({ activeSeats });
	}

	getSeatPrice(seatId) {
		const { seance } = this.props;
		const rowNum = getRowNum(seatId);
		const row = seance.hall.find(item => item.row.id === rowNum);
		return row.row.price;
	}

	onDeleteSeat(seatIndex) {
		// eslint-disable-next-line
		const activeSeats = this.state.activeSeats;
		activeSeats.splice(seatIndex, 1);
		this.setState({ activeSeats });
	}

	onSelectSeat(seat) {
		const seatIndex = this.state.activeSeats.findIndex(item => item.id === seat.id);
		if (seatIndex === -1) {
			this.onAddSeat(seat);
		} else {
			this.onDeleteSeat(seatIndex);
		}
	}

	getHallScheme() {
		// eslint-disable-next-line
		const { hall } = this.props.seance;
		const hallScheme = [];

		for (let i = 0; i < hall.rows; i++) {
			const row = [];
			for (let j = 0; j < hall.columns; j++) {
				row.push(<button type="button" className="" key={`col-${i}${j}`} onClick={() => this.onSelectSeat(i, j)}>{j}</button>);
			}
			hallScheme.push(<div key={`row-${i}`} className="row">{row}</div>);
		}
		return hallScheme;
	}

	getFullPrice() {
		const { activeSeats } = this.state;
		return activeSeats.reduce((sum, current) => sum + current.price, 0);
	}

	onDeleteAllSeats() {
		this.setState({ activeSeats: [] });
	}

	async onSendOrder() {
		const seatList = [];
		this.state.activeSeats.forEach((item) => {
			seatList.push(item.id);
		});
		const response = await this.props.bookTicket(this.seanceId, seatList); // todo: implement UpdateHall
		if (response) {
			this.onOpenLayer();
		}
	}

	onCloseLayer() {
		this.setState({ isLayer: false });
		this.props.clearMessage();
	}

	onOpenLayer() {
		this.setState({ isLayer: true });
	}


	render() {
		const { seance, message } = this.props;
		const { activeSeats, isLayer } = this.state;

		return (
			<main>
				<div className="seance">
					<SeanceHall
						seance={seance}
						getSeatStatus={this.getSeatStatus}
						onSelectSeat={this.onSelectSeat}
					/>
					<StatusPanel
						activeSeats={activeSeats}
						getRowNum={getRowNum}
						getSeatNum={getSeatNum}
						getFullPrice={this.getFullPrice}
						onDeleteSeat={this.onDeleteSeat}
						onDeleteAllSeats={this.onDeleteAllSeats}
						onSendOrder={this.onSendOrder}
					/>
				</div>
				{isLayer
     && <Layer message={message} onCloseLayer={this.onCloseLayer} />
				}
			</main>

		);
	}
}

const mapStateToProps = state => ({
	seance: state.seance.seance,
	message: state.seance.message,
});

const mapDispatchToProps = {
	getSeance,
	bookTicket,
	clearMessage,
	clearSeance,
};

SeancePage.propTypes = {
	message: PropTypes.string,
	seance: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SeancePage);
