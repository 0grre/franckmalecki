<template>
  <div class="social d-flex justify-content-center">
    <a class="mx-2" href="https://vm.tiktok.com/ZSHg53bS/" target="_blank" rel="noopener noreferrer"><fa :icon='["fab" , "tiktok"]' /></a>
    <a class="mx-2" href="https://www.facebook.com/franckmalecki" target="_blank" rel="noopener noreferrer"><fa :icon='["fab" , "facebook"]' /></a>
    <a class="mx-2" href="https://www.instagram.com/franck.mlk/?hl=fr" target="_blank" rel="noopener noreferrer"><fa :icon='["fab" , "instagram"]' /></a>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: Object,
      default: () => ({}),
    },
    url: { type: String }
  },
};
</script>
