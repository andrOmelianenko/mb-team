import { Contact, Slider, Socials } from '../components';
import intl from '../intl'; // temp.

export default () => (
  <div>
    <section>{intl.title}</section>
    <section>{intl.subtitle_0}</section>
    <section>{intl.subtitle_1}</section>
    <section>
      {intl.subtitle_2}
      <Slider />
      {intl.slider_sub}
      <Socials />
    </section>
    <Contact />
  </div>
);
