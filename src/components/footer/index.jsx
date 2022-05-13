import intl from '../../intl'; // temp.
import s from './index.module.sass';

const Footer = () => (
  <footer className={s.footer}>
    {intl.mb_team}
    <ul>
      <li>{intl.docs}</li>
      <li>{intl.info}</li>
    </ul>
    {intl.hash}
  </footer>
);

export default Footer;
