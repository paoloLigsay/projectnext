import { Button } from '../../Atoms/Button';
import { TextAreaProps } from './TextArea.interface';
import styles from './TextArea.styles';

export const TextArea = ({
  title,
  description,
  cta,
  author,
  newWindow = true,
  isBold = false,
  variant = 'Default',
  alignment = 'Center',
  className
}: TextAreaProps) => {
  return (
    <div className={styles.container(variant)}>
      <div className={styles.content(alignment)}>
        <h2 className={styles.title(isBold, className)}> {title} </h2>
        {author && <p className={styles.author}> ✎ BY: {author.toUpperCase()} </p>}
        <p className={styles.description(variant)}> {description} </p>
        {cta && (
          <Button href={cta.ctaUrl} newWindow={newWindow} variant={cta.ctaType}>
            {cta.ctaText}
          </Button>
        )}
      </div>
    </div>
  );
};
