import { TextArea } from '@/components/Organisms/TextArea';
import { ArticleCards } from '@/components/Organisms/ArticleCards';
import { ArticleContent } from '@/components/Organisms/ArticleContent';
import { ThreeCardList } from '@/components/Organisms/ThreeCardList';
import { LogoSlider } from '@/components/Organisms/LogoSlider';

interface ComponentMap {
  [key: string]: React.ComponentType<any>;
}

const componentMap: ComponentMap = {
  TextArea,
  ArticleCards,
  ArticleContent,
  ThreeCardList,
  LogoSlider
};

export default componentMap;
