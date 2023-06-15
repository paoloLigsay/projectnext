import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: 'container',
  content: 'content',

  cardList: ctl(`
    flex
    flex-wrap
  `),

  cardContainer: ctl(`
    w-full
    mb-6

    sm:w-[49%]
    sm:mr-[2%]
    sm:[&:nth-of-type(2n)]:mr-0

    lg:w-[32%]
    lg:[&:nth-of-type(2n)]:mr-[2%]
    lg:[&:nth-of-type(3n)]:mr-0
  `)
}

export default styles;
