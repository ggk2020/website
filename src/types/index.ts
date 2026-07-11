// Shared TypeScript types for Grup Gerak Khas website

export type Language = 'ms' | 'en';

export interface BilingualText {
  ms: string;
  en: string;
}

export interface ServiceItem {
  icon: string;
  ms: string;
  en: string;
}

export interface OrgContact {
  email: string;
  phone: string;
  address: BilingualText;
}

export interface SocialMedia {
  facebook: string;
  twitter: string;
  instagram: string;
}

export interface OrgInfo {
  name: string;
  description: BilingualText;
  mission: BilingualText;
  vision: BilingualText;
  contact: OrgContact;
  social_media: SocialMedia;
  services: ServiceItem[];
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    mission_title: string;
    vision_title: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    email_label: string;
    phone_label: string;
    address_label: string;
  };
  footer: {
    copyright: string;
    follow: string;
  };
  lang_toggle: string;
}
