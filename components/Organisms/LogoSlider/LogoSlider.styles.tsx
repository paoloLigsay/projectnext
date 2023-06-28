import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: 'container py-[50px] pb-[150px]',
  content: 'content',

  slider: ctl(`
    overflow-hidden
    mt-12

    [&>.slick-list>.slick-track]:flex
    [&>.slick-list>.slick-track]:ease-linear
  `),

  sliderIconContainer: ctl(`
    mx-8
    w-auto

    [&>svg]:h-14
  `)
};

export default styles;
