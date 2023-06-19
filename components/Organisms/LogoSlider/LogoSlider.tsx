import { LogoSliderProps } from './LogoSlider.interface';
import styles from './LogoSlider.styles';
import Slider from 'react-slick';
import iconMap from '../../../lib/constants/iconMap';

export const LogoSlider = ({ title, description, logoCollection }: LogoSliderProps) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: null,
    nextArrow: null
  };

  return (
    <section className={styles.container}>
      <div className={styles.content} {...sliderSettings}>
        <Slider className={styles.slider}>
          {logoCollection?.map((logo, index) => {
            const Icon = iconMap[logo];

            return (
              <div>
                <Icon />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
