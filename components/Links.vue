<template>
  <div class="social d-flex justify-content-center">
    <a class="mx-2" href="https://vm.tiktok.com/ZSHg53bS/"><fa :icon='["fab" , "tiktok"]' /></a>
    <a class="mx-2" href="https://www.facebook.com/franckmalecki"><fa :icon='["fab" , "facebook"]' /></a>
    <a class="mx-2" href="https://www.instagram.com/franck.mlk/?hl=fr"><fa :icon='["fab" , "instagram"]' /></a>
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
