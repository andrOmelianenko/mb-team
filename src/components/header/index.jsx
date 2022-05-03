import Link from 'next/link';
import { Lang, Socials } from '..';
import intl from '../../intl'; // temp.

const Header = () => {
  // scroll handler
  return (
    <header>
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
