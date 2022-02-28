<template lang="">
  <div>
    <!-- Nav bar  -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark row">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="navbarNav"
        class="collapse navbar-collapse col-md-3 mx-auto display-5"
      >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/ReactPage">React</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/AngularPage">Angular</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/VuePage">Vue</NuxtLink>
          </li>
          <li class="nav-item active">
            <NuxtLink class="nav-link" to="/BootstrapVsTailwindPage"
              >Frameworks CSS</NuxtLink
            >
          </li>
        </ul>
      </div>
    </nav>
    <!-- /Nav bar -->
  </div>
</template>
<script>
export default {
  name: 'TheHeader',
}
</script>
<style>
.display-5 {
  font-size: 30px;
}
.navbar {
  width: 100%;
}
.row {
  margin-left: 0;
}
</style>
