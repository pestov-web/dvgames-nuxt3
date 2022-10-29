const { find } = useStrapi();

export const state = () => ({
  articles: [],
});

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles;
  },
};

export const actions = {
  async fetch({ commit }) {
    const articles = await find("articles", { populate: "image" });
    commit("setArticles", articles.data);
  },
};

export const getters = {
  articles: (s) => s.articles,
};

const ad = {
  id: 2,
  username: "spoty",
  email: "admin@yandex.ru",
  provider: "local",
  confirmed: true,
  blocked: false,
  createdAt: "2022-10-15T00:39:17.604Z",
  updatedAt: "2022-10-15T04:58:12.191Z",
  name: "Алексей",
  slug: "spoty",
  picture: {
    id: 30,
    name: "125966576_927833460954738_4830586099902842787_n.jpg",
    alternativeText: "125966576_927833460954738_4830586099902842787_n.jpg",
    caption: "125966576_927833460954738_4830586099902842787_n.jpg",
    width: 640,
    height: 640,
    formats: {
      thumbnail: {
        name: "thumbnail_125966576_927833460954738_4830586099902842787_n.jpg",
        hash: "thumbnail_125966576_927833460954738_4830586099902842787_n_790f736dc9",
        ext: ".jpg",
        mime: "image/jpeg",
        path: null,
        width: 156,
        height: 156,
        size: 4.36,
        url: "/uploads/thumbnail_125966576_927833460954738_4830586099902842787_n_790f736dc9.jpg",
      },
      small: {
        name: "small_125966576_927833460954738_4830586099902842787_n.jpg",
        hash: "small_125966576_927833460954738_4830586099902842787_n_790f736dc9",
        ext: ".jpg",
        mime: "image/jpeg",
        path: null,
        width: 500,
        height: 500,
        size: 29.87,
        url: "/uploads/small_125966576_927833460954738_4830586099902842787_n_790f736dc9.jpg",
      },
    },
    hash: "125966576_927833460954738_4830586099902842787_n_790f736dc9",
    ext: ".jpg",
    mime: "image/jpeg",
    size: 45.6,
    url: "/uploads/125966576_927833460954738_4830586099902842787_n_790f736dc9.jpg",
    previewUrl: null,
    provider: "local",
    provider_metadata: null,
    createdAt: "2022-10-15T01:12:07.341Z",
    updatedAt: "2022-10-15T01:12:07.341Z",
  },
  categories: [
    {
      id: 1,
      name: "Покер",
      slug: "poker",
      createdAt: "2022-10-12T06:12:37.860Z",
      updatedAt: "2022-10-13T07:15:17.990Z",
    },
  ],
};
