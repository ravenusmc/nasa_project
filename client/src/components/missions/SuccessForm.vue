<template>
  <div>
    <section>

      <form @submit="submitSelection">
        <div class="custom-control radio-button">
          <div class='individual-radio-button'>
            <input type="radio" value="All" v-model="dataType" />
            <label class='radio-button-label' for="a">All Data</label>
          </div>
          <div class='individual-radio-button'>
            <input type="radio" value="Success" v-model="dataType" />
            <label class='radio-button-label' for="b">Success</label>
          </div>
          <div class='individual-radio-button'>
            <input type="radio" value="Failure" v-model="dataType" />
            <label class='radio-button-label' for="c">Failures</label>
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

        <div class='company-button-area'>
          <div class="form-group company-area">
            <input type="text" list="companies" v-model="company" placeholder="Company (Optional)" />
              <datalist id="companies">
                <option v-for="company in companies" v-bind:key="company">
                  {{ company }}
                </option>
              </datalist>
          </div>

          <div class='button-div'>
            <button type="submit" class="btn btn-outline-primary">
              Submit
            </button>
          </div>
      </div>

      </form>

      <div class='paragraph-div'>
        <p>
          This 'control panel' allows the user to focus on missions that were
          a success, a failure in between a selected time frame. I realized that
          the graph below was to cluttered when all of the data was present so I
          decided to give the user an opportunity to change their selection. Finally,
          one also has the option to select a company, such as SpaceX,
          to see how they are doing over time.  
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
      company: "",
      companies: ['SpaceX', 'CASC', 'Roscosmos', 'ULA', 'JAXA', 'Northrop', 'ExPace', 'IAI', 'Rocket Lab', 'Virgin Orbit', 'VKS RF', 
      'MHI', 'IRGC', 'Arianespace', 'ISA', 'Blue Origin', 'ISRO', 'Exos', 'ILS', 'i-Space', 'OneSpace', 'Landspace', 
      'Eurockot', 'Land Launch', 'CASIC', 'KCST', 'Sandia', 'Kosmotras', 'Khrunichev', 'Sea Launch', 'KARI', 'ESA', 
      'NASA', 'Boeing', 'ISAS', 'SRC', 'MITT', 'Lockheed', 'AEB', 'Starsem', 'RVSN USSR', 'EER', 'General Dynamics', 
      'Martin Marietta', 'Yuzhmash', 'Douglas', 'ASI', 'US Air Force', 'CNES', 'CECLES', 'RAE', 'UT', 'OKB-586', 'AMBA', 
      "Arm??e de l'Air", 'US Navy']
    };
  },
  methods: {
    ...mapActions("mission", [
      'fetchMissionSuccessFailures',
      'fetchMissionLocations',
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
          dataType: this.dataType,
          company: this.company,
        }
        this.fetchMissionSuccessFailures({ payload })
        this.fetchMissionLocations({ payload })
      }
    },
  },
};
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
	margin: 5%;
}

form {
  display: flex;
  flex-direction: row;
	justify-content: center;
}

.individual-radio-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
}

.radio-button {
  margin: 10px;
}

.radio-button-label {
  margin-left: 5px;
}

.year-area {
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 3%;
}

.company-button-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.company-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
}

.button-div {
	display: flex;
	align-items: center;
}

.paragraph-div {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>