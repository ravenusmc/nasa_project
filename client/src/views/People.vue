<template>
	<div>
		<AltNavbar />
		<Data />
		<Footer />
	</div>
</template>

<script>
import AltNavbar from "@/components/generic/AltNavbar.vue";
import Data from "@/components/people/Data.vue";
import Footer from "@/components/generic/Footer.vue";
import { mapActions } from "vuex";

export default {
	name: 'People',
	components: {
		AltNavbar,
		Data,
    Footer,
	},
	methods: mapActions("people", ["fetchPeopleData"]),
  mounted() {
    this.fetchPeopleData();
  }, // End of mounted function
}
</script>

<style scoped>

</style>