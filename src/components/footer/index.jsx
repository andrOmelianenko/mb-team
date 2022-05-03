import intl from '../../intl'; // temp.

const Footer = () => {
  // scroll handler
  return (
    <footer>
      {intl.mb_team}
      <ul>
        <li>{intl.docs}</li>
        <li>{intl.info}</li>
      </ul>
      {intl.hash}
    </footer>
  );
};

export default Footer;
