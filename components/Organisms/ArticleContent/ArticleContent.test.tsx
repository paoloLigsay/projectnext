import { render, screen } from '@testing-library/react';
import { ArticleContent } from '.';
import { ArticleContentProps } from './ArticleContent.interface';
import { Default } from './ArticleContent.stories';

describe('ArticleContent', () => {
  it('Should render the ArticleContent', () => {
    render(<ArticleContent 
      {...(Default.args as ArticleContentProps)}
      id="ArticleContent"
    />)

    const ArticleContentOrganisms = screen.getByTestId('ArticleContent');
    expect(ArticleContentOrganisms).toBeInTheDocument();
  })
})
