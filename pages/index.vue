<template>
  <section>
    <NavBar/>
    <Header :about="about"/>
    <About :about="about"/>
    <Project :opportunity="opportunity" :opportunities="opportunities" :url="url"/>
    <Signup/>
    <Contact/>
    <Footer/>
  </section>
</template>
<script>
export default {
  async asyncData({ $strapi }) {

    return {
      about: await $strapi.find("about"),
      opportunity: await $strapi.find("opportunity"),
      opportunities: await $strapi.find("pages"),
      url: process.env.strapiBaseUri,
    };
  },
}
</script>
