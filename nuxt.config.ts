// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/strapi", "@formkit/nuxt", "@nuxtjs/tailwindcss"],
  strapi: {
    url: process.env.API_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
});
