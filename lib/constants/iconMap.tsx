import NextIcon from '@/assets/next-icon.svg';
import NextIconWhite from '@/assets/next-icon-white.svg';
import TypeScriptIcon from '@/assets/typescript-icon.svg';
import StorybookIcon from '@/assets/storybook-icon.svg';
import JavascriptIcon from '@/assets/js-icon.svg';
import TailwindIcon from '@/assets/tailwind-icon.svg';
import ReactIcon from '@/assets/react-icon.svg';

const iconMap = {
  JavascriptIcon: () => JavascriptIcon,
  NextIcon: (isDark) => (isDark ? NextIconWhite : NextIcon),
  ReactIcon: () => ReactIcon,
  StorybookIcon: () => StorybookIcon,
  TailwindIcon: () => TailwindIcon,
  TypeScriptIcon: () => TypeScriptIcon
};

export default iconMap;
