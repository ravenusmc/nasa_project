<template>
	<div>
		<AltNavbar />
		<GraphCard
			:typeOne='typeOne'
			:data='missionData'
			:options='chartOptionsOne'>
		</GraphCard>
		<GraphCard
			:typeOne='typeOne'
			:data='successFailuresMissionData'
			:options='chartOptionsTwo'>
		</GraphCard>
		<Footer />
	</div>
</template>

<script>
import AltNavbar from "@/components/generic/AltNavbar.vue";
import GraphCard from '@/components/charts/GraphCard.vue';
import Footer from "@/components/generic/Footer.vue";
import { mapGetters } from 'vuex';

export default {
	name: "Missions",
	components: {
		AltNavbar,
		GraphCard,
    Footer,
	},
	data() {
    return {
			typeOne: 'ColumnChart',
			// typeTwo: 'BarChart',
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
    }
	},
	computed: {
    ...mapGetters("mission", ['missionData', 'successFailuresMissionData']),
  }, // End Computed properties
}
</script>

<style scoped>

</style>