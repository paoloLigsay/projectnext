import { render, screen } from '@testing-library/react';
import { Footer } from '.';
import { FooterProps } from './Footer.interface';
import { Default } from './Footer.stories';

describe('Footer', () => {
  it('Should render the Footer', () => {
    render(<Footer 
      {...(Default.args as FooterProps)}
      id="Footer"
    />)

    const FooterOrganisms = screen.getByTestId('Footer');
    expect(FooterOrganisms).toBeInTheDocument();
  })
})
