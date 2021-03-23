<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by type"
          v-model="type"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchType"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Stocks List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(stock, index) in stocks"
          :key="index"
          @click="setActiveStock(stock, index)"

        >
          {{ stock.type }}
                    {{ stock.price }}

        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentStock">
        <h4>Stock</h4>
        <div>
          <label><strong>Type:</strong></label> {{ currentStock.type }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentStock.description }}
        </div>
        <div>
          <label><strong>Price:</strong></label> {{ currentStock.price }}
        </div>
        <div>
          <label><strong>Quantity:</strong></label> {{ currentStock.quantity }}
        </div>
        <a class="badge badge-warning"
          :href="'/stock/' + currentStock.id"
        >
          Book
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Item...</p>
      </div>
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
    },

    setActiveStock(stock, index) {
      this.currentStock = stock;
      this.currentIndex = index;
    },

    searchType() {
      StockDataService.findByType(this.type)
        .then(response => {
          this.stocks = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveStocks();
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