import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { DeviceContextProvider } from '../../contexts';
import { Header, Footer } from '..';

const Layout = ({ children }) => {
  const { pathname, ...rest } = useRouter();

  return (
    <DeviceContextProvider>
      <Header
        withScroll={!['/contribute', '/contacts'].includes(pathname)}
        pathname={pathname}
      />
      {children}
      <Footer />
    </DeviceContextProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
