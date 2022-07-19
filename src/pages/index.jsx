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

const renderSub0Item = ({ src, str }) => (
  <div key={str}>
    <div className={s.sub_0_content_item_image_wrapper}>
      <div className={s.sub_0_content_item_image_wrapper_resizer} />
      <div className={s.sub_0_content_item_image}>
        <Image src={src} alt={str} />
      </div>
    </div>
    <Typography align="center" size="18" weight="medium" color="gray_1">
      {str}
    </Typography>
  </div>
);

const renderSub1Item = ({ Icon, str_0, str_1 }) => (
  <div key={str_0} className={s.sub_1_item}>
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
      {str_0}
    </Typography>
    <Typography align="center" size="15" color="gray_3">
      {str_1}
    </Typography>
  </div>
);

const renderSub3Item = ({ str_0, str_1 }) => (
  <div key={str_0}>
    <Typography
      align="center"
      size="42"
      weight="bold"
      color="gray_1"
      className={s.sub_3_item_count}
    >
      {str_0}
    </Typography>
    <Typography align="center" size="15" color="gray_3">
      {str_1}
    </Typography>
  </div>
);

export default () => {
  const sub0 = [
    {
      src: tacticImg,
      str: intl.tactic,
    },
    {
      src: thermImg,
      str: intl.therm,
    },
    {
      src: opticsImg,
      str: intl.optics,
    },
  ];

  const sub1 = [
    {
      Icon: Cart,
      str_0: intl.cart,
      str_1: intl.cart_sub,
    },
    {
      Icon: Delivery,
      str_0: intl.delivery,
      str_1: intl.delivery_sub,
    },
    {
      Icon: Parcel,
      str_0: intl.parcel,
      str_1: intl.parcel_sub,
    },
    {
      Icon: Report,
      str_0: intl.report,
      str_1: intl.report_sub,
    },
  ];

  const sub3 = [
    {
      str_0: intl.therm_count,
      str_1: intl.therm_count_sub,
    },
    {
      str_0: intl.tech_count,
      str_1: intl.tech_count_sub,
    },
    {
      str_0: intl.tactic_count,
      str_1: intl.tactic_count_sub,
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
        <div className={s.sub_2_bottom}>
          <Typography size="15" color="gray_3">
            {intl.slider_sub}
          </Typography>
          <Socials className={s.sub_2_socials} />
        </div>
      </section>
      <hr className="divider" />
      <section className={cn(s.sub_3, 'container')}>
        <Typography {...headingProps}>{intl.subtitle_3}</Typography>
        <div className={s.sub_3_amount}>
          <Typography
            size="56"
            weight="bold"
            color="gray_1"
            className={s.sub_3_amount_counter}
          >
            {intl.amount}
          </Typography>
          <Typography
            size="18"
            weight="medium"
            color="gray_3"
            className={s.sub_3_amount_sub}
          >
            {intl.amount_sub}
          </Typography>
        </div>
        <div className={s.sub_3_content}>{sub3.map(renderSub3Item)}</div>
      </section>
      <hr className="divider" />
      <Contact />
    </>
  );
};
