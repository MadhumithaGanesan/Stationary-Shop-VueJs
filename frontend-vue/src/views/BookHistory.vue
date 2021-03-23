<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <div class="input-group-append">
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Booking history</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(order, index) in orders"
          :key="index"
          @click="setActiveOrder(order, index)"

        >
          <h5>Order id : </h5>{{ order.id }}
          <h5> Order quantity : </h5>{{ order.quantity }}

        </li>
      </ul>

    </div>
        <div class="col-md-6">
      <div v-if="currentOrder">
        <h4>Stock</h4>
        <div>
          <label><strong>ID : </strong></label> {{ currentOrder.id }}
        </div>
        <div>
          <label><strong>Quantity : </strong></label> {{ currentOrder.quantity }}
        </div>
        <div>
          <label><strong>Order date : </strong></label> {{ currentOrder.updatedAt }}
        </div>
        <div>
          <label><strong>Stock name : </strong></label> {{ currentStock.type}}
        </div>
        <div>
          <label><strong>Unit price: </strong></label> {{ currentStock.price}}
        </div>

        <div>
          <label><strong>Order price: </strong></label> {{ currentOrder.totalprice}}
        </div>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Item...</p>
      </div>
    </div>


  </div>
</template>

<script>
import OrderDataService from "../services/OrderDataService";
import StockDataService from "../services/StockDataService";

export default {
  name: "orders-list",
  data() {
    return {
      orders: [],
      currentOrder: null,
      currentStock: null,
      currentIndex: -1,
      id: ""
    };
  },
      computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    },

  methods: {

    refreshList() {
      this.searchId();
      this.currentOrder = null;
      this.currentStock = null;
      this.currentIndex = -1;
    },

    setActiveOrder(order, index) {
      this.currentOrder = order;
      this.currentIndex = index;
      StockDataService.get(order.stockid)
        .then(response => {
          this.currentStock = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });


    },

    searchId() {
      OrderDataService.findById(this.currentUser.id)
        .then(response => {
          this.orders = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
        this.searchId()
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
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