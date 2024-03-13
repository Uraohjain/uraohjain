import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { KNOWN_LANGUAGES, type KnownLanguageCode } from "../config";
import { cn } from "../lib/utils";

interface LanguageSelectProps {
  language: KnownLanguageCode;
}

export function LanguageSelect({ language }: LanguageSelectProps) {
  const handleSelect = (code: string) => {
    const [_1, _2, ...slug] = window.location.pathname.split("/");
    window.location.pathname = `/${code}/${slug.join("/")}`;
  };

  return (
    <div className="flex items-center gap-2">
      <Listbox value={language} onChange={handleSelect}>
        <div className="relative">
          <Listbox.Button
            // className=""
            className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-u+green/50 px-3 text-xl font-bold text-white ring-offset-background transition-colors hover:bg-u+green-darker/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            {language === "en" ? "EN" : "FI"}
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter={"transition ease-out duration-100"}
            enterFrom={"transform opacity-0 -translate-y-1"}
            enterTo={"transform opacity-100 -translate-y-0"}
          >
            <Listbox.Options
              dir="ltr"
              className={cn(
                "focus-none shadow-l absolute right-0 mt-1 max-h-60 w-fit overflow-auto rounded-lg border bg-u+green-darker text-base focus:outline-none focus-visible:outline-none sm:text-sm",
              )}
            >
              {Object.entries(KNOWN_LANGUAGES).map(([code, name]) => (
                <Listbox.Option
                  key={code}
                  className={({ selected, active }) =>
                    cn(
                      "focus-none relative cursor-pointer bg-u+green/50 px-4 py-2 text-white outline-none hover:bg-u+green-darker/75",
                      selected && "bg-u+green-darker/75",
                      active && "bg-u+green-darker/75",
                    )
                  }
                  value={code}
                >
                  {({ selected }) => (
                    <span
                      className={cn(
                        "truncate",
                        selected && "font-semibold",
                        !selected && "font-normal",
                      )}
                    >
                      {name}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
