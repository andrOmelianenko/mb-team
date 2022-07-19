import Image from 'next/image';
import Slider from 'infinite-react-carousel';
import slideImg from '../../../public/images/slide.jpg';
import { Arrow } from '../../assets/svg';
import s from './index.module.sass';

export default () => {
  const renderArrow = (side) => {
    return (
      <div>
        <Arrow className={s[side]} />
      </div>
    );
  };

  // temp. for example
  const renderSlides = () =>
    Array.apply(null, Array(9)).map((e, i) => (
      <div key={i} className={s.slide}>
        <Image src={slideImg} alt="" />
      </div>
    ));

  return (
    <Slider
      overScan={5}
      slidesPerRow={3}
      virtualList
      className={s.slider}
      prevArrow={renderArrow('prev')}
      nextArrow={renderArrow('next')}
    >
      {renderSlides()}
    </Slider>
  );
};
