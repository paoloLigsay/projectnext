import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: 'container',
  content: 'content',

  card: ctl(
    `
      w-full
      h-full
      flex
      flex-col
      justify-between
      rounded-xl
      p-8
      bg-gray-100
      shadow-lg

      dark:text-black
    `
  ),

  cardTitle: `h4 mb-2 overflow-hidden whitespace-nowrap overflow-ellipsis`,
  cardContent: `flex flex-col`,
  cardDescription: `mt-4 mb-6`
};

export default styles;
