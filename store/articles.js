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
