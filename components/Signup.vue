<template>
  <section class="signup-section" id="signup" :style="{'background-image': media_url}">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto text-center">
          <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
          <h2 class="text-white mb-5" v-html="$md.render(questionnaire.Texte)"></h2>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfK-dVwtQeCHo4d_C6ONRyJ2oRq7UKAAyTNR0-PaEaq1cJCTQ/viewform">
            <button class="btn btn-primary mx-auto mt-2">{{ questionnaire.Bouton }}</button>
            </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    questionnaire: {
      type: Object,
      default: () => ({}),
    },
    url: { type: String }
  },
  data(props){
    return {
      media_url: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 75%, #000000 100%), url('+props.url + props.questionnaire.Fond.url+')',
    }},
}
</script>
