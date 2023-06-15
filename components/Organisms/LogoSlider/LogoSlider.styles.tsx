import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: 'container',
  content: 'content',

  title: ctl(
    `
      text-xl
      font-semibold
    `
  )
}

export default styles;
