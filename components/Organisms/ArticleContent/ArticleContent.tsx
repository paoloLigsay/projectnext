import { ArticleContentProps } from './ArticleContent.interface'
import styles from './ArticleContent.styles'
import { Wysiwyg } from '@/components/Molecules/Wysiwyg'

export const ArticleContent = ({ content = '' }: ArticleContentProps) => (  
  <section className={styles.container}>
    <div className={styles.content}>
      <div className={styles.articleContentContainer}>
        <Wysiwyg content={content} />
      </div>
    </div>
  </section>
)
