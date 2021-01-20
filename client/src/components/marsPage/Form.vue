<template>
	<div>
	
	<section>

		<form @submit="submitSelection">
			<div class="form-group">
				<label for="solDay">Enter Sol Day:</label>
				<input type="number" v-model="solDay" class="form-control" id="solDay" placeholder="Enter Sol Day">
			</div>
			<div class="form-group">
				<label for="solDay">Select Camera:</label>
        <select v-model="camera" name="camera">
           <option v-for="camera in cameras" v-bind:key="camera" :value="camera">
             {{ camera }}
           </option>
        </select>
			</div>
			<div class='button-div'>
				<button type="submit" class="btn btn-primary">Submit</button>
			</div>
		</form>

		<div>
			<p>
				The NASA Mars API has multiple variants of their API on how you can search for data. I looked 
				at a few of them and decided to go with one where the user can select the camera on a rover 
				and a Mars day. This will return some images. 
			</p>
		</div>

	</section>

	</div>
</template>

<script>

export default {
	name: "Form",
	data() {
    return {
			solDay: 0,
      camera: 'Front Hazard Avoidance Camera',
      cameras: ['Front Hazard Avoidance Camera', 'Rear Hazard Avoidance Camera', 'Mast Camera',
			'Chemistry and Camera Complex', 'Mars Hand Lens Imager', 'Mars Descent Imager', 'Navigation Camera',
			'Panoramic Camera', 'Miniature Thermal Emission Spectrometer (Mini-TES)'],
    };
  },
	methods: {
    submitSelection(evt) {
			evt.preventDefault();
      const payload = {
				solDay: this.solDay,
				camera: this.camera,
			};
			console.log(payload);
      // this.fireActions({ payload });
    },
  }
}
</script>

<style scoped>
section {
	margin-top: 50px;
	margin-left: 8%;
	margin-right: 8%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	border: 2px solid blue;
}

form {
	width: 40%;
}

.button-div {
	display: flex; 
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>