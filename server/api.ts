const { find } = useStrapi();

export default defineEventHandler(() => {
  return find("articles", { populate: "image" });
});
