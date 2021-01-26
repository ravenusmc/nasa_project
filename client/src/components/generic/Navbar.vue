<template>
  <div>
    <section>

      <div class="navbar-div">
        <a class="nav-link" href="#">
          <router-link class="fontColor font" to="/">
            Home
          </router-link>
        </a>
        <a class="nav-link" href="#">
          <router-link class="fontColor font" to="/picture">
            Picture of the Day
          </router-link>
        </a>
        <a class="nav-link" href="#">
          <router-link class="fontColor font" to="/mars">
            Mars
          </router-link>
        </a>
        <a class="nav-link" href="#">
          <router-link class="fontColor font" to="/about">
            About
          </router-link>
        </a>
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
  margin-top: 45vh;
}

.fontColor {
  color: white;
}

</style>