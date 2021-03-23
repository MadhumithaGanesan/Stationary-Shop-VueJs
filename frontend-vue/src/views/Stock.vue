<template>
    <div class="container">
    <div class="col-md-6">
      <table class="table table-striped">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Item</th>
      <th scope="col">Unit Price</th>
    </tr>
  </thead>
  <tbody>

    <tr           :class="{ active: index == currentIndex }"
          v-for="(stock, index) in stocks"
          :key="index"
>
      <td>{{ stock.id }}</td>
      <td>{{ stock.type }}</td>
      <td>{{ stock.price }}</td>
    </tr>
  </tbody>
  </table>

    </div>
    </div>
</template>

<script>
import StockDataService from "../services/StockDataService";

export default {
  name: "stocks-list",
  data() {
    return {
      stocks: [],
      currentStock: null,
      currentIndex: -1,
      type: ""
    };
  },
  methods: {
    retrieveStocks() {
      StockDataService.getAll()
        .then(response => {
          this.stocks = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveStocks();
      this.currentStock = null;
      this.currentIndex = -1;
    }


    
  },
  mounted() {
    this.retrieveStocks();
  }
};
</script>

<style>
.table{
    position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width:70%;
}
.tbody{
  color:black;
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