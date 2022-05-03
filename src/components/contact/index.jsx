import { Socials } from '..';
import intl from '../../intl'; // temp.

const Contact = () => {
  // ..
  return (
    <section>
      {intl.contact_txt_0}
      <div>
        {intl.contact_txt_1}
        <Socials />
      </div>
    </section>
  );
};

export default Contact;
