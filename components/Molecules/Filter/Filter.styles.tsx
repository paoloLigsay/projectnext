import ctl from '@netlify/classnames-template-literals';
import { WidthVariants } from './Filter.interface'

const searchBarWrapperStyles = {
  auto: 'w-[300px] sm:w-[500px]',
  half: 'w-1/2',
  full: 'w-full'
}

const styles = {
  container: 'container',
  content: 'content',

  searchContainer: ctl(`
    w-full
    h-auto
    pt-8
    pb-12
    flex
    justify-end
  `),

  searchBarWrapper: (width: keyof WidthVariants) => ctl(`
    h-auto
    flex
    ${searchBarWrapperStyles[width]}
  `),

  searchBar: ctl(`
    h-15
    w-full
    py-4
    px-8
    border
    border-gray-300
    rounded-xl
    
    focus:outline-0
    focus:border-indigo-400
  `),
  
  searchIcon: ctl(`
    w-6
    h-6
  `)
}

export default styles;
