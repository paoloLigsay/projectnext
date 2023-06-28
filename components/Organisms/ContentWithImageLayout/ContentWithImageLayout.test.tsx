import { render, screen } from '@testing-library/react';
import { ContentWithImageLayout } from '.';
import { ContentWithImageLayoutProps } from './ContentWithImageLayout.interface';
import { Default } from './ContentWithImageLayout.stories';

describe('ContentWithImageLayout', () => {
  it('Should render the ContentWithImageLayout', () => {
    render(<ContentWithImageLayout 
      {...(Default.args as ContentWithImageLayoutProps)}
      id="ContentWithImageLayout"
    />)

    const ContentWithImageLayoutOrganisms = screen.getByTestId('ContentWithImageLayout');
    expect(ContentWithImageLayoutOrganisms).toBeInTheDocument();
  })
})
