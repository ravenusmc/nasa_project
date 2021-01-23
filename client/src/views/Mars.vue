<template>
  <div>
    <AltNavbar />
    <Form />
    <MarsData />
    <Footer />
  </div>
</template>

<script>
import AltNavbar from "@/components/generic/AltNavbar.vue";
import Form from "@/components/marsPage/Form.vue";
import MarsData from "@/components/marsPage/MarsData.vue";
import Footer from "@/components/generic/Footer.vue";
//import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  name: "Mars",
  components: {
    AltNavbar,
    MarsData,
    Form,
    Footer,
  },
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