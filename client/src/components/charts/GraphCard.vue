<template>
<div>

  <GChart
    :type="typeOne"
    :data="data"
    :options="options"
    :events="chartEvents"
    ref="gChart"/>

</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	name: 'GraphCard',
  props: ['typeOne', 'data', 'options'],
  data(){
    return {
      Table: 'Table',
      showModal: false,
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
          console.log(date)
          const payload = {
            date,
          };
          this.fetchEVADrillDownData({ payload })
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
