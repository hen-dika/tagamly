import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Food from "../views/Food.vue";
import Cart from "../views/Cart.vue";
import Order from "../views/SuccessOrder.vue";
import FoodDetail from "../views/FoodDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/food",
    name: "Food",
    component: Food,
  },
  {
    path: "/food/:id",
    name: "FoodDetail",
    component: FoodDetail,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/order-success",
    name: "Order",
    component: Order,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
