import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './index.module.sass';

const Typography = ({
  className,
  color,
  size,
  weight,
  component:  Component,
  align,
  children,
  ...other
}) => {
  return (
    <Component
      className={cn([
        s[`color_${color}`],
        s[`size_${size}`],
        s[`weight_${weight}`],
        s[`align_${align}`],
        className,
      ])}
      {...other}
    >
      {children}
    </Component>
  );
};

Typography.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['black', 'white', 'gray_1', 'gray_3', 'gray_3']),
  size: PropTypes.oneOf(['14', '16', '18', '24', '32', '48']),
  weight: PropTypes.oneOf(['normal', 'medium', 'bold']),
  component: PropTypes.oneOf(['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node,
};

Typography.defaultProps = {
  className: '',
  color: 'black',
  size: '14',
  weight: 'normal',
  component: 'p',
  align: 'left',
  children: null,
};


export default Typography;
