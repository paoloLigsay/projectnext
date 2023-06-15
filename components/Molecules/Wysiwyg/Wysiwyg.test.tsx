import { render, screen } from '@testing-library/react';
import { Wysiwyg } from '.';
import { WysiwygProps } from './Wysiwyg.interface';
import { Default } from './Wysiwyg.stories';

describe('Wysiwyg', () => {
  it('Should render the Wysiwyg', () => {
    render(<Wysiwyg 
      {...(Default.args as WysiwygProps)}
      id="Wysiwyg"
    />)

    const WysiwygMolecules = screen.getByTestId('Wysiwyg');
    expect(WysiwygMolecules).toBeInTheDocument();
  })
})
