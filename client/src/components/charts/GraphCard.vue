<template>
<div>

  <Modal
    :showModal="showModal"
  />

  <GChart
    v-if="showChart"
    :type="typeOne"
    :data="data"
    :options="options"
    :events="chartEvents"
    ref="gChart"/>

</div>
</template>

<script>
import moment from 'moment'
import { mapActions } from 'vuex';
import Modal from '@/components/charts/Modal.vue';

export default {
	name: 'GraphCard',
  props: ['typeOne', 'data', 'options'],
  components: {
    Modal,
  },
  data(){
    return {
      Table: 'Table',
      showModal: false,
      showChart: true,
      modalTitle: 'Drill Down Data for ',
      chartOptionsDrillDown: {
          title: 'Sentiment During World War 1',
          legend: { position: 'top' },
      }, // End Chart One Options
      chartEvents: {
        'select': () => {
          //console.log(this.data) // This will show you the data
          const chart = this.$refs.gChart.chartObject;
          const selection = chart.getSelection()[0];
          // I need to add one to the row because the first row contains the
          // column headers.
          let row = selection.row + 1
          // This pulls out the specific date from the element that the user
          // clicked on
          let date = this.data[row][0]
          // let startOfYear = moment(this.data[row][0]).format("DD/M/YYYY")
          // console.log(startOfYear)
          let startOfYear = moment(date); 
          let endOfYear = startOfYear.clone().add(11, 'month').add(30, 'days'); 
          // console.log(startOfYear.format("M/DD/YYYY"))
          // console.log(endOfYear.format("M/DD/YYYY"))
          const payload = {
            yearOne: startOfYear.format("M/DD/YYYY"),
            yearTwo: endOfYear.format("M/DD/YYYY")
          };
          this.fetchEVADrillDownData({ payload })
          this.showModal = true
          this.showChart = false
        }
      }, // End Chart Events
    }
  }, // End of data 
  methods: {
    ...mapActions("eva", [
      'fetchEVADrillDownData',
    ]),
  }, // End of methods 
};
</script>
