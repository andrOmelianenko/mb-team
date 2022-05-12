import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import s from './index.module.sass';

const Button = ({ children, className, size, ...rest }) => {
  return (
    <button className={cn(s.btn, s[size], className)} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default']),
};

Button.defaultProps = {
  children: null,
  className: '',
  size: 'default',
};

export default Button;
