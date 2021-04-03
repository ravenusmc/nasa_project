<template>
  <div>
    <form @submit="submitSelection">
      <div class="form-area">
        <div class="year-area">
          <p>Year: {{ this.year }}</p>
        </div>

        <div class="button-div">

          <div v-on:click='arrowDown()'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-arrow-down arrow"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </div>

          <div v-on:click='arrowUp()'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-arrow-up arrow"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
          </div>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "LocationsFilter",
  data() {
    return {
      year: 1958,
    };
  },
  methods: {
    arrowDown: function () {
      console.log('down');
    },
    submitSelection(evt) {
      console.log("HI");
      evt.preventDefault();
      // if (this.yearOne < 1958){
      //   alert('The first year must be at least 1958!')
      // }else if (this.yearTwo > 2020){
      // 	alert('The second year must not be greater than 2020!')
      // }else if (this.yearOne >= this.yearTwo){
      // 	alert('The first year must be less than the second year!')
      // }
      // else if (this.yearTwo <= this.yearOne){
      // 	alert('The second year must be greater than the first year!')
      // }else {
      // const payload = {
      // 	yearOne: this.yearOne,
      // 	yearTwo: this.yearTwo,
      //   dataType: this.dataType,
      //   company: this.company,
      // }
      // this.fetchMissionSuccessFailures({ payload })
      // this.fetchMissionLocations({ payload })
      // }
    },
  },
};
</script>

<style scoped>
.year-area {
  font-size: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.form-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.button-div {
  display: flex;
  flex-direction: row;
}

.arrow {
  border: 2px solid black;
  margin: 10px;
}
</style>