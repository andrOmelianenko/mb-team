import { Typography } from '..';
import intl from '../../intl'; // temp.
import s from './index.module.sass';

const Footer = () => (
  <footer className={s.footer}>
    <Typography color="white">{intl.mb_team}</Typography>
    <ul className={s.links}>
      <li className={s.links_item}>
        <Typography color="white">{intl.docs}</Typography>
      </li>
      <li className={s.links_item}>
        <Typography color="white">{intl.info}</Typography>
      </li>
    </ul>
    <Typography color="white">{intl.hash}</Typography>
  </footer>
);

export default Footer;
