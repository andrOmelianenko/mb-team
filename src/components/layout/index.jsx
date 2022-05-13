import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Header, Footer } from '..';

const Layout = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <>
      <Header withScroll={!['/contribute', '/contacts'].includes(pathname)} />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
