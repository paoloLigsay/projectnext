import { Button } from '../../Atoms/Button';
import { TextAreaProps } from './TextArea.interface';
import styles from './TextArea.styles';

export const TextArea = ({ 
  title, 
  description, 
  cta, 
  author, 
  newWindow = true, 
  variant = "Default" 
}: TextAreaProps) => (
  <div className={styles.container(variant)}>
    <div className={styles.content}>
      <h2 className={styles.title}> {title} </h2>
      {author && <p className={styles.author}> ✎ BY: { author.toUpperCase() } </p>}
      <p className={styles.description(variant)}> {description} </p>
      {cta && (
        <Button href={cta.ctaUrl} newWindow={newWindow} variant={cta.ctaType}>
          { cta.ctaText }
        </Button>
      )}
    </div>
  </div>
);
