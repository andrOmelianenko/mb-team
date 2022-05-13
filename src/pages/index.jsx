import cn from 'classnames';
import { Contact, Slider, Socials, Button, Typography } from '../components';
import Image from 'next/image';
import tacticImg from '../../public/images/tactic.png';
import thermImg from '../../public/images/therm.png';
import opticsImg from '../../public/images/optics.png';

import intl from '../intl'; // temp.
import s from './index.module.sass';

const renderSub0Item = ({ src, text }) => (
  <div key={text}>
    <div className={s.sub_0_content_item_image_wrapper}>
      <div className={s.sub_0_content_item_image_wrapper_resizer} />
      <div className={s.sub_0_content_item_image}>
        <Image
          src={src}
          alt={text}
        />
      </div>
    </div>
    <Typography
      align="center"
      size="18"
      weight="medium"
      color="gray_1"
      className={s.sub_0_content_item_text}
    >
      {text}
    </Typography>
  </div>
);

export default () => {
  const sub0 = [
    {
      src: tacticImg,
      text: intl.tactic,
    },
    {
      src: thermImg,
      text: intl.therm,
    },
    {
      src: opticsImg,
      text: intl.optics,
    },
  ]

  return (
    <div>
      <section className={s.main}>
        {intl.title}
        <Button>
          {intl.contribute_cta}
        </Button>
      </section>
      <section className="container">
        <Typography
          component="h2"
          className={s.sub_0_header}
          size="32"
          color="gray_1"
          weight="bold"
          align="center"
        >
          {intl.subtitle_0}
        </Typography>

        <div className={s.sub_0_content_block}>
          {sub0.map(renderSub0Item)}
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
}