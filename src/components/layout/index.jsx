import PropTypes from 'prop-types';
import { Header, Footer } from '..';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
