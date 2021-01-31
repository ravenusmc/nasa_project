<template>
	<div>
		
		<section>
			<div class='people-data-div'>
				<div class='person-div' v-for="d of this.peopleData" v-bind:key="d.index">
					<div class='image-div'>
						<img :src="d.img" alt="astronaut Image">
					</div>
					<h5 class='center font'><span>Name:</span> {{ d.name }}</h5>
					<p class='center font'><span>Description:</span> {{ d.description }}</p>
					<p class='center font'><span>Information:</span> {{d.info }}</p>
				</div>
			</div>
		</section>

	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: "Data",
	computed: {
    ...mapGetters('people', [
			'peopleData',
			'peopleNoDataMessage',
    ]),
  }, // End Computed properties
}
</script>

<style scoped>

.people-data-div {
	display: grid; 
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-gap: 3em;
	margin-top: 50px;
	margin-left: 5%;
	margin-right: 5%;
}

.person-div {
	padding: 10px;
	border: 2px solid black;
}

.image-div {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

img {
	height: 400px; 
	width: 400px;
}

span {
	font-weight: bolder;
	text-transform: uppercase;
}

</style>