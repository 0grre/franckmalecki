<template>
<header class="masthead" id="home">
<div class="container d-flex h-100 align-items-center">
  <div class="mx-auto text-center">
    <h1 class="mx-auto my-0 text-uppercase">{{ about.Titre}}</h1>
    <h2 class="text-white-50 mx-auto mt-2 mb-5">{{ about.SousTitre}}</h2>
    <a class="btn btn-primary js-scroll-trigger" href="#signup">ça m'intéresse</a>
  </div>
</div>
</header>
</template>
<script>
export default {
  props: {
    about: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

