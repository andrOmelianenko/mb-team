// import cn from 'classnames';
import { Button, Contact, Typography } from '../../components';
import intl from '../../intl'; // temp.
import s from './index.module.sass';

export default () => {
  // handlers

  const subtitleProps = {
    size: '18',
    weight: 'medium',
    color: 'gray_1',
    className: s.subtitle,
  };

  const credProps = {
    color: 'gray_1',
    className: s.content,
  };

  return (
    <section className="padding_top">
      <div className="container">
        <Typography
          color="gray_1"
          size="32"
          weight="bold"
          component="h2"
          className={s.title}
        >
          {intl.contribute_title}
        </Typography>

        <Typography {...subtitleProps}>{intl.swift}</Typography>
        <Typography {...credProps}>{intl.swift_creds}</Typography>

        <Typography {...subtitleProps}>{intl.card}</Typography>
        <Typography {...credProps}>{intl.card_creds}</Typography>

        <Typography {...subtitleProps}>{intl.paypal}</Typography>
        <Button>{intl.paypal_cta}</Button>
      </div>
      <hr className="divider" />
      <Contact />
    </section>
  );
};
