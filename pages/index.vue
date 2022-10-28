<template>
  <div>
    <h1>{{ token }}</h1>
    <ul>
      <li v-for="article of articles.data" :key="article.id">
        <h2>{{ article.attributes.title }}</h2>
        <h3>{{ article.attributes.description }}</h3>
      </li>
    </ul>
  </div>
</template>

<script setup>
const token = useStrapiToken();
const { fetchUser } = useStrapiAuth();
const user = await fetchUser();
const { find } = useStrapi();
const articles = await find("articles");
</script>

<style scoped></style>
