<template>
<div>

  <section>
    <Modal />
      <!-- :showModal="showModal" -->
    <GChart
      v-if="showChart"
      :type="typeOne"
      :data="data"
      :options="options"
      :events="chartEvents"
      ref="gChart"/>
  </section>

</div>
</template>

<script>
import moment from 'moment'
import { mapActions,  mapGetters } from 'vuex';
import Modal from '@/components/charts/Modal.vue';

export default {
	name: 'GraphCard',
  props: ['typeOne', 'data', 'options'],
  components: {
    Modal,
  },
  computed: {
    ...mapGetters("eva", ["showChart"]),
  },
  data(){
    return {
      Table: 'Table',
      // showChart: true,
      modalTitle: 'Drill Down Data for ',
      chartOptionsDrillDown: {
          title: 'Sentiment During World War 1',
          legend: { position: 'top' },
      }, // End Chart One Options
      chartEvents: {
        'select': () => {
          //console.log(this.data) // This will show you the data kept for reference
          const chart = this.$refs.gChart.chartObject;
          const selection = chart.getSelection()[0];
          // I need to add one to the row because the first row contains the
          // column headers.
          let row = selection.row + 1
          // This pulls out the specific date from the element that the user
          // clicked on
          let date = this.data[row][0]
          let startOfYear = moment(date); 
          let endOfYear = startOfYear.clone().add(11, 'month').add(30, 'days'); 
          const payload = {
            yearOne: startOfYear.format("M/DD/YYYY"),
            yearTwo: endOfYear.format("M/DD/YYYY")
          };
          const chartPayload = {
            drilldown: true, 
            chart: false, 
          };
          this.fetchEVADrillDownData({ payload })
          this.changeChartOrDrillDown({ chartPayload })
        }
      }, // End Chart Events
    }
  }, // End of data 
  methods: {
    ...mapActions("eva", [
      'fetchEVADrillDownData',
      'changeChartOrDrillDown',
    ]),
  }, // End of methods 
};
</script>

<style scoped>

section {
  height: auto;
}

</style>
