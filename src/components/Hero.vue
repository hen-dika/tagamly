<template>
  <div class="hero">
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>
                  Heii.. <br />
                  your favorit menu,
                </strong>
                <br />in here!
              </h2>
              <p>Choose and order menu now</p>
              <router-link class="btn btn-lg btn-warning" to="/foods">
                Order <b-icon-arrow-right></b-icon-arrow-right>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/images/hero.png" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2>
                <strong>Your favorit menu,</strong>
                <br />in here!
              </h2>
              <p>Choose and order your menu now</p>
              <button class="btn btn-lg btn-warning">
                Order <b-icon-arrow-right></b-icon-arrow-right>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style></style>
