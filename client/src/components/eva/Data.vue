<template>
	<div>

		<GraphCard
      class="graph-card"
			:typeOne='typeOne'
			:data='evaCountData'
			:options='chartOptionsOne'>
		</GraphCard>

	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GraphCard from '@/components/charts/GraphCard.vue';

export default {
	name: "Data",
	components: {
    GraphCard,
  },
	data() {
    return {
      typeOne: 'ColumnChart',
      chartOptionsOne: {
        title: 'EVA Count by Year',
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
    ...mapGetters("eva", ['evaCountData']),
  }, // End Computed properties
  methods: mapActions("eva", ['fetchEvaCountData']),
  mounted() {
    this.fetchEvaCountData();
  }
}
</script>

<style scoped>

.graph-card {
  margin-top: 30px;
}

</style>