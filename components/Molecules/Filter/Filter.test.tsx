import { render, screen } from '@testing-library/react';
import { Filter } from '.';
import { FilterProps } from './Filter.interface';
import { Default } from './Filter.stories';

describe('Filter', () => {
  it('Should render the Filter', () => {
    render(<Filter 
      {...(Default.args as FilterProps)}
      id="Filter"
    />)

    const FilterMolecules = screen.getByTestId('Filter');
    expect(FilterMolecules).toBeInTheDocument();
  })
})
