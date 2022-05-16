import Link from 'next/link';
import cn from 'classnames';
import { Contact, Slider, Socials, Button, Typography } from '../components';
import Image from 'next/image';
import tacticImg from '../../public/images/tactic.png';
import thermImg from '../../public/images/therm.png';
import opticsImg from '../../public/images/optics.png';
import { Cart, Delivery, Parcel, Report } from '../assets/svg';

import intl from '../intl'; // temp.
import s from './index.module.sass';

const renderSub0Item = ({ src, text }) => (
  <div key={text}>
    <div className={s.sub_0_content_item_image_wrapper}>
      <div className={s.sub_0_content_item_image_wrapper_resizer} />
      <div className={s.sub_0_content_item_image}>
        <Image src={src} alt={text} />
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

const renderSub1Item = ({ Icon, text_0, text_1 }) => (
  <div key={text_0} className={s.sub_1_item}>
    <div className={s.sub_1_bg}>
      <Icon />
    </div>
    <Typography
      align="center"
      size="18"
      weight="medium"
      color="gray_1"
      className={s.sub_1_title}
    >
      {text_0}
    </Typography>
    <Typography align="center" size="14" color="gray_3">
      {text_1}
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
  ];

  const sub1 = [
    {
      Icon: Cart,
      text_0: intl.cart,
      text_1: intl.cart_sub,
    },
    {
      Icon: Delivery,
      text_0: intl.delivery,
      text_1: intl.delivery_sub,
    },
    {
      Icon: Parcel,
      text_0: intl.parcel,
      text_1: intl.parcel_sub,
    },
    {
      Icon: Report,
      text_0: intl.report,
      text_1: intl.report_sub,
    },
  ];

  const headingProps = {
    component: 'h2',
    className: s.heading,
    size: '32',
    color: 'gray_1',
    weight: 'bold',
    align: 'center',
  };

  return (
    <>
      <section className={s.main}>
        <div className={cn(s.main_content, 'container')}>
          <Typography
            component="h1"
            size="48"
            color="white"
            weight="bold"
            align="center"
            className={s.main_heading}
          >
            {intl.title}
          </Typography>
          <Link href="/contribute" passHref>
            <Button>{intl.contribute_cta}</Button>
          </Link>
        </div>
      </section>
      <section className="container">
        <Typography {...headingProps}>{intl.subtitle_0}</Typography>
        <div className={s.sub_0_content_block}>{sub0.map(renderSub0Item)}</div>
      </section>
      <hr className="divider" />
      <section className={cn(s.sub_1, 'container')}>
        <Typography {...headingProps}>{intl.subtitle_1}</Typography>
        <div className={s.sub_1_content}>{sub1.map(renderSub1Item)}</div>
      </section>
      <hr className="divider" />
      <section className={cn(s.sub_2, 'container')}>
        <Typography {...headingProps}>{intl.subtitle_2}</Typography>
        <Slider />
        {intl.slider_sub}
        <Socials />
      </section>
      <hr className="divider" />
      <Contact />
    </>
  );
};
