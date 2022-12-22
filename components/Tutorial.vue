<!-- Please remove this file from your project -->
<template>
   <button @click="cookietest" hidden>cookietest</button>
  
</template>

<script>
import { instance, setInterceptors } from '../api/request';

export default {
  name: 'NuxtTutorial',
  methods:{
    async cookietest(){
      try {
        setInterceptors(instance);
        let reponse =await instance.get('/test');
        console.log(reponse);
      } catch (error) {
        console.log(error);
          alert('av');
      }

    }
  }
}
</script>
