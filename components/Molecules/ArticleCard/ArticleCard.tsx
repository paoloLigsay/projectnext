import { Button } from '@/components/Atoms/Button'
import { ArticleCardProps } from './ArticleCard.interface'
import styles from './ArticleCard.styles'

export const ArticleCard = ({ title, description, url }: ArticleCardProps) => (  
  <div className={styles.card}>
    <div>
      <h4 className={styles.cardTitle}> {title} </h4>
        { description && (
            <p className={styles.cardDescription} > { description } </p>
          )
        }
    </div>
    {
      url && (
        <Button variant="link" href={url} newWindow={true}>
          Read More
        </Button>
      )
    }
  </div>
)
