<template>
  <section class="bg-gray-100 dark:bg-gray-900 py-10 px-12">
    <h2>Новости</h2>
    <div
      class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <!--      Card Item-->
      <div
        v-for="article of articles"
        :key="article.id"
        class="rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
      >
        <!-- Clickable Area -->
        <a href="#" class="cursor-pointer">
          <figure>
            <!--            Image-->
            <img
              :src="
                'http://127.0.0.1:1337' +
                article.attributes.image.data.attributes.url
              "
              class="rounded-t h-32 w-full object-cover"
            />

            <figcaption class="p-4">
              <!-- Title -->
              <h3
                class="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
              >
                {{ article.attributes.title }}
              </h3>

              <!-- Description -->
              <small class="leading-5 text-gray-500 dark:text-gray-400">
                {{ article.attributes.description }}
              </small>
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  articles: {
    type: Array,
  },
});
</script>

<style scoped></style>
