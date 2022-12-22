<template>
    <div class="main_img">
    </div>
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
