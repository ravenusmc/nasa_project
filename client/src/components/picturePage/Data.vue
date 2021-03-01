<template>
  <div>
    <section v-if="!noDataMessage">
      <div class="picture-page-title">
        <h2 class="center font">Picture of the Day</h2>
        <p class="center">Date: {{ this.pictureData.date }}</p>
      </div>

      <div>
        <h4 class="center">Title: {{ this.pictureData.title }}</h4>
        <div class="picture-div">
          <img v-if="noImage" :src="pictureData.hdurl" :alt="pictureData.title" />
          <iframe v-if="!noImage" width="700" height="700" :src="pictureData.url" ></iframe>
        </div>

        <div class="explanation-div">
          <h4 class="center">Explanation:</h4>
          <p>
            {{ this.pictureData.explanation }}
          </p>
        </div>
      </div>
    </section>

		<div class='no-data-message' v-if="noDataMessage">
			<h1 class='center'>No Data</h1>
		</div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Data",
  computed: {
    ...mapGetters("picture", 
    [
      "pictureData", 
      "noDataMessage",
      "noImage",
    ]
    ),
  }, // End Computed properties
};
</script>

<style scoped>
.picture-page-title {
  margin-top: 50px;
}

.picture-div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  height: 700px;
  width: 700px;
}

.explanation-div {
  margin: 3% 10%;
  line-height: 2em;
}

.no-data-message {
  margin-top: 150px;
  margin-bottom: 500px;
}
</style>