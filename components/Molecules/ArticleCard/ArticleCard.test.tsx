import { render, screen } from '@testing-library/react';
import { ArticleCard } from '.';
import { ArticleCardProps } from './ArticleCard.interface';
import { Default } from './ArticleCard.stories';

describe('ArticleCard', () => {
  it('Should render the ArticleCard', () => {
    render(<ArticleCard 
      {...(Default.args as ArticleCardProps)}
      id="ArticleCard"
    />)

    const ArticleCardMolecules = screen.getByTestId('ArticleCard');
    expect(ArticleCardMolecules).toBeInTheDocument();
  })
})
