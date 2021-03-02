<template>
  <div>
    <section>

      <div class="navbar-div">
        <a class="myButton">
          <router-link class="fontColor font" to="/">
            Home
          </router-link>
        </a>
        <router-link class="fontColor font" to="/people">
          <a class="myButton">
            People in Space
          </a>
        </router-link>
        <router-link class="fontColor font" to="/picture">
          <a class="myButton">
            Picture of the Day
          </a>
        </router-link>
        <router-link class="fontColor font" to="/mars">
          <a class="myButton">
            Mars
          </a>
        </router-link>
        <router-link class="fontColor font" to="/eva">
          <a class="myButton">
            EVA
          </a>
        </router-link>
        <router-link class="fontColor font" to="/missions">
          <a class="myButton">
            Missions
          </a>
        </router-link>
        <router-link class="fontColor font" to="/about">
          <a class="myButton">
            About
          </a>
        </router-link>
      </div>

    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

section {
  height: 115%;
  border: 2px solid #041e42;
  background: #041e42;
}

.navbar-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12vh;
  position: fixed;
}

.fontColor {
  color: white;
}

.myButton {
	box-shadow: 3px 4px 0px 0px #1564ad;
	background: linear-gradient(to bottom, rgba(2,0,36,1) 0%, rgba(66,4,17,1) 35%, rgba(0,212,255,1) 100%);
	background-color:#420411;
	border-radius: 5px;
	border: 1px solid #420411;
	display: inline-block;
	cursor: pointer;
	color:#ffffff;
	font-size: 15px;
	font-weight: bold;
	padding: 12px 44px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #528ecc;
  margin: 5px;
}

.myButton:hover {
	background:linear-gradient(to bottom, #378de5 5%, #420411 100%);
	background-color:#420411;
}

.myButton:active {
	position:relative;
	top:1px;
}


</style>