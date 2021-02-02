<template>
	<div>
		<AltNavbar />
		<Data />
		<Footer />
	</div>
</template>

<script>
import AltNavbar from "@/components/generic/AltNavbar.vue";
import Data from "@/components/eva/Data.vue";
import Footer from "@/components/generic/Footer.vue";

export default {
	name: "EVA",
	components: {
		AltNavbar,
		Data,
    Footer,
  },
}
</script>

<style scoped>

</style>