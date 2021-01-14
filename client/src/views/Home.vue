<template>
  <div>
    <main>
      <Navbar />
      <InfoArea />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/generic/Navbar.vue";
import InfoArea from "@/components/home/InfoArea.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    InfoArea,
  },
};
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 20% 80%;
}
</style>
