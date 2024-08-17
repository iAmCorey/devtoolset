import { appConfig } from "./appConfig";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: appConfig.i18n.locales,
    localePrefix: "never",
  });
