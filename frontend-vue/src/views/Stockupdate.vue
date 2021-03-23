<template>
  <div v-if="currentStock" class="edit-form">
    <h4>Stock</h4>
    <form>
      <div class="form-group">
        <label for="type">Type</label>
        <input type="text" class="form-control" id="type"
          v-model="currentStock.type"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentStock.description"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price"
          v-model="currentStock.price"
        />
      </div>
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input type="text" class="form-control" id="quantity"
          v-model="currentStock.quantity"
        />
      </div>

    </form>


    <button class="badge badge-danger mr-2"
      @click="deleteStock"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateStock"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import StockDataService from "../services/StockDataService";

export default {
  name: "stock",
  data() {
    return {
      currentStock: null,
      message: ''
    };
  },
  methods: {
    getStock(id) {
      StockDataService.get(id)
        .then(response => {
          this.currentStock= response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateStock() {
      StockDataService.update(this.currentStock.id, this.currentStock)
        .then(response => {
          console.log(response.data);
          this.message = 'The Stock was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteStock() {
      StockDataService.delete(this.currentStock.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "stocks" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getStock(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
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
