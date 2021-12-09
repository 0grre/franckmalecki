<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <div class="social d-flex justify-content-center">
        <a class="mx-2" href="https://vm.tiktok.com/ZSHg53bS/"><fa :icon='["fab" , "tiktok"]' /></a>
        <a class="mx-2" href="https://www.facebook.com/franckmalecki"><fa :icon='["fab" , "facebook"]' /></a>
        <a class="mx-2" href="https://www.instagram.com/franck.mlk/?hl=fr"><fa :icon='["fab" , "instagram"]' /></a>
      </div>

      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
              aria-label="Toggle navigation">
        Menu
        <fa :icon='["fas" , "bars"]' />
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">À propos</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">Opportunités</a></li>
          <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#signup">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  mounted(){
    const nav = document.getElementById('mainNav');
    if (nav.offset().top > 100){
      nav.addClass("navbar-shrink");
    } else {
      nav.removeClass("navbar-shrink");
    }
  }
}
</script>

