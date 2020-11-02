<template>
  <div id="food">
    <navbar />
    <h2>Menus</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Food",
  components: {
    Navbar,
  },
};
</script>

<style></style>
