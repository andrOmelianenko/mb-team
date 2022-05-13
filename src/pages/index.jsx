import Image from 'next/image';
import cn from 'classnames';
import { Contact, Slider, Socials, Button } from '../components';
import intl from '../intl'; // temp.
import s from './index.module.sass';

export default () => (
  <div>
    <section className={s.main}>
      {intl.title}
      <Button>{intl.contribute_cta}</Button>
    </section>
    <section className={cn(s.sub_0, 'container')}>
      {intl.subtitle_0}
      <div>
        <Image src="/images/tactic.png" width={133} height={139} alt="tactic" />
      </div>
      <div>
        <Image src="/images/therm.png" width={117} height={105} alt="therm" />
      </div>
      <div>
        <Image src="/images/optics.png" width={151} height={91} alt="optics" />
      </div>
    </section>
    <section className={cn(s.sub_1, 'container')}>{intl.subtitle_1}</section>
    <section className={cn(s.sub_2, 'container')}>
      {intl.subtitle_2}
      <Slider />
      {intl.slider_sub}
      <Socials />
    </section>
    <Contact />
  </div>
);
