export interface FooterProps {
  footerData: {
    id?: string;
    footerText: string;
    footerLinks: Array<footerLink>;
  };
}

interface footerLink {
  text: string;
  url: string;
}
