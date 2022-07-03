import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Image.css';

import image from '../images/Plus.png';

const Image = ({ src, alt, className }) => {
  const classes = classNames(className);

  return <img src={image} alt="{alt}" />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
