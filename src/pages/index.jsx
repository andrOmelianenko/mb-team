import cn from 'classnames';
import { Contact, Slider, Socials, Button, Typography } from '../components';
import Image from 'next/image';
import tacticImg from '../../public/images/tactic.png';
import thermImg from '../../public/images/therm.png';
import opticsImg from '../../public/images/optics.png';

import intl from '../intl'; // temp.
import s from './index.module.sass';

export default () => (
  <div>
    <section className={s.main}>
      {intl.title}
      <Button>
        {intl.contribute_cta}
      </Button>
    </section>
    <section className={s.money_reason_wrapper}>
      <Typography
        component="h2"
        className={s.money_reason_header}
        size="32"
        color="gray_1"
        weight="bold"
        align="center"
      >
        {intl.subtitle_0}
      </Typography>

      <div className={s.money_reason_content_block}>
        <div>
          <div className={s.money_reason_content_item_image_wrapper}>
            <div className={s.image_resizer} />
            <div>
              <Image
                src={tacticImg}
                alt={intl.tactic}
              />
            </div>
          </div>
          <Typography
            align="center"
            size="18"
            weight="medium"
            color="gray_1"
            className={s.money_reason_content_item_text}
          >
            {intl.tactic}
          </Typography>
        </div>
        <div>
          <div className={s.money_reason_content_item_image_wrapper}>
            <div className={s.image_resizer} />
            <div>
              <Image
                src={thermImg}
                alt={intl.therm}
              />
            </div>
          </div>
          <Typography
            align="center"
            size="18"
            weight="medium"
            color="gray_1"
            className={s.money_reason_content_item_text}
          >
            {intl.therm}
          </Typography>
        </div>
        <div>
          <div className={s.money_reason_content_item_image_wrapper}>
            <div className={s.image_resizer} />
            <div>
              <Image
                src={opticsImg}
                alt={intl.optics}
              />
            </div>
          </div>
          <Typography
            align="center"
            size="18"
            weight="medium"
            color="gray_1"
            className={s.money_reason_content_item_text}
          >
            {intl.optics}
          </Typography>
        </div>
      </div>
    </section>
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
