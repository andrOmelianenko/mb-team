import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';
import Logo from './logo';
import { Lang, Socials } from '..';
import intl from '../../intl'; // temp.
import s from './index.module.sass';

const Header = ({ withScroll }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSroll = () => {
    setIsScrolled(window.scrollY > window.innerHeight);
  };

  useEffect(() => {
    if (!withScroll) {
      return;
    }

    window.addEventListener('scroll', handleSroll);

    return () => {
      window.removeEventListener('scroll', handleSroll);
    };
  }, [withScroll]);

  const isFilled = !withScroll || isScrolled;

  return (
    <header className={cn(s.header, { [s.bg]: isFilled })}>
      <Link href="/" passHref>
        <Logo
          fill={isFilled ? '#333' : '#fff'} // TODO: hardcoded
          className={s.logo}
        />
      </Link>
      <nav className={s.nav}>
        <ul>
          <li>
            <Link href="/contribute">{intl.contribute_cta}</Link>
          </li>
          <li>
            <Link href="/contacts">{intl.contacts}</Link>
          </li>
        </ul>
        <Socials />
        <Lang />
      </nav>
    </header>
  );
};

Header.propTypes = {
  withScroll: PropTypes.bool,
};

Header.defaultProps = {
  withScroll: true,
};

export default Header;
