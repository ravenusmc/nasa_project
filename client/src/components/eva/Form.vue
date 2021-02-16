<template>
	<div>

	<form @submit="submitSelection">

		<div class="form-group">
			<input type="text" list="vehicles" v-model="vehicle" placeholder="Search For Ship" />
			<datalist id="vehicles">
				<option v-for="vehicle in vehicles" v-bind:key="vehicle">
					{{ vehicle }}
				</option>
			</datalist>
		</div>

		<div class="custom-control radio-button">
			<div>
				<input type="radio" v-bind:value="true" v-model="years">
				<label for='a'>Use Years</label>
			</div>
			<div>
				<input type="radio" v-bind:value="false" v-model="years">
				<label for='b'>Ignore Years</label>
			</div>
		</div>

		<div class="form-group year-area">
			<div>
				<label>Year One:</label>
				<input class='year-input' type="number" v-model='yearOne' name="yearOne" placeholder="Enter First Year">&nbsp;
			</div>
			<div>
				<label>Year Two:</label>
				<input class='year-input' type="number" v-model="yearTwo" name="yearTwo" placeholder="Enter Second Year">
			</div>
		</div>
		
		<button type="submit" class="btn btn-outline-primary">Submit</button>
	</form>

	</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
	name: "EVAForm",
	data() {
		return {
			years: false,
			yearOne: 1963,
			yearTwo: 2013,
			search: "",
			vehicle: "",
      vehicles: [
				'Gemini IV', 'Gemini VIII', 'Gemini IX-A', 'Gemini X', 'Gemini XI', 'Gemini XII', 'Apollo 9', 'Apollo 11', 
				'Apollo 12', 'Apollo 14', 'Apollo 15', 'Apollo 16', 'Apollo 17', 'Skylab 2', 'Skylab 3', 'Skylab 4', 'STS-5', 
				'STS-6', 'STS-41B', 'STS-41C', 'STS-41G', 'STS-51A', 'STS-51D', 'STS-51I', 'STS-61B', 'STS-31', 'STS-37', 
				'STS-49', 'STS-54', 'STS-57', 'STS-51', 'STS-61 /|HST-1', 'STS-64', 'STS-63', 'STS-69', 'STS-72',
				'STS-76', 'STS-80', 'STS-82 /|HST-2', 'STS-86', 'STS-87', 'STS-88/2A', 'STS-96/2A.1', 'STS-103/|HST-3A', 
				'STS-101/2A.2a', 'STS-106/2A.2b', 'STS-92/3A', 'STS-97/4A', 'STS-98/5A', 'STS-102/5A.1', 'STS-100/6A', 
				'STS-104/7A', 'STS-105/7A.1', 'STS-108/UF1', 'Incr-4', 'STS-109/|HST-3B', 'STS-110/8A', 'STS-111/UF2', 
				'STS-112/9A', 'STS-113/11A', 'Incr-6', 'STS-114/LF1', 'Incr-12', 'STS-121 / ULF1.1', 'Incr-13', 'STS-115/12A',
				'STS-116/12A.1', 'Incr-14', 'Incr-16', 'STS-117/13A', 'Incr-15', 'STS-118/13A.1', 'STS-120/10A', 'STS-122/1E', 
				'STS-123/1JA', 'STS-124/1J', 'STS-126/ULF2', 'STS-127/2JA', 'STS-119/15A', 'STS-125/HST 4', 'STS-128/17A', 
				'STS-129/ULF3', 'STS-130/20A', 'STS-131/19A', 'STS-132/ULF4', 'Incr-24', 'STS-133/ULF5', 'STS-134/ULF6', 
				'ISS-Incr 28 during STS-135/ULF7', 'ISS-Incr 32', 'ISS Incr-35', 'ISS Incr-36', 'Voskhod 2', 'Soyuz 4&5', 
				'Soyuz 12', 'Soyuz 26|Salyut 6', 'Soyuz 29|Salyut 6', 'Soyuz 32|Salyut 6', 'Soyuz T-5|Salyut 7', 
				'Soyuz T-9|Salyut 7', 'Soyuz T-10|Salyut 7', 'Soyuz T-12|Salyut 7', 'Soyuz T-13|Salyut 7', 'Soyuz T-15|Salyut 7', 
				'Soyuz TM-2|Mir', 'Soyuz TM-4|Mir', 'Soyuz TM-7|Mir', 'Soyuz TM-8|Mir', 'Soyuz TM-17|Mir 16', 'Soyuz TM-9|Mir', 
				'Soyuz TM-10|Mir', 'Soyuz TM-11|Mir', 'Soyuz TM-12|Mir', 'Soyuz TM-13|Mir', 'Soyuz TM-14|Mir', 'Soyuz TM-15|Mir',
				'Soyuz TM-16|Mir 15', 'Soyuz TM-18|Mir 17', 'Soyuz TM-19|Mir 18', 'Soyuz TM-20|Mir 19', 'Soyuz TM-X|Mir 20',
				'Soyuz TM-23|Mir 21', 'Soyuz TM-24|Mir 22', 'Soyuz TM-25|Mir 23', 'Soyuz TM-26|Mir 24', 'Soyuz TM-27|Mir 25',
				'Soyuz TM-28|Mir 26', 'Soyuz TM-29|Mir 27', 'Soyuz TM-30|Mir 28', 'ISS Incr-2', 'ISS Incr-3', 'ISS Incr-4',
				'ISS Incr-5', 'ISS Incr-8', 'ISS Incr-9', 'ISS Incr-10', 'ISS Incr-26', 'ISS Incr-11', 'ISS Incr-12', 
				'ISS Incr-13', 'ISS Incr-14', 'ISS Incr-15', 'ISS Incr-17', 'ISS Incr-18', 'ISS Incr-19', 'ISS Incr-22', 
				'ISS Incr-24', 'ISS Incr-25', 'ISS Incr-28', 'ISS Incr-30', 'ISS Incr-32'
      ],
    };
	},
  computed: {
		filteredVehicles: function() {
			return this.vehicles.filter((vehicle) => {
				return vehicle.match(this.search);
			});
		}
	},
	methods: {
		...mapActions([ "eva/fetchVehicleInformation"]),
		submitSelection(evt) {
			evt.preventDefault();
			if (this.yearOne < 1963){
        alert('The first year must be greater than 1962!')
      }else if (this.yearTwo > 2013){
        alert('The second year must not be greater than 2013!')
      }else if (this.yearOne >= this.yearTwo){
        alert('The first year must be less than the second year!')
      }else if (this.yearTwo <= this.yearOne){
        alert('The second year must be greater than the first year!')
      }else {
				const payload = {
					vehicle: this.vehicle,
					yearOne: this.yearOne,
					yearTwo: this.yearTwo,
					useYears: this.years
				};
				console.log(payload);
				this.$store.dispatch('eva/fetchVehicleInformation', { payload })
			}

    },
	}
}
</script>

<style scoped>

form {
	border: 2px solid black;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 20px;
}

.radio-button {
	display: flex; 
	flex-direction: column;
}

.year-input {
	margin-left: 10px;
}

.year-area {
	display: flex;
	flex-direction: column;
	padding: 15px;
}

@media only all and (max-width: 900px) {

	form {
		flex-direction: column;
	}

}

</style>