import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: ctl(`
    container
    mt-[100px]
    mb-[50px]
  `),

  content: ctl(`
    content
    text-center
  `),

  footerLinks: ctl(`
    
  `),

  footerLink: ctl(`
    text-pink-500
    mr-2
    after:content-['|']
    after:ml-2
    [&:last-of-type]:after:hidden
  `)
};

export default styles;
