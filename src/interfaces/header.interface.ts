export interface HeaderProps {
  currentLocale: string;
}

export interface AvatarProps {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export interface HeroTextProps {
  currentLocale: string;
  className?: string;
}

export interface ActionButtonsProps {
  currentLocale: string;
  className?: string;
}

export interface SocialLinksProps {
  className?: string;
}

export interface SocialLink {
  href: string;
  ariaLabel: string;
  target?: string;
  iconComponent: any;
  iconSize?: number;
}

export interface BubbleProps {
  className: string;
  position: string;
  delay: number;
  duration: number;
}
