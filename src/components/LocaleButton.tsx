"use client"

import * as React from "react"
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { appConfig } from "@/lib/appConfig";
import { usePathname } from "@/lib/i18n";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"


import {
  LanguagesIcon
} from "lucide-react";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function LocaleButton() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = useLocale();
  const [locale, setLocale] = useState<string>(currentLocale);
  const { locales, localeLabels } = appConfig.i18n;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <LanguagesIcon className="size-4" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="font-sans opacity-90">
      <DropdownMenuRadioGroup
                value={locale}
                onValueChange={(value) => {
                  setLocale(value);
                  router.replace(
                    `/${value}/${pathname}?${searchParams.toString()}`,
                  );
                }}
              >
                {locales.map((locale) => {
                  return (
                    <DropdownMenuRadioItem key={locale} value={locale}>
                      {locale in localeLabels
                        ? localeLabels[locale]
                        : locale}
                    </DropdownMenuRadioItem>
                  );
                })}
              </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
