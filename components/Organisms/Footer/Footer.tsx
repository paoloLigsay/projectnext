import { FooterProps } from './Footer.interface';
import styles from './Footer.styles';

export const Footer = ({ footerData }: FooterProps) => {
  const { footerText, footerLinks } = footerData;
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p> {footerText} </p>
        <div>
          {footerLinks?.map((link, index) => {
            return (
              <a key={index} className={styles.footerLink} href={link.url}>
                {link.text}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
