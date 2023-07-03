import { PageProps } from '../../types/interface';
import componentMap from '../constants/componentMap';
import { Navigation } from '@/components/Organisms/Navigation';
import { Footer } from '@/components/Organisms/Footer';

const PageTemplate = ({ page }: PageProps) => {
  console.log('page', page);

  return (
    <>
      <Navigation primaryLinks={page?.links || []} />
      {page.components.map((component, index) => {
        const Component = componentMap[component.type];

        if (!Component) {
          console.error(`Component not yet created: ${component.type}`);
          return;
        }

        return <Component key={index} {...component.data} />;
      })}
      <Footer footerData={page?.footerData} />
    </>
  );
};

export default PageTemplate;
