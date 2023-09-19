<!-- <template>
  <div
    class="fixed end-0 bottom-0 pe-3 pb-4"
    v-if="isShowed"
  >
    <button
      type="button"
      class="btn"
      @click="scrollToTop"
    >
    <span class="material-symbols-outlined">
    north
    </span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowed: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    handleScroll() {
      const rootElement = document.documentElement;
      const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
      if (rootElement.scrollTop / scrollTotal > 0.1) {
        this.isShowed = true;
      } else {
        this.isShowed = false;
      }
    },
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    document.removeEventListener('scroll', this.handleScroll);
  },
};
</script> -->

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isShowed = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
const handleScroll = () => {
  console.log('handleScroll is called.');
  const scrollY = window.scrollY;
  const innerHeight = window.innerHeight;
  if (scrollY / innerHeight > 0.1) {
    isShowed.value = true;
  } else {
    isShowed.value = false;
  }
  console.log('1ScrollY:', scrollY);
  console.log('2isShowed:', isShowed.value);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <div
    class="fixed end-0 bottom-0 scroll-top-btn pe-3 pb-4"
    v-if="isShowed"
  >
    <button
      type="button"
      class="btn btn-secondary shadow-btn"
      @click="scrollToTop"
    >
      <span class="material-symbols-outlined">
        north
      </span>
    </button>
  </div>
</template>

