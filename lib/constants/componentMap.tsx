import { ArticleCards } from '@/components/Organisms/ArticleCards';
import { ArticleContent } from '@/components/Organisms/ArticleContent';
import { ContentWithImageLayout } from '@/components/Organisms/ContentWithImageLayout';
import { LogoSlider } from '@/components/Organisms/LogoSlider';
import { TextArea } from '@/components/Organisms/TextArea';
import { ThreeCardList } from '@/components/Organisms/ThreeCardList';

// TODO: Encountering error in pageTemplate when defining type
// interface ComponentMap {
//   [key: string]: React.ComponentType<any>;
// }

const componentMap = {
  ArticleCards,
  ArticleContent,
  ContentWithImageLayout,
  LogoSlider,
  TextArea,
  ThreeCardList
};

export default componentMap;
