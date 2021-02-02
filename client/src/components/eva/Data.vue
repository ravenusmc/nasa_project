<template>
	<div>

		<GraphCard
			:typeOne='typeOne'
			:data='evaCountData'
			:options='chartOptionsOne'>
		</GraphCard>

		<p>{{ this.evaCountData }}</p>
		<p>HERE</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import GraphCard from '@/components/charts/GraphCard.vue';

export default {
	name: "Data",
	components: {
    GraphCard,
  },
	data() {
    return {
      typeOne: 'BarChart',
      chartOptionsOne: {
        title: 'Word Count by Speech',
        legend: { position: 'top' },
        colors:['#BF0D3E'],
        height: 500,
        animation:{
         duration: 1000,
         easing: 'linear',
       },
      },
    }
	},
	computed: {
    ...mapGetters("eva", ['evaCountData']),
  }, // End Computed properties
}
</script>

<style scoped>

</style>