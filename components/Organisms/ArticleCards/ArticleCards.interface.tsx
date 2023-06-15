export interface Card {
  cardTitle: string;
  cardCopy?: string;
  cardUrl?: string;
}

export interface ArticleCardsProps {
  title?: string;
  id?: string;
  cardBlocks: Array<Card>;
}
