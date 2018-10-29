import React from 'react';
import PropTypes from 'prop-types';
import getImage from '../../../../getImage';
import Image from '../../components/Image';
import Button from '../../components/Button';

const SeanceHall = ({ seance, getSeatStatus, onSelectSeat }) => (
	<div className="seance__hall">
		<div className="seance__info">
			<div className="movie__name">{seance.name}</div>
			<div className="movie__time">
				{seance.date}
				{' '}
				{seance.time}
			</div>
		</div>
		<Image src={getImage('screen')} className="hall__screen" alt="Screen" title="Screen" />
		<div className="hall">
			{seance.id && seance.hall ? seance.hall.map(rowItem => (
				<div className="hall__row" key={rowItem.row.id}>
					{ rowItem.row.seats.map((seat, index) => (
						<Button
							key={seat.id}
							modifier={getSeatStatus(seat.id)}
							onClick={onSelectSeat}
							targetValue={seat}
							value={index + 1}
							title={`${rowItem.row.price} грн`}
						/>

					))}
				</div>
			))
				: null
			}
		</div>
	</div>
);

Button.propTypes = {
	type: PropTypes.object,
	getSeatStatus: PropTypes.func,
	onSelectSeat: PropTypes.func,
};

export default SeanceHall;
