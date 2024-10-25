export const SITE = {
  title: "Uraohjain",
  description: "Kirkasta urasuunnitelmasi ja vahvista osaamistasi",
  defaultLanguage: "fi",
};

export const OPEN_GRAPH = {
  image: {
    src: "images/og-image.png",
    alt: "Kirkasta urasuunnitelmasi ja vahvista osaamistasi",
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
    [THeader in "Uraohjain"]?: NavbarItem<TCode>[];
  };
};

export interface FooterItem {
  logo: string;
  title: string;
  description: string;
  eu: string;
}

export type Footer = {
  [TCode in KnownLanguageCode]: {
    [THeader in "footer"]?: FooterItem;
  };
};

export const NAVBAR: Navbar = {
  en: {
    Uraohjain: [
      { text: "Home", link: "en/" },
      { text: "News", link: "en/news" },
      { text: "Study Offering", link: "en/study-offers" },
      { text: "For Businesses", link: "en/companies" },
      { text: "Uraohjain+", link: "en/uraohjain" },
      { text: "Contact", link: "en/contact" },
    ],
  },
  fi: {
    Uraohjain: [
      { text: "Etusivu", link: "fi/" },
      { text: "Ajankohtaiset", link: "fi/news" },
      { text: "Opintotarjonta", link: "fi/study-offers" },
      { text: "Yrityksille", link: "fi/companies" },
      { text: "Uraohjain+", link: "fi/uraohjain" },
      { text: "Yhteystiedot", link: "fi/contact" },
    ],
  },
};

export const NAVBAR_HEADER_MAP: Record<
  Exclude<KnownLanguageCode, "fi">,
  Record<OuterHeaders, string>
> = {
  en: { Uraohjain: "Uraohjain" },
};

export const FOOTER: Footer = {
  en: {
    footer: {
      logo: "/img/logo.svg",
      title: "Clarify your career plan and strengthen your skills!",
      description:
        "Uraohjain+ is a joint development project of StadinAO, Laurea University of Applied Sciences and Metropolia University of Applied Sciences. The project is co-funded by the EU. The development work is carried out in close cooperation with Helsinki Employment Services and Virittämö.",
      eu: "/img/frontpage/europe-en.svg",
    },
  },
  fi: {
    footer: {
      logo: "/img/logo.svg",
      title: "Kirkasta urasuunnitelmasi ja vahvista osaamistasi!",
      description:
        "Uraohjain+ on StadinAO:n, Laurea-ammattikorkeakoulun ja Metropolia Ammattikorkeakoulun yhteiskehittämishanke. Hanke on EU:n osarahoittama. Kehitystyötä tehdään tiiviissä yhteistyössä Helsingin työllisyyspalveluiden ja Virittämön kanssa.",
      eu: "/img/frontpage/europe.svg",
    },
  },
};
