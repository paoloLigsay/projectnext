import { LogoSliderProps } from './LogoSlider.interface';
import styles from './LogoSlider.styles';
import Slider from 'react-slick';
import iconMap from '../../../lib/constants/iconMap';
import { TextArea } from '../TextArea';
import { useTheme } from 'next-themes';

export const LogoSlider = ({ title, description, logoCollection, className }: LogoSliderProps) => {
  const sliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    buttons: false,
    centerMode: true,
    cssEase: 'linear',
    infinite: true,
    initialSlide: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 3000,
    variableWidth: true
  };

  const { theme } = useTheme();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <TextArea title={title} description={description} cta={null} className={className} />
        <Slider className={styles.slider} {...sliderSettings}>
          {logoCollection?.map((logo, index) => {
            const Icon = iconMap[logo](theme === 'dark');

            return (
              <div key={index} className={styles.sliderIconContainer}>
                <Icon />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
