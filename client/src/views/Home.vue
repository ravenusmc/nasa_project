<template>
  <div>
    <main>
      <Navbar />
      <Pic />
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Pic from "@/components/home/Pic.vue";
import Navbar from "@/components/generic/Navbar.vue";

export default {
  name: "Home",
  components: {
    Pic,
    Navbar,
  },
};
</script>

<style scoped>

main {
  display: grid; 
  grid-template-columns: 20% 80%;
}

</style>
