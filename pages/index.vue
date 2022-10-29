<template>
  <section>
    <h1></h1>
    <div class="grid">
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
} = await useAsyncData("articles", () =>
  find("articles", { populate: "image" })
);
</script>

<style scoped></style>
