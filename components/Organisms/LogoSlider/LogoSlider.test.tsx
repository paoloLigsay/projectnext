import { render, screen } from '@testing-library/react';
import { LogoSlider } from '.';
import { LogoSliderProps } from './LogoSlider.interface';
import { Default } from './LogoSlider.stories';

describe('LogoSlider', () => {
  it('Should render the LogoSlider', () => {
    render(<LogoSlider 
      {...(Default.args as LogoSliderProps)}
      id="LogoSlider"
    />)

    const LogoSliderOrganisms = screen.getByTestId('LogoSlider');
    expect(LogoSliderOrganisms).toBeInTheDocument();
  })
})
