<template>
    <section class="main">
      <div class="main_section">
         <nuxt-link to="/write"><h2 class="main_text" >HOW WAS YOUR TODAY?</h2></nuxt-link>
      </div>
    </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: 'IndexPage',
  mounted(){
    this.changeNav(1);
  },
  head () {
      return {
          title: 'CGV',
          meta: [
            {
              hid: 'description',
              name: 'og:description',
              content: 'cgv homepage',
            },
          ],
      }
  },
  methods:{
    ...mapMutations("navBar", {
      changeNav: "changeNav",
    })
  }
}
</script>
