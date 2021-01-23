<template>
	<div>

		<section>
			<h2 class='font center'>Rover Name: {{ this.marsData[0].rover_name }}, Earth Date: {{ this.marsData[0].earth_date }}</h2>
			<!-- {{ this.marsData }} -->
			<div class='image-div'>
				<div v-for="d of this.marsData" v-bind:key="d.index">
					<img :src="d.image" alt="Mars Image">
				</div>
			</div>
		</section>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: "MarsData",
	data() {
    return {
			data: this.marsData,
    };
  },
	computed: {
    ...mapGetters([
      'marsData',
    ]),
  }, // End Computed properties
}
</script>

<style scoped>

section {
	margin-top: 50px;
}

.image-div {
	margin-top: 30px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	text-align: center;
}

img {
	height: 450px;
}

</style>