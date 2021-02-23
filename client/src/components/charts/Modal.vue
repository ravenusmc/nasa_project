<template>
  <div>
    <section v-if="showModal">
      <button
        v-on:click="closeModal()"
        type="button"
        class="close"
        aria-label="Close"
      >
      <span aria-hidden="true">&times;</span>
      </button>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Crew</th>
            <th scope="col">Vehicle</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="d of this.evaDrillDownInformation" v-bind:key="d.index">
            <td>{{ d.Country }}</td>
            <td>{{ d.Crew }}</td>
            <td>{{ d.Vehicle }}</td>
            <td>{{ d.Duration }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Modal",
	// props: ["showModal", "modalTitle"],
	computed: {
    ...mapGetters("eva", [
      "showModal",
      "evaDrillDownInformation",
      ]),
  },
  methods: {
    ...mapActions("eva", [
      'changeChartOrDrillDown',
    ]),
    closeModal() {
      const chartPayload = {
        drilldown: false, 
        chart: true, 
      };
      this.changeChartOrDrillDown({ chartPayload })
    },
  }
};
</script>

<style scoped>
section {
  height: auto;
  border: 2px solid black;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 5%;
  margin-right: 5%;
}

</style>