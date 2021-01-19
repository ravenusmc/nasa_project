<template>
  <div>
    <AltNavbar />
    <Footer />
  </div>
</template>

<script>
import AltNavbar from "@/components/generic/AltNavbar.vue";
import Footer from "@/components/generic/Footer.vue";
//import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: "Mars",
  components: {
    AltNavbar,
    Footer,
  }, // End of components 
  methods:  
    mapActions([
      'fetchMarsData',
    ]),
  mounted() {
    this.fetchMarsData();
  } // End of mounted function
};
</script>

<style scoped>
</style>