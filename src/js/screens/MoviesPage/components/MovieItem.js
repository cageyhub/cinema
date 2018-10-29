import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

const MovieItem = ({ item, onSelectSeance }) => (
	<div className="movie">
		<img className="movie__poster" src={item.poster} alt={item.title} />
		<div className="movie__desctition">
			<div className="movie__title">{item.title}</div>
			<div className="movie__date">{item.date}</div>
			<div className="show">
				<div className="show__techno">{item.techno}</div>
				<div className="show-list">
					{item.scedule.map(seance => (
						<Button key={seance.id} modifier="normal" onClick={onSelectSeance} targetValue={seance.id} title={seance.time} value={seance.time} />
					))}
				</div>
			</div>
		</div>
	</div>
);

export default MovieItem;

MovieItem.propTypes = {
	item: PropTypes.object,
	onSelectSeance: PropTypes.func,
};
