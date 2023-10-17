<script setup>
const props = defineProps(["product"]);
</script>
<template>
  <div class="card bg-base-100 dark:bg-dark_mode_2 border border-1 border-primary rounded-sm">
    <figure class="px-3 pt-3" v-if="props.product.imagesUrl && props.product.imagesUrl.length > 0">
      <img :src="props.product.imagesUrl[0]" alt="眠月線01" class="rounded-sm" />
    </figure>
    <div class="card-body ml-2 py-5">
      <p class="font-bold">
        名稱 <span class="font-normal">{{ props.product.title }}</span>
      </p>
      <p class="font-bold">
        時程 <span class="font-normal">{{ props.product.itinerary }}</span>
      </p>
      <div class="card-actions justify-center">
        <RouterLink :to="`/product/${props.product.id}`" class="btn btn-outline btn-primary w-full rounded-sm">參考行程</RouterLink>
      </div>
    </div>
  </div>
</template>
