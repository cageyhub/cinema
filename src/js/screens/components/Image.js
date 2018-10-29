import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ ...props }) => <img {...props} alt={props.alt || 'Default image'} />;

Image.propTypes = {	alt: PropTypes.string };

export default Image;
