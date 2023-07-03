import { Link } from '@/components/Organisms/Navigation/Navigation.interface';

export interface PageProps {
  page: {
    id: number;
    title: string;
    links: Array<Link>;
    footerData: {
      footerText: string;
      footerLink: {
        text: string;
        url: string;
      };
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
