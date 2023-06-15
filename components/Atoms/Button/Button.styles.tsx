import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: 'container',
  content: 'content',

  link: ctl(`
    uppercase

    arrowIcon
  `),

  button: ctl(
    `
      py-2
      px-4
      bg-pink-500
      text-white
      buttonText
      rounded-full

      hover:bg-pink-600
    `
  )
}

export default styles;
