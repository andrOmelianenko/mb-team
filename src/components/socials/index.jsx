import PropTypes from 'prop-types';
import cn from 'classnames';
import { FB_LINK, IG_LINK } from '../../constants';
import { FB, Inst } from '../../assets/svg';
import s from './index.module.sass';

const Socials = ({ color, className }) => {
  const linkProps = {
    target: '_blank',
    rel: 'noreferrer',
    className: s.link,
  };

  return (
    <div className={cn(s.wrapper, className)}>
      <a href={FB_LINK} {...linkProps}>
        <FB className={cn(s.fb, s[color])} />
      </a>
      <a href={IG_LINK} {...linkProps}>
        <Inst className={cn(s.inst, s[color])} />
      </a>
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
