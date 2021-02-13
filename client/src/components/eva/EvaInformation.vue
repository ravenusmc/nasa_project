<template>
	<div>
		<section>

			<div v-for="d of this.vehicleInformation" v-bind:key="d.index">
				<div class="card" style="width: 18rem;">
					<div class="card-body">
						<h3 class="card-title">Vehicle: {{ d.Vehicle }}</h3>
						<h4 class="card-title">Crew: {{ d.Crew }}</h4>
						<h5 class="card-title">Country: {{ d.Country }}</h5>
						<p class="card-text">
							Duration: {{ d.Duration }}
							<br/>
							Purpose: {{ d.Purpose }}
						</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
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

</style>