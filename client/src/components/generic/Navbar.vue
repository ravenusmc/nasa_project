<template>
  <div>
    <section>
      <div class="navbar-div">
        <a class="nav-link" href="#">
          <router-link class="fontColor" to="/">
            Home
          </router-link>
        </a>
        <a class="nav-link" href="#">
          <router-link class="fontColor" to="/about">
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
  height: 100vh;
  border: 2px solid black;
}

.navbar-div {
  border: 2px solid red;
  margin-top: 45vh;
}

</style>