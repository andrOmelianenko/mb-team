import { Layout } from '../components';
import '../styles/index.sass';

export default ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);
