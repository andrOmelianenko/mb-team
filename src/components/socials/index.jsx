import PropTypes from 'prop-types';
import cn from 'classnames';
import { FB, Inst } from '../../assets/svg';
import s from './index.module.sass';

const Socials = ({ color, className }) => {
  return (
    <div className={cn(s.wrapper, className)}>
      <FB className={cn(s.fb, s[color])} />
      <Inst className={cn(s.inst, s[color])} />
    </div>
  );
};

Socials.propTypes = {
  color: PropTypes.oneOf(['gray_1', 'white']),
  className: PropTypes.string,
};

Socials.defaultProps = {
  color: 'gray_1',
  className: '',
};

export default Socials;
