import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovies } from '../../actions/movies';
import './MoviesPage.css';
import MovieItem from './components/MovieItem';


class MoviesPage extends Component {
	constructor(props) {
		super(props);
		this.getMovies = this.getMovies.bind(this);
		this.onSelectSeance = this.onSelectSeance.bind(this);
	}

	componentDidMount() {
		this.getMovies();
	}

	async getMovies() {
		// eslint-disable-next-line
		const { getMovies } = this.props;
		await getMovies();
	}

	onSelectSeance(seanceId) {
		const { history } = this.props;
		history.push(`/seance/${seanceId}`);
	}

	render() {
		const { movies } = this.props;

		return (
			<main>
				<h3>Movies</h3>
				{movies && movies.map(item => (
					<MovieItem item={item} key={item.id} onSelectSeance={this.onSelectSeance} />
				))}
			</main>
		);
	}
}

const mapStateToProps = state => ({
	movies: state.movies.movies,
});

const mapDispatchToProps = {
	getMovies,
};

MoviesPage.propTypes = {
	movies: PropTypes.array,
};


export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
