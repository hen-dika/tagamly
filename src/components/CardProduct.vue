<template>
  <div class="card shadow card-product">
    <img
      :src="'images/' + product.image"
      class="card-img-top"
      alt=""
      style="max-height: 200px;"
    />
    <div class="card-body text-center">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">Price : Rp. {{ product.price }}</p>
      <router-link class="btn btn-warning" :to="'/food/' + product.id"
        ><b-icon-cart></b-icon-cart> Order</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>

<style></style>
