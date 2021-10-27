<template>
  <section class="about-section text-center" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="text-white mb-4">{{ about.Presentation.Titre}}</h2>
          <p class="text-white-50" v-html="$md.render(about.Presentation.Texte)"></p>
        </div>
      </div>
    </div>
  </section>
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
