import { PageProps } from './interface';
import componentMap from '../lib/constants/componentMap';
import { Navigation } from '@/components/Organisms/Navigation';

const PageTemplate = ({ page }: PageProps) => {
  console.log('page', page);

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
