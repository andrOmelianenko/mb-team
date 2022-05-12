import { Button, Contact } from '../../components';
import intl from '../../intl'; // temp.

export default () => {
  // handlers

  return (
    <section>
      {intl.contribute_title}
      <Button>{intl.paypal_cta}</Button>
      <Contact />
    </section>
  );
};
