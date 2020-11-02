<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">TagamLy</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item link-custom">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item link-custom">
            <router-link class="nav-link " to="/food">Food</router-link>
          </li>
          <li class="nav-item link-custom">
            <router-link class="nav-link" to="/cart">
              <b-icon icon="cart3" aria-hidden="true"></b-icon>
              <span class="badge badge-warning">{{
                cart ? cart.length : orderAmount.length
              }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

export default {
  name: "Navbar",
  data() {
    return {
      orderAmount: [],
    };
  },
  props: ["cart"],
  methods: {
    amount(data) {
      this.orderAmount = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/cart")
      .then((response) => this.amount(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
