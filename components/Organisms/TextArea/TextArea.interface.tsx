export interface TextAreaProps {
  title: string;
  description?: string;
  author?: string;
  newWindow?: boolean;
  variant?: keyof TextAreaVariants;
  cta: {
    ctaText: string;
    ctaUrl: string;
    ctaType: string;
  };
}

export interface TextAreaVariants {
  Default?: string;
  Home?: string;
}
