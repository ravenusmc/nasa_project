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
import { mapActions } from 'vuex';
import test from '../../store/helper.js';

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
		...mapActions([
      'fetchMarsData',
    ]),
    submitSelection(evt) {
			console.log(test);
			evt.preventDefault();
			if (this.camera == 'Front Hazard Avoidance Camera') {
				this.camera = 'FHAZ'
			}else if (this.camera == 'Front Hazard Avoidance Camera') {
				this.camera = 'RHAZ'
			}else if (this.camera == 'Mast Camera') {
				this.camera = 'MAST'
			}else if (this.camera == 'Chemistry and Camera Complex') {
				this.camera = 'CHEMCAM'
			}else if (this.camera == 'Mars Hand Lens Imager') {
				this.camera = 'MAHLI'
			}else if (this.camera == 'Mars Descent Imager') {
				this.camera = 'MARDI'
			}else if (this.camera == 'Navigation Camera') {
				this.camera = 'NAVCAM'
			}else if (this.camera == 'Panoramic Camera') {
				this.camera = 'PANCAM'
			}else if (this.camera == 'Miniature Thermal Emission Spectrometer (Mini-TES)') {
				this.camera = 'MINITES'
			}
      const payload = {
				solDay: this.solDay,
				camera: this.camera,
			};
			this.fetchMarsData({ payload });
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