import { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import intl from '../../intl';
import { Typography } from '..';
import { Arrow } from '../../assets/svg';
import s from './index.module.sass';

const Lang = ({ color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = ({ target: { checked } }) => {
    setIsOpen(checked);
  };

  const listItemProps = {
    weight: 'bold',
    className: s.list_item,
  };

  return (
    <>
      <input
        id="lang_input"
        type="checkbox"
        hidden
        checked={isOpen}
        onChange={handleChange}
      />
      <label
        htmlFor="lang_input"
        className={cn(s.label, { [s.label_open]: isOpen })}
      >
        <Typography weight="bold" color={color} className={s.label_str}>
          {intl.lang_ua_short}
        </Typography>
        <Arrow className={s[color]} />
      </label>
      <div className={cn(s.list, { [s.list_open]: isOpen })}>
        <Typography {...listItemProps}>{intl.lang_ua}</Typography>
        <Typography {...listItemProps}>{intl.lang_en}</Typography>
        <Typography {...listItemProps}>{intl.lang_pl}</Typography>
      </div>
    </>
  );
};

Lang.proptypes = {
  color: PropTypes.string.isRequired,
};

export default Lang;
