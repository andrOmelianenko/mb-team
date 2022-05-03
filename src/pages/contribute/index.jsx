import { Contact } from '../../components';
import intl from '../../intl'; // temp.

export default () => {
  // handlers

  return (
    <section>
      {intl.contribute_title}
      <button>{intl.paypal_cta}</button>
      <Contact />
    </section>
  );
};
