<template>
  <div>
    <section v-if="showModal">
			Modal
		</section>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["showModal", "modalTitle"],
};
</script>

<style scoped>

	section {
		height: 500px;
		border: 2px solid black;
	}

</style>