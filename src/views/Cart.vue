<template>
  <div id="cart">
    <Navbar />
    <div class="container">
      <h2>
        My
        <strong>Cart</strong>
      </h2>

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

      <div class="row">
        <div class="col">
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Menu</th>
                  <th scope="col">Additional</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Price</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(cart, index) in carts" :key="cart.id">
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../images/' + cart.products.image"
                      class="img-fluid shadow"
                      width="250"
                    />
                  </td>
                  <td>
                    <strong>{{ cart.products.name }}</strong>
                  </td>
                  <td>
                    {{ cart.additional ? cart.additional : "-" }}
                  </td>
                  <td>{{ cart.amount }}</td>
                  <td align="right">Rp. {{ cart.products.price }}</td>
                  <td align="right">
                    <strong>Rp. {{ cart.products.price * cart.amount }}</strong>
                  </td>
                  <td align="center" class="text-danger">
                    <b-icon
                      icon="x-circle"
                      scale="2"
                      variant="danger"
                      aria-hidden="true"
                      @click="deleteCart(cart.id)"
                    ></b-icon>
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right">
                    <strong>Total price :</strong>
                  </td>
                  <td align="right">
                    <strong>Rp. {{ totalPrice }}</strong>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Form Checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" class="form-control" v-model="order.name" />
            </div>

            <div class="form-group">
              <label for="table">Table:</label>
              <input type="number" class="form-control" v-model="order.table" />
            </div>

            <button
              type="submit"
              class="btn btn-success float-right"
              @click="checkout"
            >
              <b-icon-cart></b-icon-cart> Order
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
  name: "Cart",
  components: {
    Navbar,
  },
  data() {
    return {
      carts: [],
      order: {},
    };
  },
  methods: {
    setCarts(data) {
      this.carts = data;
    },
    deleteCart(id) {
      axios
        .delete("http://localhost:3000/cart/" + id)
        .then(() => {
          this.$toast.error("A food has been deleted from cart", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          // Update Cart Data
          axios
            .get("http://localhost:3000/cart")
            .then((response) => this.setCarts(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
    },
    checkout() {
      if (this.order.name && this.order.table) {
        this.order.carts = this.carts;
        axios
          .post("http://localhost:3000/order", this.order)
          .then(() => {
            // Clear data from cart
            this.carts.map(function(item) {
              return axios
                .delete("http://localhost:3000/cart/" + item.id)
                .catch((error) => console.log(error));
            });

            this.$router.push({ path: "/order-success" });
            this.$toast.success(
              "Yor menu has been ordered. Wait for a minute",
              {
                type: "success",
                position: "top-right",
                duration: 3000,
                dismissible: true,
              }
            );
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Please filled your name and table number..", {
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
      .get("http://localhost:3000/cart")
      .then((response) => this.setCarts(response.data))
      .catch((error) => console.log(error));
  },
  computed: {
    totalPrice() {
      return this.carts.reduce(function(items, data) {
        return items + data.products.price * data.amount;
      }, 0);
    },
  },
};
</script>

<style></style>
