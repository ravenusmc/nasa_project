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
import { mapActions } from "vuex";

export default {
  name: "Picture",
  components: {
    AltNavbar,
    Data,
    Footer,
  },
  methods: mapActions("picture", ["fetchPictureData"]),
  mounted() {
    this.fetchPictureData();
  }, // End of mounted function
};
</script>

<style scoped>
</style>