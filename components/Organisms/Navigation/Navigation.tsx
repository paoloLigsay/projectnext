import { NavigationProps } from './Navigation.interface';
import styles from './Navigation.styles';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import useDetectScroll from '@smakss/react-scroll-direction';

export const Navigation = ({ primaryLinks }: NavigationProps) => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('light');
  const [isNavActive, setIsNavActive] = useState(false);

  const handleClick = () => {
    setIsNavActive(!isNavActive);
  };

  // Handles window undefined error.
  const scrollDirection = useDetectScroll({});

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <nav className={styles.nav(scrollDirection)}>
      <div className={styles.navContent}>
        <p className={styles.navLogo}>
          <span>P</span>ROJECT:
          <span>N</span>EXT
        </p>

        <div className={styles.navMain}>
          <ul className={styles.navLinks}>
            {primaryLinks.map((link, index) => (
              <li key={index} className={styles.navLink}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>

          <button
            className={styles.navThemeButton}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <span>SWITCH TO</span>
            {currentTheme === 'dark' ? 'LIGHT' : 'DARK'} MODE
          </button>
        </div>

        <div className={styles.navMobileHamburger(isNavActive)} onClick={handleClick}>
          <span className={styles.navMobileHamTop(isNavActive)}></span>
          <span className={styles.navMobileHamMid(isNavActive)}></span>
          <span className={styles.navMobileHamBottom(isNavActive)}></span>
        </div>
      </div>
      <div className={styles.navMobileContent(isNavActive)}>
        <ul className={styles.navMobileLinks}>
          {primaryLinks.map((link, index) => (
            <li key={index} className={styles.navLink}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
        <button
          className={styles.navMobileThemeButton}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <span>SWITCH TO </span>
          <br />
          {currentTheme === 'dark' ? 'LIGHT' : 'DARK'} MODE
        </button>
      </div>
    </nav>
  );
};
