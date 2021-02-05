<template>
	<div>
		<AltNavbar />
		<Data />
		<EVAForm />
		<Footer />
	</div>
</template>

<script>
import AltNavbar from "@/components/generic/AltNavbar.vue";
import Data from "@/components/eva/Data.vue";
import EVAForm from "@/components/eva/Form.vue";
import Footer from "@/components/generic/Footer.vue";

export default {
	name: "EVA",
	components: {
		AltNavbar,
		Data,
		EVAForm,
    Footer,
  },
}
</script>

<style scoped>

</style>