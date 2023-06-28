import { AlignmentVariants } from '../TextArea/TextArea.interface';

export interface ContentWithImageLayoutProps {
  id?: string;
  title?: string;
  description?: string;
  alignment?: keyof AlignmentVariants;
  newWindow?: boolean;
  cta: {
    ctaText: string;
    ctaUrl: string;
    ctaType: string;
  };
  image: {
    url: string;
    title: string;
  };
  imageDescription: string;
}
