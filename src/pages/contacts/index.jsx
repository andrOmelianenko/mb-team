// import cn from 'classnames';
import { Contact, Typography, Socials, Button } from '../../components';
import { Messenger, Telegram } from '../../assets/svg';
import intl from '../../intl'; // temp.
import s from './index.module.sass';

export default () => {
  const subtitleProps = {
    size: '18',
    weight: 'medium',
    color: 'gray_1',
    className: s.subtitle,
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
          {intl.contacts}
        </Typography>
        <Typography {...subtitleProps}>{intl.write}</Typography>
        <Button className={s.btn}>
          <Telegram className={s.btn_icon} />
          {intl.telegram}
        </Button>
        <Button className={s.btn}>
          <Messenger className={s.btn_icon} />
          {intl.messenger}
        </Button>
        <Typography {...subtitleProps}>{intl.follow}</Typography>
        <Socials />
      </div>
      <Contact />
    </section>
  );
};
