import '../styles/globals.css';

const customViewports = {
  mobile: {
    name: 'Mobile: 320px',
    styles: {
      width: '320px',
      height: '480px'
    }
  },
  tablet: {
    name: 'Tablet: 768px',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  desktop: {
    name: 'Desktop: 1440px',
    styles: {
      width: '1440px',
      height: '720px'
    }
  },
  desktopLg: {
    name: 'Desktop: 1920px',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
};

export const parameters = {
  darkMode: {
    current: 'light'
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
  viewport: { viewports: customViewports },
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }]
    }
  }
};
