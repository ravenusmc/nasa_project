<template>
	<div>
		<section v-if="!marsNoData">
			<div>
				<h2 class='font center'>Rover Name: {{ this.marsRoverName }}, Earth Date: {{ this.marsEarthDate }}</h2>
			</div>
			<div class='main-image-div'>
				<div class='image-div' v-for="d of this.marsData" v-bind:key="d.index">
					<img :src="d.image" alt="Mars Image">
				</div>
			</div>
		</section>

		<div v-if="marsNoData">
			<h1 class='center font'>No Data</h1>
		</div>

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
    ...mapGetters('mars', [
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
	margin-bottom: 100px;
}

.main-image-div {
	margin-top: 30px;
	margin-left: 3%;
	margin-right: 3%;
	display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 3em;
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