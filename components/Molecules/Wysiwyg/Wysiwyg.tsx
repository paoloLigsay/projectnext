import { WysiwygProps } from './Wysiwyg.interface'
import styles from './Wysiwyg.styles'
import parse from 'html-react-parser'

export const Wysiwyg = ({ content = '' }: WysiwygProps) => (  
  <div className={styles.wysiwyg}>
    {parse(content)}
  </div>
)
