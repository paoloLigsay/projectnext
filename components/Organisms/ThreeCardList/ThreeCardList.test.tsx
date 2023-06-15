import { render, screen } from '@testing-library/react';
import { ThreeCardList } from '.';
import { ThreeCardListProps } from './ThreeCardList.interface';
import { Default } from './ThreeCardList.stories';

describe('ThreeCardList', () => {
  it('Should render the ThreeCardList', () => {
    render(<ThreeCardList 
      {...(Default.args as ThreeCardListProps)}
      id="ThreeCardList"
    />)

    const ThreeCardListOrganisms = screen.getByTestId('ThreeCardList');
    expect(ThreeCardListOrganisms).toBeInTheDocument();
  })
})
