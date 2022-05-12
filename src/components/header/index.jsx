import { useState, useEffect } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { Lang, Socials } from '..';
import intl from '../../intl'; // temp.
import s from './index.module.sass';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSroll = () => {
    setIsScrolled(window.scrollY > window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleSroll);

    return () => {
      window.removeEventListener('scroll', handleSroll);
    };
  }, []);

  return (
    <header className={cn(s.header, { [s.bg]: isScrolled })}>
      <Link href="/">logo</Link>
      <nav>
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

export default Header;
