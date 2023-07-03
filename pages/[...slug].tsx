import { GetStaticPaths } from 'next';
import { PageProps, ParamsProps } from '../types/interface';
import data from '../data/data.json';
import navData from '../data/navigation.data.json';
import footerData from '../data/footer.data.json';
import PageTemplate from '../lib/layout/pageTemplate';

const Page: React.FC<PageProps> = ({ page }) => {
  if (!page) {
    return <div>404 - Page Not Found</div>;
  }

  return <PageTemplate page={page} />;
};

export const getStaticProps = async ({ params }: ParamsProps) => {
  const { slug } = params;
  const page = data.pages.find((p) => p.title === slug[0]);

  const navigationData = navData;
  const pageProp = !page ? null : { ...page, ...navigationData, footerData: { ...footerData } };

  return {
    props: {
      page: pageProp
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.pages.map((page) => ({
    params: { slug: [page.title] }
  }));

  return {
    paths,
    fallback: true
  };
};

export default Page;
