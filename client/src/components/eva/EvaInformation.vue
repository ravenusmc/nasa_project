<template>
	<div>
		<section>

			<div class='eva-information-div'>
				<div class='center-card' v-for="d of this.vehicleInformation" v-bind:key="d.index">
					<div class="card" style="width: 25rem; height: 800px">
						<img class="card-img-top" :src="d.wikipedia_pic" alt="Image of space ship" style="width: 24.9rem; height: 400px">
						<div class="card-body">
							<h3 class="card-title">Vehicle: {{ d.Vehicle }}</h3>
							<h4 class="card-title">Crew: {{ d.Crew }}</h4>
							<h5 class="card-title">Country: {{ d.Country }}</h5>
							<p class="card-text fix-class-text">
								Duration: {{ d.Duration }}
								<br/>
								Purpose: {{ d.Purpose }}
							</p>
							<a :href="d.wikipedia_url" class="btn btn-primary">Go To Wikipedia Page</a>
						</div>
					</div>
				</div>
			</div>

		</section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: "EvaInformation",
	computed: {
    ...mapGetters('eva', [
			'vehicleInformation',
    ]),
  },
}
</script>

<style scoped>

.eva-information-div {
	margin: 0 3%;
	margin-top: 50px;
	display: grid; 
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-gap: 2em;
	justify-content: center;
}

.center-card {
	display: flex;
  justify-content: center;
  align-items: center;
}

.fix-class-text {
	height: auto;
	/* clear: both; */
}

</style>