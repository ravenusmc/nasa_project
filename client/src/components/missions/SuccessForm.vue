<template>
  <div>
    <section>

      <form @submit="submitSelection">
        <div class="custom-control radio-button">
          <div>
            <input type="radio" value="All" v-model="dataType" />
            <label for="a">All Data</label>
          </div>
          <div>
            <input type="radio" value="Success" v-model="dataType" />
            <label for="b">Success</label>
          </div>
          <div>
            <input type="radio" value="Failure" v-model="dataType" />
            <label for="c">Failures</label>
          </div>
        </div>

        <div class="form-group year-area">
          <div>
            <label>Year One:</label>
            <input
              class="year-input"
              type="number"
              v-model="yearOne"
              name="yearOne"
              placeholder="Enter First Year"
            />&nbsp;
          </div>
          <div>
            <label>Year Two:</label>
            <input
              class="year-input"
              type="number"
              v-model="yearTwo"
              name="yearTwo"
              placeholder="Enter Second Year"
            />
          </div>
        </div>

				<div class='button-div'>
					<button type="submit" class="btn btn-outline-primary">
						Submit
					</button>
				</div>

      </form>

      <div>
        <p>
          This 'control panel' allows the user to focus on on missions that were
          success's, failures as well as to select a time frame. I realized that
          the graph below was to cluttered when all of the data was present so I
          decided to give the user an opportunity to change their selection.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "SuccessForm",
  data() {
    return {
      dataType: "All",
      yearOne: 1958,
      yearTwo: 2020,
    };
  },
  methods: {
    ...mapActions("mission", [
      'fetchMissionSuccessFailures',
    ]),
    submitSelection(evt) {
      evt.preventDefault();
      if (this.yearOne < 1958){
        alert('The first year must be at least 1958!')
			}else if (this.yearTwo > 2020){
				alert('The second year must not be greater than 2020!')
			}else if (this.yearOne >= this.yearTwo){
				alert('The first year must be less than the second year!')
			}else if (this.yearTwo <= this.yearOne){
				alert('The second year must be greater than the first year!')
			}else {
				const payload = {
					yearOne: this.yearOne,
					yearTwo: this.yearTwo,
					dataType: this.dataType
        }
        this.fetchMissionSuccessFailures({ payload })
      }
    },
  },
};
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: 1fr 1fr;
	margin: 5%;
}

form {
  display: flex;
  flex-direction: row;
	justify-content: center;
}

.radio-button {
  margin: 10px;
}

.year-area {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 3%;
}

.button-div {
	display: flex;
	align-items: center;
}
</style>