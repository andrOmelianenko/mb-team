import { Contact, Slider, Socials, Button } from '../components';
import intl from '../intl'; // temp.
import s from './index.module.sass';

export default () => (
  <div>
    <section className={s.main}>
      {intl.title}
      <Button>{intl.contribute_cta}</Button>
    </section>
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
