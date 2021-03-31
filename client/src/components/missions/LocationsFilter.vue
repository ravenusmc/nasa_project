<template>
	<div>
		<form @submit="submitSelection">

			<div>
				Starting Year: {{ this.startingYear }}
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
			startingYear: 1958,
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