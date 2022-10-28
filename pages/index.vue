<template>
  <section>
    <div class="grid">
      <h1>Новости</h1>
      <NewsList :articles="articles.data" />
      <div>{{}}</div>
    </div>
  </section>
</template>

<script setup>
import NewsList from "../components/NewsList";
const { find } = useStrapi();

const {
  data: articles,
  pending,
  refresh,
  error,
} = await useAsyncData("restaurant", () =>
  find("articles", { populate: "image" })
);
</script>

<style scoped></style>
