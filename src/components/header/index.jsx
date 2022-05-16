import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';
import Logo from './logo';
import { Lang, Socials, Typography } from '..';
import intl from '../../intl'; // temp.
import s from './index.module.sass';

const Header = ({ withScroll }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSroll = () => {
    setIsScrolled(window.scrollY > window.innerHeight * 0.93);
  };

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
            <Link href="/contribute" passHref>
              <Typography weight="bold" color={color} className={s.linkstr}>
                {intl.contribute_cta}
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/contacts" passHref>
              <Typography weight="bold" color={color} className={s.linkstr}>
                {intl.contacts}
              </Typography>
            </Link>
          </li>
        </ul>
        <Socials color={color} className={s.socials} />
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
