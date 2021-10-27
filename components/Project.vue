<template>
  <section class="projects-section bg-light" id="projects">
    <div class="container">
      <!-- Featured Project Row-->
      <div class="row align-items-center no-gutters mb-5 mb-lg-5">
        <div class="col-xl-8 col-lg-7">
          <div class="d-flex flex-row">
            <div class="min-h-50 w-75 d-flex align-items-center justify-content-center">
              <p class="position-absolute m-0 text-white small" id="nutri">80% NUTRITION</p>
              <div class="h-100 w-100 bg-primary" id="nutrition"></div>
            </div>
            <div class="w-25 d-flex align-items-center justify-content-center">
              <p class="position-absolute m-0 text-white small" id="spo">20% SPORT</p>
              <div class="h-100 w-100 bg-grey" id="sport"></div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-5">
          <div class="featured-text text-center text-lg-left">
            <h4>100% RÉSULTAT</h4>
            <p class="text-black-50 mb-0">{{ opportunity.Resultat }}</p>
          </div>
        </div>
      </div>
      <!-- Opportunities Row-->
      <Opportunity
        v-for="opportunity in opportunities"
        :key="opportunity.id"
        :opportunity="opportunity"
        :url="url"
      />
    </div>
  </section>
</template>
<script>
export default {
  props: {
    opportunity: {
      type: Object,
      default: () => ({}),
    },
    opportunities: {
      type: Array,
      default: () => [],
    },
    url: { type: String}
  },
};
</script>
