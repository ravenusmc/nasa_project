<template>
  <div>
    <section>
      <form @submit="submitSelection">
        <div class="form-group">
          <label for="solDay">Enter Sol Day:</label>
          <input
            type="number"
            v-model="solDay"
            class="form-control sol-day-input"
            id="solDay"
            placeholder="Enter Sol Day"
          />
        </div>
        <div class="form-group">
          <label for="solDay">Select Camera: </label>
          <select v-model="camera" name="camera">
            <option
              v-for="camera in cameras"
              v-bind:key="camera"
              :value="camera"
            >
              {{ camera }}
            </option>
          </select>
        </div>
        <div>
          <button type="submit" class="btn btn-outline-primary">Submit</button>
        </div>
        <h4 v-if="marsLoadingMessage">Contacting NASA...</h4>
      </form>

      <div>
        <p>
          The NASA Mars API has multiple variants of their API on how you can
          search for data. I looked at a few of them and decided to go with one
          where the user can select the camera on a rover and a Mars day. This
          will return some images. I'm not sure how the Sol days work - I guess
          enter number is there and see what you get. Be sure to select a camera
          as well and photos should come back. If no photo's are available then
          a message of 'No Data' will be displayed.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
//import changeCameraName from '../../store/helper.js';

export default {
  name: "Form",
  data() {
    return {
      solDay: 1000,
      camera: "Front Hazard Avoidance Camera",
      cameras: [
        "Front Hazard Avoidance Camera",
        "Rear Hazard Avoidance Camera",
        "Mast Camera",
        "Chemistry and Camera Complex",
        "Mars Hand Lens Imager",
        "Mars Descent Imager",
        "Navigation Camera",
        "Panoramic Camera",
        "Miniature Thermal Emission Spectrometer (Mini-TES)",
      ],
    };
  },
  computed: {
    ...mapGetters("mars", ["marsLoadingMessage"]),
  },
  methods: {
    ...mapActions([ "mars/fetchMarsData", "mars/fetchMarsLoadingMessage"]),
    changeCameraName(fullCameraName) {
      if (fullCameraName == "Front Hazard Avoidance Camera") {
        fullCameraName = "FHAZ";
      } else if (fullCameraName == "Rear Hazard Avoidance Camera") {
        fullCameraName = "RHAZ";
      } else if (fullCameraName == "Mast Camera") {
        fullCameraName = "MAST";
      } else if (fullCameraName == "Chemistry and Camera Complex") {
        fullCameraName = "CHEMCAM";
      } else if (fullCameraName == "Mars Hand Lens Imager") {
        fullCameraName = "MAHLI";
      } else if (fullCameraName == "Mars Descent Imager") {
        fullCameraName = "MARDI";
      } else if (fullCameraName == "Navigation Camera") {
        fullCameraName = "NAVCAM";
      } else if (fullCameraName == "Panoramic Camera") {
        fullCameraName = "PANCAM";
      } else if (
        fullCameraName == "Miniature Thermal Emission Spectrometer (Mini-TES)"
      ) {
        fullCameraName = "MINITES";
      }
      return fullCameraName;
    },
    submitSelection(evt) {
      evt.preventDefault();
      this.camera = this.changeCameraName(this.camera);
      const payload = {
        solDay: this.solDay,
        camera: this.camera,
      };
      const message = {
        loading: true,
      };
      this.$store.dispatch('mars/fetchMarsLoadingMessage', {message});
      this.$store.dispatch('mars/fetchMarsData', {payload})
    },
  },
};
</script>

<style scoped>
section {
  margin-top: 50px;
  margin-left: 8%;
  margin-right: 8%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 3em;
}

.sol-day-input {
  width: 100px;
}

/* form {
  width: 40%;
} */
</style>