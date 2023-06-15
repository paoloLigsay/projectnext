import ctl from '@netlify/classnames-template-literals';
import { TextAreaVariants } from './TextArea.interface';

const ContainerStyles: TextAreaVariants = {
  Home: `
    flex
    flex-col
    justify-center
    h-[60vh]
    bg-gray-50
  `
}

const DescriptionStyles: TextAreaVariants = {
  Default: 'mb-2',
  Home: 'my-6'
}

const styles = {
  container: (variant: keyof TextAreaVariants) => ctl(`
    container py-8
    ${ContainerStyles[variant]}
  `),
  content: 'content text-center items-center',

  title: ctl(`
    h2
    mb-2
  `),
  
  description: (variant: keyof TextAreaVariants) => ctl(`
    max-w-3xl

    ${DescriptionStyles[variant]}
  `),

  author: 'mb-4 text-xs'
};

export default styles;
