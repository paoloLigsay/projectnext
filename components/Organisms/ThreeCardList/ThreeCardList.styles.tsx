import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: 'container',
  content: 'content py-[100px]',
  threeCardContainer: ctl(`
    flex
    flex-col
    items-center
    justify-center
  `),

  title: ctl(`
    h2
    w-full
    mb-12
    text-center
  `),

  threeCardList: ctl(`
    flex
    flex-col
    justify-between
    w-full

    sm:flex-row
  `),

  cardContainer: ctl(`
    w-half
    mb-8

    sm:w-[32%]
    sm:mb-0
  `)
};

export default styles;
