import ctl from '@netlify/classnames-template-literals';
import { TextAreaVariants, AlignmentVariants } from './TextArea.interface';

const ContainerStyles: TextAreaVariants = {
  Lg: `
    flex
    flex-col
    justify-center
    h-[60vh]
  `,
  Md: `
    py-[100px]
  `
};

const DescriptionStyles: TextAreaVariants = {
  Default: 'mt-1 mb-3',
  Lg: 'my-6 px-8',
  Md: 'my-4'
};

const ContentAlignmentStyles: AlignmentVariants = {
  Left: 'text-left items-start',
  Right: 'text-right items-end',
  Center: 'text-center items-center'
};

const styles = {
  container: (variant: keyof TextAreaVariants) =>
    ctl(`
    container py-8
    ${ContainerStyles[variant]}
  `),
  content: (alignment: keyof AlignmentVariants) =>
    ctl(`
      flex
      flex-col
      ${ContentAlignmentStyles[alignment]}
  `),

  title: (isBold: boolean, className?: string) =>
    ctl(`
    h2
    mb-2

    ${isBold && 'font-bold'}
    ${isBold && className}
  `),

  description: (variant: keyof TextAreaVariants) =>
    ctl(`
    max-w-3xl

    ${DescriptionStyles[variant]}
  `),

  author: 'mb-4 text-xs'
};

export default styles;
