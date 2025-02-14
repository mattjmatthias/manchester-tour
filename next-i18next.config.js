module.exports = {
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'fr', 'de', 'es', 'it', 'cn', 'jp'],
      localeDetection: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage'],
      lookupQuerystring: "l",
      caches: ['cookie'],
    },
  };