import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
	value, title, modifier, targetValue, onClick,
}) => (
	<button type="button" className={`button button_${modifier}`} title={title} onClick={() => onClick(targetValue)}>{value}</button>
);

Button.propTypes = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	modifier: PropTypes.string,
	targetValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]),
	title: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;


