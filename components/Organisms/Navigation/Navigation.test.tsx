import { render, screen } from '@testing-library/react';
import { Navigation } from '.';
import { NavigationProps } from './Navigation.interface';
import { Default } from './Navigation.stories';

describe('Navigation', () => {
  it('Should render the Navigation', () => {
    render(<Navigation 
      {...(Default.args as NavigationProps)}
      id="Navigation"
    />)

    const NavigationOrganisms = screen.getByTestId('Navigation');
    expect(NavigationOrganisms).toBeInTheDocument();
  })
})
