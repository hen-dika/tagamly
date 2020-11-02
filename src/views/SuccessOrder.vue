<template>
  <div id="success-order">
    <Navbar />
    <div class="container">
      <div class="row justify-content-center mt-3">
        <div class="col text-center">
          <img src="../assets/images/waiting.png" width="300" />
          <h2><strong>Order was successful</strong></h2>
          <p style="margin-top:50px">
            Please wait.. <br />Your food is cooked with <strong>love</strong>
          </p>
          <router-link class="btn btn-outline-warning" to="/">
            Other Menu
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Order",
  components: {
    Navbar,
  },
};
</script>

<style></style>
