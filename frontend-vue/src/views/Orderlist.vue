<template>

    <div class="container">
    <div class="col-md-6">
    <br><br><br><br><br>
<table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Order ID</th>
      <th scope="col">Stock ID</th>
      <th scope="col">Order quantity</th>
      <th scope="col">Order price</th>
    </tr>
  </thead>
  <tbody>

    <tr           :class="{ active: index == currentIndex }"
          v-for="(order, index) in orders"
          :key="index"
>
      <td>{{ order.id }}</td>
      <td>{{ order.stockid }}</td>
      <td>{{ order.quantity }}</td>
      <td>{{ order.totalprice }}</td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
</template>

<script>
import OrderDataService from "../services/OrderDataService";

export default {
  name: "orders-list",
  data() {
    return {
      orders: [],
      currentOrder: null,
      currentIndex: -1,
      userid: ""
    };
  },
  methods: {
    retrieveOrders() {
      OrderDataService.getAll()
        .then(response => {
          this.orders = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveOrders();
      this.currentOrder = null;
      this.currentIndex = -1;
    }


    
  },
  mounted() {
    this.retrieveOrders();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.table{
    position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  width:70%;
}
body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body {
background-image: url('../assets/back.jpg');
background-size:100% 120%;
background-position:fixed;
}

</style>