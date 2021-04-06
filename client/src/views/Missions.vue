<template>
	<div>
		<AltNavbar />
		<GraphCard
			:typeOne='typeOne'
			:data='missionData'
			:options='chartOptionsOne'>
		</GraphCard>
		<hr>
		<SuccessForm />
		<GraphCard
			:typeOne='typeOne'
			:data='successFailuresMissionData'
			:options='chartOptionsTwo'>
		</GraphCard>
		<hr>
		<LocationsFilter />
		<GraphCard
			:typeOne='typeThree'
			:data='missionLocationsData'
			:options='chartOptionsThree'>
		</GraphCard>
		<Footer />
	</div>
</template>

<script>
import AltNavbar from "@/components/generic/AltNavbar.vue";
import GraphCard from '@/components/charts/GraphCard.vue';
import SuccessForm from '@/components/missions/SuccessForm.vue';
import LocationsFilter from '@/components/missions/LocationsFilter.vue';
import Footer from "@/components/generic/Footer.vue";
import { mapGetters } from 'vuex';

export default {
	name: "Missions",
	components: {
		AltNavbar,
		GraphCard,
		SuccessForm,
		LocationsFilter,
    Footer,
	},
	data() {
    return {
			typeOne: 'ColumnChart',
			typeThree: 'BubbleChart',
			chartOptionsOne: {
        title: 'Missions Count by Year',
        legend: { position: 'top' },
        colors:['#BF0D3E'],
        height: 600,
        animation:{
         duration: 1000,
         easing: 'linear',
       },
      },
      chartOptionsTwo: {
        title: 'Missions By Success / Failure',
        legend: { position: 'top' },
        height: 600,
        animation:{
         duration: 1000,
         easing: 'linear',
       },
			},
			chartOptionsThree: {
				title: 'Missions By Location',
        legend: { position: 'top' },
        height: 600,
        animation:{
         duration: 1000,
         easing: 'linear',
       },
      },
    }
	},
	computed: {
    ...mapGetters("mission", [
			'missionData', 
			'successFailuresMissionData',
			'missionLocationsData',
			]),
  }, // End Computed properties
}
</script>
