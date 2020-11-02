<template>
  <div id="food-detail">
    <Navbar />
    <div class="container">
      <h1>Detail</h1>

      <div class="row mt-4">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/food" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-6">
          <img :src="'../images/' + product.image" class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ product.name }}</strong>
          </h2>
          <hr />
          <h4>
            Price :
            <strong>Rp. {{ product.price }}</strong>
          </h4>
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="amount">Amount:</label>
              <input
                type="number"
                class="form-control"
                v-model="order.amount"
              />
            </div>
            <div class="form-group">
              <label for="additional">Additional Information:</label>
              <textarea
                v-model="order.additional"
                class="form-control"
                placeholder="Additional such as: No spicy, No Msg .."
              ></textarea>
            </div>

            <button type="submit" class="btn btn-warning" @click="ordering">
              Add to cart <b-icon-cart></b-icon-cart>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "FoodDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: {},
      order: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    ordering() {
      if (this.order.amount) {
        this.order.products = this.product;
        axios
          .post("http://localhost:3000/cart", this.order)
          .then(() => {
            this.$router.push({ path: "/cart" });
            this.$toast.success("Food is successfully added", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Order amount must be filled!", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
