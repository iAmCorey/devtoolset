export const appConfig = {
    i18n: {
      // locales: ["en", "de", "es"] as const,
      locales: ["en", "zh"] as const,
      defaultLocale: "en" as const,
      localeLabels: {
        en: "English",
        zh: "简体中文",
        // es: "Español",
        // de: "Deutsch",
        // fr: "asdf",
      },
      localeDetection: false,
      localeCurrencies: {
        /* This only works with Stripe for now. For LemonSqueezy, we need to set the currency in the LemonSqueezy dashboard and there can only be one. */
        en: "USD",
        de: "USD",
        es: "USD",
      },
    },
    auth: {
      oAuthProviders: ["google", "github"],
    },
  };
  
