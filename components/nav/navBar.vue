<template lang="">
    <div>
        <mainNav v-if="num===1"></mainNav>
    </div>
</template>
<script>
import mainNav from './mainNav.vue';
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    components: { mainNav },
    computed: {
        ...mapGetters( "navBar",{
            num:"getNum"
        })
    },

}
</script>
<style lang="">
    
</style>