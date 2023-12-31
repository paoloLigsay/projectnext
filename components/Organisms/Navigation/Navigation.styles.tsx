import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: 'container',
  content: 'content',

  nav: ctl(`
    fixed
    top-0
    left-0
    w-full
    h-auto
    bg-white
    px-8
    z-50
    shadow

    dark:text-white
    dark:bg-black
  `),

  navContent: ctl(`
    relative
    w-full
    max-w-[1280px]
    mx-auto
    py-4
    flex
    items-center
    justify-between
    bg-white

    lg:justify-start

    dark:bg-black
  `),

  navLogo: ctl(`
    font-kanit
    text-2xl
    pr-[80px]
  `),

  navMain: ctl(`
    hidden
    w-full
    items-center
    justify-between

    lg:flex
`),

  navLinks: ctl(`
    w-full
    flex
    items-center
  `),

  navLink: ctl(`
    ml-8
  `),

  navThemeButton: ctl(`
    flex
    flex-col
    whitespace-nowrap
    text-sm
    leading-none
    
    [&>span]:text-[10px]
  `),

  navMobileHamburger: (isNavActive: boolean) =>
    ctl(`
      transition-all
      relative
      w-[25px]
      h-[25px]
      
      [&>span]:block
      [&>span]:absolute
      [&>span]:w-[25px]
      [&>span]:h-[4px]
      [&>span]:bg-pink-600
      [&>span]:transition-all

      lg:hidden

    ${isNavActive && 'translate-x-[5px]'}
  `),

  navMobileHamTop: (isNavActive: boolean) =>
    ctl(`
      top-0
      left-0

      ${
        isNavActive &&
        `
          rotate-45
          origin-left
        `
      }
  `),

  navMobileHamMid: (isNavActive: boolean) =>
    ctl(`
      left-0
      bottom-1/2
      translate-y-[50%]

      ${
        isNavActive &&
        `
          opacity-0
        `
      }
  `),

  navMobileHamBottom: (isNavActive: boolean) =>
    ctl(`
    bottom-0
    left-0

    ${
      isNavActive &&
      `
        translate-y-[-3px]
        -rotate-45
        origin-left
      `
    }
  `),

  navMobileContent: (isNavActive: boolean) =>
    ctl(`
      z-[-1]
      transition-[top]
      duration-500
      absolute
      w-full
      left-0
      py-4
      px-8
      bg-white
      z-10
      shadow

      lg:hidden

      dark:text-white
      dark:bg-black

      ${isNavActive ? 'top-[63px]' : 'top-[-100vh]'}
  `),

  navMobileLinks: ctl(`
    mb-6

    [&>li]:py-3
    [&>li]:mx-0
    [&>li]:border-b
  `),

  navMobileThemeButton: ctl(`
    text-sm
    text-left
    mt-8
    mb-6

    [&>span]:text-[10px]
  `)
};

export default styles;
