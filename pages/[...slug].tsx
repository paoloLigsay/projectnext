import { GetStaticProps, GetStaticPaths } from 'next';

import { PageProps, ParamsProps } from './interface';
import data from '../data/data.json';
import PageTemplate from './pageTemplate';

const Page: React.FC<PageProps> = ({ page }) => {
  if (!page) {
    return <div>404 - Page Not Found</div>;
  }

  return <PageTemplate page={page} />
};

export const getStaticProps = async ({ params }: ParamsProps) => {
  const { slug } = params;
  const page = data.pages.find((p) => p.title === slug[0]);

  const pageProp = !page ? null : page;

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
