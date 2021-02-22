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
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>

      <table class="table">
        <thead class="thead-light">
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
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
    ...mapGetters("eva", ["showModal"]),
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
  height: 500px;
  border: 2px solid black;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 5%;
  margin-right: 5%;
}
</style>