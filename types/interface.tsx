import { Link } from '@/components/Organisms/Navigation/Navigation.interface';

export interface PageProps {
  page: {
    id: number;
    title: string;
    navigationData: {
      links: Array<Link>;
    };
    components: {
      type: string;
      data: {
        title: string;
        description: string;
        cta: {
          ctaText: string;
          ctaUrl: string;
          ctaType: string;
        };
      };
    }[];
  };
}

export interface ParamsProps {
  params: {
    slug: Array<string>;
  };
}
