import Link from 'next/link';
import cn from 'classnames';
import { Socials, Button, Typography } from '..';
import { Hands } from '../../assets/svg';
import intl from '../../intl'; // temp.
import s from './index.module.sass';

const Contact = () => (
  <section className={cn(s.wrapper, 'container')}>
    <div className={s.left}>
      <div className={s.icon}>
        <Hands />
      </div>
      <Typography
        align="center"
        component="h3"
        size="24"
        weight="medium"
        className={s.left_txt}
      >
        {intl.contact_txt_0}
      </Typography>
      <Link href="/contacts" passHref>
        <Button size="small">{intl.contact_cta}</Button>
      </Link>
    </div>
    <div className={s.right}>
      <Typography size="18" weight="medium" className={s.right_txt}>
        {intl.contact_txt_1}
      </Typography>
      <Typography color="gray_3">{intl.share}</Typography>
      <Socials />
    </div>
  </section>
);

export default Contact;
