import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { LanguageSelect } from "./languageSelect.tsx";
import { NAVBAR, NAVBAR_HEADER_MAP } from "../config";
import { getLanguageFromURL } from "../languages";
import { cn } from "../lib/utils.ts";

export function Header({
  currentPage,
  pathname,
}: {
  currentPage: string;
  pathname?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const currentPageMatch = currentPage.slice(1, currentPage.length);
  const langCode = getLanguageFromURL(currentPage);
  const finnishNavbar = NAVBAR["fi"];
  const nativeNavbar = NAVBAR[langCode];
  let navbar: Record<
    string,
    { text: string; link: string; isTranslated?: boolean }[]
  > = finnishNavbar;
  if (langCode !== "fi") {
    navbar = Object.fromEntries(
      Object.entries(finnishNavbar).map(([header, items]) => {
        // Set header to translated one if it exists
        const innerHeader = NAVBAR_HEADER_MAP[langCode];
        const nativeHeader =
          innerHeader[header as keyof typeof innerHeader] ?? header;

        const nativeItems = items.map((item) => {
          const match = Object.values(nativeNavbar)
            .flat()
            .find(
              ({ link: nativeLink }) =>
                // trailing slash + language code
                nativeLink.slice(langCode.length + 1) === item.link.slice(3),
            );
          return {
            text: match?.text ?? item.text,
            link: match?.link ?? item.link,
            isTranslated: !!match,
          };
        });

        return [nativeHeader, nativeItems];
      }),
    );
  }

  const currentLanguagePrefix = pathname?.split('/')[1];
  const signupUrl = `/${langCode}${pathname?.slice(currentLanguagePrefix?.length)}signup`;

  return Object.entries(navbar).map(([_header, children], idx) => (
    <header
      key={idx}
      className="flex w-full flex-1 flex-col items-end gap-8 bg-u+green px-5 md:px-[5.625rem] lg:items-center"
    >
      {/* <div key={idx} className="px-6 xl:px-12"> */}
      <nav className="flex justify-between w-full items-center gap-4 lg:w-auto">
        <ul className="hidden h-full lg:flex">
          {children.map((child, idx) => {
            const url = pathname + child.link;
            const isActive = currentPageMatch === child.link;
            return (
              <li key={idx}>
                <a
                  href={url}
                  aria-current={isActive ? "page" : false}
                  className={cn(
                    "block p-4 text-lg text-white transition-colors hover:bg-u+green-darker",
                    isActive ? "bg-u+green-darker font-medium" : "bg-u+green",
                  )}
                >
                  <span className="whitespace-nowrap">{child.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <a
            href={`/${langCode}${pathname?.slice(currentLanguagePrefix?.length)}`}
            className="lg:hidden block p-4 text-lg text-white transition-colors hover:bg-u+green-darker"
          >            {langCode === "fi" ? "Etusivu" : "Home"}</a>
        <div className="hidden grow justify-end gap-4 lg:flex">
          <a
            href={signupUrl}
            className="hidden h-9 items-center justify-center whitespace-nowrap rounded-md bg-u+green/50 bg-u+sunny px-3 py-0 text-lg font-bold text-u+green ring-offset-background  transition-colors hover:bg-u+sunny/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:inline-flex"
          >
            {langCode === "fi" ? "Ilmoittaudu" : "Sign Up"}
          </a>
          <LanguageSelect language={langCode} />
        </div>
        <div
          className="my-4 flex cursor-pointer flex-col ml-auto rounded-md border border-solid border-u+sunny px-2 py-3 hover:bg-u+sunny/40 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="mb-1 h-0.5 w-5 bg-u+sunny"></div>
          <div className="mb-1 h-0.5 w-5 bg-u+sunny"></div>
          <div className="h-0.5 w-5 bg-u+sunny"></div>
        </div>
      </nav>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute left-0 top-2 z-50 mt-16 flex w-full flex-col items-center gap-5 
              border-y border-solid border-u+green-darker bg-u+green pb-10 pt-10 lg:hidden
              "
          >
            {children.map((child) => {
              const url = pathname + child.link;
              const isActive = currentPageMatch === child.link;
              return (
                <a
                  href={url}
                  aria-current={isActive ? "page" : false}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block h-full cursor-pointer p-4 text-2xl font-normal leading-6 text-white transition duration-300 hover:scale-110 lg:text-base lg:font-medium",
                    isActive ? "bg-u+green-darker font-medium" : "bg-u+green",
                  )}
                >
                  {child.text}
                </a>
              );
            })}
            <div className="flex items-center gap-5">
              <a
            href={signupUrl}
            className="hidden:lg h-9 items-center justify-center whitespace-nowrap rounded-md bg-u+green/50 bg-u+sunny px-3 pt-1 text-lg font-bold text-u+green ring-offset-background  transition-colors hover:bg-u+sunny/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:inline-flex"
          >
            {langCode === "fi" ? "Ilmoittaudu" : "Sign Up"}
          </a>
              <LanguageSelect language={langCode} />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* </div> */}
    </header>
  ));
}
