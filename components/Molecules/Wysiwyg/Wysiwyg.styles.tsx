import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: 'container',
  content: 'content',

  wysiwyg: ctl(
    `
      text-lg

      [&>h2]:text-2xl

      [&>p]:leading-relaxed
      [&>p]:text-xl

      [&>p>a]:text-pink-500

      [&>p>span.code]:text-base
      [&>p>span.code]:bg-gray-200
      [&>p>span.code]:px-3
      [&>p>span.code]:py-1s
      [&>p>span.code]:mx-0.5
      [&>p>span.code]:rounded-xl
      
      [&>p>span.code]:dark:text-black
    `
  )
};

export default styles;
