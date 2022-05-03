import { Contact } from '../../components';
import intl from '../../intl'; // temp.

export default () => (
  <section>
    {intl.contacts}
    {intl.write}
    {intl.follow}
    <Contact />
  </section>
);
