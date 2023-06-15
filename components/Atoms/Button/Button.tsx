import { ButtonProps } from './Button.interface'
import styles from './Button.styles'

export const Button = ({ children, variant, href, newWindow = false }: ButtonProps) => (  
  variant === "link" ? (
    <a href={href} className={styles.link} target={newWindow ? '_blank' : '_self'}> { children } </a>
  ) : (
    <button className={styles.button}> { children } </button>
  )
)
