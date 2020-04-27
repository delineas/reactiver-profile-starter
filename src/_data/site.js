/**
  This file can be accessed using: {{ site.title }}
*/

const year = new Date().getFullYear();

module.exports = {
  year: `${year}`,
  cookieNoticeEnabled: true,
  lang: "es", // for html tag
  title: "Reactiver Profile Starter",
  description: "Eleventy, TailwindCSS, PostCSS page starter",
  url: "", // Don't end with a slash /
  email: "example@example.com",

  author: {
    name: "delineas",
    email: "hola@danielprimo.io",
    legal_email: "hola@danielprimo.io", // Show only in legal page
    github: "https://github.com/delineas",
    twitter: "https://twitter.com/delineas",
  },

  meta_data: {
    theme_color: "#ffffff", // used in Chrome, Firefox OS and Opera
    default_social_image: "/assets/img/social_image.png", // For Open Graph meta
    locale: "es_ES", // For Open Graph meta
    twitter_username: "@delineas", // For Twitter Open Graph meta
  },
};
