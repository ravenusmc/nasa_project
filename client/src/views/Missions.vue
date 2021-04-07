<template>
	<div>
		<AltNavbar />
		<GraphCardNonDrillDown
			:typeOne='typeOne'
			:data='missionData'
			:options='chartOptionsOne'>
		</GraphCardNonDrillDown>
		<hr>
		<SuccessForm />
		<GraphCardNonDrillDown
			:typeOne='typeOne'
			:data='successFailuresMissionData'
			:options='chartOptionsTwo'>
		</GraphCardNonDrillDown>
		<hr>
		<LocationsFilter />
		<GraphCardNonDrillDown
			:typeOne='typeThree'
			:data='missionLocationsData'
			:options='chartOptionsThree'>
		</GraphCardNonDrillDown>
		<Footer />
	</div>
</template>

<script>
import AltNavbar from "@/components/generic/AltNavbar.vue";
import GraphCardNonDrillDown from '@/components/charts/GraphCardNonDrillDown.vue';
import SuccessForm from '@/components/missions/SuccessForm.vue';
import LocationsFilter from '@/components/missions/LocationsFilter.vue';
import Footer from "@/components/generic/Footer.vue";
import { mapGetters } from 'vuex';

export default {
	name: "Missions",
	components: {
		AltNavbar,
		GraphCardNonDrillDown,
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
