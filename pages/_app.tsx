import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { GoogleFonts } from 'next-google-fonts';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider enableSystem={false} attribute="class">
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap" />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
