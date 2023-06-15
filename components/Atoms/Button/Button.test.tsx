import { render, screen } from '@testing-library/react';
import { Button } from '.';
import { ButtonProps } from './Button.interface';
import { Default } from './Button.stories';

describe('Button', () => {
  it('Should render the Button', () => {
    render(<Button 
      {...(Default.args as ButtonProps)}
      id="Button"
    />)

    const ButtonAtoms = screen.getByTestId('Button');
    expect(ButtonAtoms).toBeInTheDocument();
  })
})
