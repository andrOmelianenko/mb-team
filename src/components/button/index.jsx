import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Typography } from '..';
import s from './index.module.sass';

const Button = ({ children, className, size, ...rest }) => {
  return (
    <button className={cn(s.btn, s[size], className)} {...rest}>
      <Typography
        color="gray_1"
        align="center"
        weight="bold"
        size={size === 'small' ? '14' : '16'}
      >
        {children}
      </Typography>
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
