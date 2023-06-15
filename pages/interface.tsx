export interface PageProps {
  page: {
    id: number;
    title: string;
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
