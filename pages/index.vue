<script lang="ts" setup>

const { data } = useFetch('/api/place')

</script>

<template>
  <div>
    Page: index

    <ul>
      <li v-for="(item, index) in data" :key="item.id">
        <h2>{{ item.title }}</h2>
        <p> {{ item.description }}</p>

        <NuxtImg v-if="item.img" loading="lazy" :src="item.img" placeholder />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
