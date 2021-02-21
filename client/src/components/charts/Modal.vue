<template>
  <div>
    <section v-if="showModal">
			Modal
		</section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Modal",
	// props: ["showModal", "modalTitle"],
	computed: {
    ...mapGetters("eva", ["showModal"]),
  },
};
</script>

<style scoped>

	section {
		height: 500px;
		border: 2px solid black;
  	margin-top: 30px;
		margin-bottom: 30px;
	}

</style>