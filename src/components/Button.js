import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from './Image';

import './Button.css';

const Button = ({
  children,
  onClick,
  className,
  disabled,
  active,
  ...attrs
}) => {
  const classes = classNames('btn', className, { active });

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      <Image />
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: <Image />,

  onClick: () => {},
  className: '',
  disabled: false,
  active: false,
};

export default Button;
