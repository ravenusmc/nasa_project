<template>
	<div>
		<AltNavbar />
		<GraphCard
      class="graph-card"
			:typeOne='typeOne'
			:data='missionData'
			:options='chartOptionsOne'>
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
      chartOptionsOne: {
        title: 'Mission Count by Year',
        legend: { position: 'top' },
        colors:['#BF0D3E'],
        height: 600,
        animation:{
         duration: 1000,
         easing: 'linear',
       },
      },
    }
	},
	computed: {
    ...mapGetters("mission", ['missionData']),
  }, // End Computed properties
}
</script>

<style scoped>

</style>