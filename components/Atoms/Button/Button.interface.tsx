import { ReactNode } from "react";

interface ButtonVariant {
  link: string;
  button: string;
}

export interface ButtonProps {
  id?: string;
  children: ReactNode;
  variant: string;
  href?: string;
  newWindow?: boolean;
}
