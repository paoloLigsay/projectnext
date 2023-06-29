import { ArticleCard } from '@/components/Molecules/ArticleCard';
import { ArticleCardsProps, Card } from './ArticleCards.interface';
import styles from './ArticleCards.styles';
import { Filter } from '@/components/Molecules/Filter';
import { ChangeEvent, useEffect, useState } from 'react';

export const ArticleCards = ({ cardBlocks }: ArticleCardsProps) => {
  const [cardBlocksFiltered, setcardBlocksFiltered] = useState<Card[]>([]);

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filterText = e.target.value.toLowerCase();
    setcardBlocksFiltered(
      cardBlocks.filter((card) => card.cardTitle.toLowerCase().includes(filterText))
    );
  };

  useEffect(() => {
    setcardBlocksFiltered(cardBlocks);
  }, [cardBlocks]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Filter
          variant="search"
          placheholder="Search by article title.."
          width="auto"
          onFilterChange={(e: ChangeEvent<HTMLInputElement>) => onFilterChange(e)}
        />
        <div className={styles.cardList}>
          {cardBlocksFiltered.map((card, index) => {
            return (
              <div key={index} className={styles.cardContainer}>
                <ArticleCard
                  title={card.cardTitle}
                  description={card.cardCopy}
                  url={card.cardUrl}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
