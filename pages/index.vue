<template>
  <section>
    <NavBar/>
    <Header :about="about" :url="url"/>
    <About :about="about"/>
    <Project :opportunity="opportunity" :opportunities="opportunities" :url="url"/>
    <Signup :questionnaire="questionnaire" :url="url"/>
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
  async asyncData() {

    const about = await fetch('/content/about.json')
    const opportunity = await fetch('/content/opportunity.json')
    const opportunities = await fetch('/content/opportunities.json')
    const questionnaire = await fetch('/content/questionnaire.json')
    const links = await fetch('/content/links.json')

    return {
      about: await about.json(),
      opportunity: await opportunity.json(),
      questionnaire: await questionnaire.json(),
      opportunities: await opportunities.json(),
      links: await links.json()
    };
  },
}
</script>
