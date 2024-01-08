export const SITE = {
  title: "Uraohjain",
  description: "Uraohjaus palvelu",
  defaultLanguage: "fi_FI",
};

export const OPEN_GRAPH = {
  image: {
    src: "images/og-image.png",
    alt: "Uraohjain palvelu.",
  },
};

export const KNOWN_LANGUAGES = {
  en: "English",
  fi: "Suomi",
} as const;

export type KnownLanguageCode = keyof typeof KNOWN_LANGUAGES;

export type OuterHeaders = "Uraohjain";

export interface NavbarItem<
  TCode extends KnownLanguageCode = KnownLanguageCode,
> {
  text: string;
  link: `${TCode}/${string}`;
}

export type NavbarItemLink = NavbarItem["link"];

export type Navbar = {
  [TCode in KnownLanguageCode]: {
    [THeader in OuterHeaders]?: NavbarItem<TCode>[];
  };
};

export const NAVBAR: Navbar = {
  en: {
    Uraohjain: [
      { text: "Home", link: "en/" },
      { text: "News", link: "en/news" },
      { text: "Signup", link: "en/signup" },
      { text: "Studing Offering", link: "en/study-offers" },
      { text: "For Businesses", link: "en/companies" },
      { text: "Project", link: "en/uraohjain" },
      { text: "Contact", link: "en/contact" },
    ],
  },
  fi: {
    Uraohjain: [
      { text: "Etusivu", link: "fi/" },
      { text: "Ajankohtaista", link: "fi/news" },
      { text: "Ilmoittautuminen", link: "fi/signup" },
      { text: "Opintotarjonta", link: "fi/study-offers" },
      { text: "Yrityksille", link: "fi/companies" },
      { text: "Hanke", link: "fi/uraohjain" },
      { text: "Yhteystiedot", link: "fi/contact" },
    ],
  },
};

export const NAVBAR_HEADER_MAP: Record<
  Exclude<KnownLanguageCode, "fi">,
  Record<OuterHeaders, string>
> = {
  en: { Uraohjain: "CareerDriver+" },
};
