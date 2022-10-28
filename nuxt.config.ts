// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/strapi", "@formkit/nuxt", "@nuxtjs/tailwindcss"],
  // uncomment before deploy
  // runtimeConfig: {
  //   strapi: {
  //     // nuxt/strapi options available server-side
  //     url: "http://localhost:1337",
  //   },
  //   public: {
  //     strapi: {
  //       // nuxt/strapi options available client-side
  //       url: "http://apid.pestov-web.ru",
  //     },
  //   },
  // },
  strapi: {
    // comment before deploy =)
    url: process.env.API_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
    auth: { populate: ["picture", "categories"] },
  },
});
