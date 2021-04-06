<template>
  <div>
    <form>
      <div class="form-area">
        <div class="year-area">
          <p>Year: {{ this.year }}</p>
        </div>

        <div class="button-div">
          <div v-on:click="arrowDown()">
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

          <div v-on:click="arrowUp()">
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
import { mapActions } from 'vuex';

export default {
  name: "LocationsFilter",
  data() {
    return {
      year: 1958,
    };
  },
  methods: {
    ...mapActions("mission", [
      'fetchMissionLocations',
    ]),
    arrowDown: function () {
      if (this.year <= 1958) {
        alert('Cannot go lower than 1958')
      }else {
        this.year -= 1
      }
    },
    arrowUp: function () {
      if (this.year >= 2020) {
        alert('Cannot go higher than 1958')
      }else {
        this.year += 1
        const data = {
          year: this.year,
        }
        this.fetchMissionLocations({ data })
      }
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