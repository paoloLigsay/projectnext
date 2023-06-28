import { ContentWithImageLayoutProps } from './ContentWithImageLayout.interface';
import styles from './ContentWithImageLayout.styles';
import { TextArea } from '../TextArea';
import Image from 'next/image';
import parse from 'html-react-parser';
import useScreenSize from '@/hooks/useScreenSize';

export const ContentWithImageLayout = ({
  title,
  description,
  alignment,
  cta,
  image,
  imageDescription
}: ContentWithImageLayoutProps) => {
  const { isXsToSm } = useScreenSize();
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentWithImage}>
          <div className={styles.contentWithImageDescription}>
            <TextArea
              title={title}
              description={description}
              alignment={isXsToSm ? 'Center' : alignment}
              cta={cta}
            />
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imageDescription}>
              <p> {parse(imageDescription)} </p>
            </div>
            <div className={styles.imageRound}>
              <Image alt={image.title} src={image.url} width={1000} height={1000} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
