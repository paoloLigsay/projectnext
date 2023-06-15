import { ArticleCard } from '@/components/Molecules/ArticleCard'
import { ThreeCardListProps } from './ThreeCardList.interface'
import styles from './ThreeCardList.styles'
import parse from 'html-react-parser'

export const ThreeCardList = ({ title, cards }: ThreeCardListProps) => (  
  <section className={styles.container}>
    <div className={styles.content}>
      <div className={styles.threeCardContainer}>
        {title && <h2 className={styles.title}> { parse(title) } </h2>}
        <div className={styles.threeCardList}>
          {cards.map((card, index) => (
            <div className={styles.cardContainer}>
              <ArticleCard
                key={index}
                title={card.title}
                description={card.description}
                url={card.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)
