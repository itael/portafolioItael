import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

export const socialLinksConfig = [
  {
    href: "https://github.com/itael",
    ariaLabel: "Pueden ver mi perfil de GitHub",
    iconComponent: Github,
    iconSize: 36,
    target: "_blank"
  },
  {
    href: "https://www.linkedin.com/in/erick-miguel-gonz%C3%A1lez-rivera-96265b248/",
    ariaLabel: "Saber mas acerca de experiencia",
    iconComponent: Linkedin,
    iconSize: 36,
    target: "_blank"
  },
  {
    href: "https://wa.me/+50256592292",
    ariaLabel: "Número de teléfono",
    iconComponent: MessageCircle,
    iconSize: 36,
    target: "_blank"
  },
  {
    href: "mailto:itaelgs@gmail.com",
    ariaLabel: "Correo electrónico",
    iconComponent: Mail,
    iconSize: 36,
    target: "_blank"
  }
];

export const buttonConfig = {
  cv: {
    href: "https://q8mthsih9ooiwevt.public.blob.vercel-storage.com/CV_Erick_Miguel_Gonzalez_Rivera.pdf",
    ariaLabel: "Ver cv para saber mas acerca de mi"
  }
};

export const avatarConfig = {
  imageSrc: "/itael3.jpg",
  imageAlt: "itael",
  responsiveSource: {
    media: "(min-width: 768px)",
    srcset: "/itael3.jpg"
  }
};
