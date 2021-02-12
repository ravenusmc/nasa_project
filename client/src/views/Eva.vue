<template>
	<div>
		<AltNavbar />
		<Data />
		<div class='eva-form'>
			<EVAForm />
		</div>
		<EvaInformation />
		<Footer />
	</div>
</template>

<script>
import AltNavbar from "@/components/generic/AltNavbar.vue";
import Data from "@/components/eva/Data.vue";
import EVAForm from "@/components/eva/Form.vue";
import EvaInformation from "@/components/eva/EvaInformation.vue";
import Footer from "@/components/generic/Footer.vue";

export default {
	name: "EVA",
	components: {
		AltNavbar,
		Data,
		EVAForm,
		EvaInformation,
    Footer,
  },
}
</script>

<style scoped>

.eva-form {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

</style>