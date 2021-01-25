<template>
	<div>

		<section v-if="marsNoData">
			<p>{{ this.marsNoData }}</p>
			<h2 class='font center'>Rover Name: {{ this.marsRoverName }}, Earth Date: {{ this.marsEarthDate }}</h2>
			<!-- {{ this.marsData }} -->
			<div class='main-image-div'>
				<div class='image-div' v-for="d of this.marsData" v-bind:key="d.index">
					<img :src="d.image" alt="Mars Image">
				</div>
			<div v-if="marsNoData">
				<h1 class='center'>No Data</h1>
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
			'marsNoData',
			'marsRoverName',
			'marsEarthDate',
    ]),
  }, // End Computed properties
}
</script>

<style scoped>

section {
	margin-top: 50px;
}

.main-image-div {
	margin-top: 30px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	text-align: center;
}

.image-div {
	margin-top: 10px;
	margin-bottom: 10px;
}

img {
	height: 450px;
}

</style>