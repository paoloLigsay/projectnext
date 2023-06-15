import { LogoSliderProps } from './LogoSlider.interface'
import styles from './LogoSlider.styles'

export const LogoSlider = ({ title = '' }: LogoSliderProps) => (  
  <section className={styles.container}>
    <div className={styles.content}>
    </div>
  </section>
)
