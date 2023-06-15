import { PageProps } from './interface';
import componentMap from '../lib/constants/componentMap';

const PageTemplate = ({ page }: PageProps) => {
  return (
    <>
      {page.components.map((component, index) => {
        const Component = componentMap[component.type];
        if (!Component) {
          console.error(`Component not yet created: ${component.type}`);
          return;
        }

        return <Component key={index} {...component.data} />;
      })}
    </>
  )
}

export default PageTemplate;