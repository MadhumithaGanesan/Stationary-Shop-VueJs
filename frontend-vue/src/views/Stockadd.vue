<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="type">Type</label>
        <input
          type="text"
          class="form-control"
          id="type"
          required
          v-model="stock.type"
          name="type"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="stock.description"
          name="description"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          class="form-control"
          id="price"
          required
          v-model="stock.price"
          name="price"
        />
      </div>
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input
          class="form-control"
          id="quantity"
          required
          v-model="stock.quantity"
          name="quantity"
        />
      </div>

      <button @click="saveStock" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newStock">Add More</button>
    </div>
  </div>
</template>

<script>
import StockDataService from "../services/StockDataService";

export default {
  name: "add-stock",
  data() {
    return {
      stock: {
        id: null,
        type: "",
        description: "",
        price: null,
        quantity: null
      },
      submitted: false
    };
  },
  methods: {
    saveStock() {
      var data = {
        type: this.stock.type,
        description: this.stock.description,
        price: this.stock.price,
        quantity: this.stock.quantity
      };

      StockDataService.create(data)
        .then(response => {
          this.stock.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newStock() {
      this.submitted = false;
      this.stock = {};
    }
  }
};
</script>

<style>
.submit-form {
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