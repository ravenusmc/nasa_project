<template>
	<div>
		<form @submit="submitSelection">

			<div>
        <p>Year: {{ this.year }}</p>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
        </svg>
        
			</div>


			<div class='button-div'>
				<button type="submit" class="btn btn-outline-primary">
					Submit
				</button>
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
		}
  },
  methods: {
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
</style>