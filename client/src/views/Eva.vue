<template>
	<div>
		<AltNavbar />
		<Footer />
	</div>
</template>

<script>
import AltNavbar from "@/components/generic/AltNavbar.vue";
import Footer from "@/components/generic/Footer.vue";

export default {
	name: "EVA",
	components: {
    AltNavbar,
    Footer,
  },
}
</script>

<style scoped>

</style>