import { PageProps } from '../../types/interface';
import componentMap from '../constants/componentMap';
import { Navigation } from '@/components/Organisms/Navigation';

const PageTemplate = ({ page }: PageProps) => {
  return (
    <>
      <Navigation primaryLinks={page?.navigationData?.links || []} />
      {page.components.map((component, index) => {
        const Component = componentMap[component.type];

        if (!Component) {
          console.error(`Component not yet created: ${component.type}`);
          return;
        }

        return <Component key={index} {...component.data} />;
      })}
    </>
  );
};

export default PageTemplate;
