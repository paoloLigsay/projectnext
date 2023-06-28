import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: 'container',
  content: 'content',

  contentWithImage: ctl(`
    flex
    flex-col
    justify-center
    items-center

    lg:flex-row
    lg:justify-between
  `),

  contentWithImageDescription: ctl(`
    w-full

    lg:w-[50%]
  `),

  imageContainer: ctl(`
    relative
    w-full

    sm:w-[70%]

    lg:w-[45%]
  `),

  imageDescription: ctl(`
    absolute
    bg-white
    top-6
    -left-8
    px-6
    py-3
    rounded-2xl
    shadow-lg
    max-w-[75%]
    text-xs

    sm:text-sm
    sm:max-w-full
    sm:-left-10

    dark:text-black
  `),

  imageRound: ctl(`
    w-full
    h-full
    overflow-hidden
    rounded-2xl
  `)
};

export default styles;
