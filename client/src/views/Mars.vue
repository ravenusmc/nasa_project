<template>
  <div>
    <AltNavbar />
    <Form />
    <Footer />
  </div>
</template>

<script>
import AltNavbar from "@/components/generic/AltNavbar.vue";
import Form from "@/components/marsPage/Form.vue";
import Footer from "@/components/generic/Footer.vue";
//import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: "Mars",
  components: {
    AltNavbar,
    Form,
    Footer,
  }, // End of components 
  methods:  
    mapActions([
      'fetchMarsData',
    ]),
  mounted() {
    const payload = {
				solDay: 1000,
				camera: "FHAZ",
		};
    this.fetchMarsData({ payload });
  } // End of mounted function
};
</script>

<style scoped>
</style>