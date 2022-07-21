import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';
import { DEVICE } from '../../constants';
import { useDeviceContext } from '../../contexts';
import { Burger, Cross } from '../../assets/svg';
import Logo from './logo';
import { Lang, Socials, Typography } from '..';
import intl from '../../intl'; // temp.
import s from './index.module.sass';

const Header = ({ withScroll, pathname }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobOpen, setIsMobOpen] = useState(false);
  const { device } = useDeviceContext();
  const isMobileView = device === DEVICE.MOBILE;

  const handleChange = ({ target: { checked } }) => {
    setIsMobOpen(checked);
  };

  const handleSroll = () => {
    setIsScrolled(window.scrollY > window.innerHeight * 0.93);
  };

  useEffect(() => {
    setIsMobOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!withScroll) {
      return;
    }

    handleSroll();

    window.addEventListener('scroll', handleSroll);

    return () => {
      window.removeEventListener('scroll', handleSroll);
    };
  }, [withScroll]);

  const isFilled = !withScroll || isScrolled;
  const color = isFilled ? 'gray_1' : 'white';
  const navColor = isMobileView || isFilled ? 'gray_1' : 'white';
  const linksProps = {
    color: navColor,
    weight: 'bold',
    className: s.linkstr,
  };

  return (
    <header className={cn(s.header, { [s.bg]: isFilled })}>
      <Link href="/" passHref>
        <Logo
          fill={isFilled ? '#333' : '#fff'} // TODO: hardcoded
          className={s.logo}
        />
      </Link>
      <nav className={cn(s.nav, { [s.nav_mob_open]: isMobOpen })}>
        <ul>
          <li>
            <Link href="/contribute" passHref>
              <Typography {...linksProps}>{intl.contribute_cta}</Typography>
            </Link>
          </li>
          <li>
            <Link href="/contacts" passHref>
              <Typography {...linksProps}>{intl.contacts}</Typography>
            </Link>
          </li>
        </ul>
        <Socials color={navColor} className={s.socials} />
        <Lang color={navColor} />
      </nav>
      <div className={s.burger}>
        <input
          id="burger_input"
          type="checkbox"
          hidden
          checked={isMobOpen}
          onChange={handleChange}
        />
        <label htmlFor="burger_input">
          <Cross className={cn(s.icon, { [s.hide]: !isMobOpen })} />
          <Burger className={cn(s.icon, s[color], { [s.hide]: isMobOpen })} />
        </label>
      </div>
    </header>
  );
};

Header.propTypes = {
  withScroll: PropTypes.bool,
  pathname: PropTypes.string.isRequired,
};

Header.defaultProps = {
  withScroll: true,
};

export default Header;
