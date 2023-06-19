import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: 'container',
  content: 'content',
  slider: ctl(`
    overflow-hidden

    [&>.slick-list>.slick-track]:flex
  `)
};

export default styles;
