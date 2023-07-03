import { ChangeEvent } from 'react';
import { FilterProps, FilterVairant } from './Filter.interface';
import styles from './Filter.styles';

export const Filter = ({ variant, width = 'auto', placheholder, onFilterChange }: FilterProps) => {
  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilterChange && onFilterChange(e);
  };

  return (
    <>
      {variant === 'search' && (
        <div className={styles.searchContainer}>
          <div className={styles.searchBarWrapper(width)}>
            <input
              type="text"
              className={styles.searchBar}
              placeholder={'🔍︎ ' + placheholder}
              onChange={handleFilterChange}
            />
          </div>
        </div>
      )}
    </>
  );
};
