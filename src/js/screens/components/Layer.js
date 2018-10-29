import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Layer = ({ message, onCloseLayer }) => (
	<div className="layer">
		<Button modifier="delete" value="x" onClick={onCloseLayer} />
		<div>{message}</div>
		<div className="layer__footer">
			<Button modifier="normal" value="Далі" onClick={onCloseLayer} />
		</div>
	</div>
);
export default Layer;

Layer.propTypes = {
	message: PropTypes.string,
	onCloseLayer: PropTypes.func,
};
