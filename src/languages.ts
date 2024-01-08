import { type KnownLanguageCode } from "./config";

export { KNOWN_LANGUAGES, type KnownLanguageCode } from "./config";

export const langPathRegex = /\/([a-z]{2,3}-?[a-zA-Z]{0,4})\//;

export function getLanguageFromURL(pathname: string): KnownLanguageCode {
  const langCodeMatch = pathname.match(langPathRegex);
  const langCode = langCodeMatch ? langCodeMatch[1] : "en";
  return langCode as KnownLanguageCode;
}
