<template>
  <div>
    <section class="font" v-if="!noDataMessage">
      <div class="picture-page-title">
        <h2 class="center">Picture of the Day</h2>
        <p class="center">Date: {{ this.pictureData.date }}</p>
      </div>

      <div>
        <h4 class="center">Title: {{ this.pictureData.title }}</h4>
        <div class="picture-div">
          <img :src="pictureData.hdurl" :alt="pictureData.title" />
        </div>
        <h4 class="center">Explanation:</h4>
        <div class="explanation-div">
          <p>
            {{ this.pictureData.explanation }}
          </p>
        </div>
      </div>
    </section>

    <div v-if="noDataMessage">
      <h1 class="center font">No Data</h1>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Data",
  computed: {
    ...mapGetters("picture", ["pictureData", "noDataMessage"]),
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
  margin: 0% 10%;
  line-height: 2em;
}
</style>