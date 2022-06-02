<template>
  <nav @scroll="navbar_white()" :class="['navbar navbar-expand-lg navbar-light fixed-top', isWhite && 'navbar-shrink']" id="mainNav">
    <div class="container">
      <div class="social d-flex justify-content-center">
        <a class="mx-2" href="https://vm.tiktok.com/ZSHg53bS/" target="_blank" rel="noopener noreferrer"><fa :icon='["fab" , "tiktok"]' /></a>
        <a class="mx-2" href="https://www.facebook.com/franckmalecki" target="_blank" rel="noopener noreferrer"><fa :icon='["fab" , "facebook"]' /></a>
        <a class="mx-2" href="https://www.instagram.com/franck.mlk/?hl=fr" target="_blank" rel="noopener noreferrer"><fa :icon='["fab" , "instagram"]' /></a>
      </div>

      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
              aria-label="Toggle navigation">
        Menu
        <fa :icon='["fas" , "bars"]' />
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item "><a class="nav-link js-scroll-trigger" href="#about">À propos</a></li>
          <li class="nav-item "><a class="nav-link js-scroll-trigger" href="#projects">Opportunités</a></li>
          <li class="nav-item "><a class="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  props:{
    links: {
      type: Object,
      default: () => ({}),
    }
  },
  data(){
    return {
      isWhite: false
    }
  },
  methods: {
    navbar_white() {
      this.isWhite = true
    },
  },
  mounted() {
    document.addEventListener('scroll', this.navbar_white)
  }
}
</script>

