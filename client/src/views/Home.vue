<template>
  <div>
    <main>
      <AltNavbar class="navbar-alternate" />
      <Navbar class="navbar-original" />
      <InfoArea />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/generic/Navbar.vue";
import AltNavbar from "@/components/generic/AltNavbar.vue";
import InfoArea from "@/components/home/InfoArea.vue";
import Footer from "@/components/generic/Footer.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
    AltNavbar,
    InfoArea,
    Footer,
  },
  methods: {
    ...mapActions(
      "mission", 
      [
        "fetchMissionSuccessFailures",
        "fetchMissionLocations"
      ]),
  },
  mounted() {
    let payload = {
      yearOne: 1958,
      yearTwo: 2020,
      dataType: 'All',
      company: '',
    };
    this.$store.dispatch('mission/fetchMissionSuccessFailures', { payload })
    let data = {
      year: 1958,
    }
    this.$store.dispatch('mission/fetchMissionLocations', { data })
  },
};
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 20% 80%;
}

.navbar-alternate {
  display: none;
}

/* Media Queries */
@media only all and (max-width: 1250px) {
  main {
    grid-template-columns: 1fr;
  }

  .navbar-alternate {
    display: block;
  }

  .navbar-original {
    display: none;
  }
}
</style>
