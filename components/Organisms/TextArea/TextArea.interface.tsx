export interface TextAreaProps {
  title: string;
  description?: string;
  author?: string;
  newWindow?: boolean;
  variant?: keyof TextAreaVariants;
  alignment?: keyof AlignmentVariants;
  isBold?: boolean;
  className?: string;
  cta: {
    ctaText: string;
    ctaUrl: string;
    ctaType: string;
  };
}

export interface TextAreaVariants {
  Default?: string;
  Lg?: string;
  Md?: string;
}

export interface AlignmentVariants {
  Left?: string;
  Center?: string;
  Right?: string;
}
