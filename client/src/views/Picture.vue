<template>
  <div>
    <AltNavbar />
    <Data />
    <Footer />
  </div>
</template>

<script>
import AltNavbar from "@/components/generic/AltNavbar.vue";
import Data from "@/components/picturePage/Data.vue";
import Footer from "@/components/generic/Footer.vue";
// import { mapActions } from "vuex";

export default {
  name: "Picture",
  components: {
    AltNavbar,
    Data,
    Footer,
  },
  // methods: mapActions("mars", ["fetchMarsData"]),
  mounted() {
    const payload = {
      solDay: 1000,
      camera: "FHAZ",
    };
    this.fetchMarsData({ payload });
  }, // End of mounted function
};
</script>

<style scoped>
</style>