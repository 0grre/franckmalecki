<template>
  <div class="row justify-content-center no-gutters">
    <div class="col-lg-6"><img class="img-fluid" :src="url + opportunity.Image.url" alt=""/></div>
    <div :class="opportunity.id%2 === 1 ? 'col-lg-6 order-lg-first' : 'col-lg-6'">
      <div class="bg-black text-center h-100 project">
        <div class="d-flex h-100">
          <div class="project-text w-100 my-auto text-center text-lg-left">
            <h4 class="text-white">{{ opportunity.Titre }}</h4>
            <p class="mb-0 text-white-50" v-html="$md.render(opportunity.Texte)"></p>
            <hr class="d-none d-lg-block mb-0 ml-0"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    opportunity: {
      type: Object,
      default: () => ({}),
    },
    url: { type: String }
  },
};
</script>
