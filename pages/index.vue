<script lang="ts" setup>

const { data } = useFetch('/api/hello')

</script>

<template>
  <div>
    Page: index
    {{ data }}
  </div>
</template>

<style scoped></style>
