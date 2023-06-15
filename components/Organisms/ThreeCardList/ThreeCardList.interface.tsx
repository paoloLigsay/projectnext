interface Card {
  title: string;
  description: string;
  url: string;
}

export interface ThreeCardListProps {
  id?: string;
  title?: string;
  cards: Array<Card>;
}
