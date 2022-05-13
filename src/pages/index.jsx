import { Contact, Slider, Socials, Button, Typography } from '../components';
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
        <div className={s.money_reason_content_item}>
          <div className={s.money_reason_content_item_image_wrapper}>
            <img src="" className={s.money_reason_content_item_image} />
          </div>
          <p className={s.money_reason_content_item_text}>
            {intl.subtitle_0}
          </p>
        </div>
        <div className={s.money_reason_content_item}>
          <div className={s.money_reason_content_item_image_wrapper}>
            <img src="" className={s.money_reason_content_item_image} />
          </div>
          <p className={s.money_reason_content_item_text}>
            {intl.subtitle_0}
          </p>
        </div>
        <div className={s.money_reason_content_item}>
          <div className={s.money_reason_content_item_image_wrapper}>
            <img src="" className={s.money_reason_content_item_image} />
          </div>
          <p className={s.money_reason_content_item_text}>
            {intl.subtitle_0}
          </p>
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
