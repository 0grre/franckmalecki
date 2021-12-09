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

import NavBar from "../components/NavBar";
import About from "../components/About";
import Project from "../components/Project";
import Signup from "../components/Signup";
import Contact from "../components/Contact";

export default {
  components: {Contact, Signup, Project, About, NavBar},
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
