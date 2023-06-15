import { render, screen } from '@testing-library/react';
import { ArticleCards } from '.';
import { ArticleCardsProps } from './ArticleCards.interface';
import { Default } from './ArticleCards.stories';

describe('ArticleCards', () => {
  it('Should render the ArticleCards', () => {
    render(<ArticleCards 
      {...(Default.args as ArticleCardsProps)}
      id="ArticleCards"
    />)

    const ArticleCardsOrganisms = screen.getByTestId('ArticleCards');
    expect(ArticleCardsOrganisms).toBeInTheDocument();
  })
})
