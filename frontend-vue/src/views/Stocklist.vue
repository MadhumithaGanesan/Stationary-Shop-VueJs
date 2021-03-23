<template>
    <div v-if="!submitted">
      <div v-if="currentStock">
        <h4>Stock-Details</h4>
        <div>
          <label><strong>Type:</strong></label> {{ currentStock.type }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentStock.description }}
        </div>
        <div>
          <label><strong>Unit Price:</strong></label> {{ currentStock.price }}
        </div>
        <div>
          <label><strong>Quantity Available:</strong></label> {{ currentStock.quantity }}
        </div>
    <form   id="app">
      <div class="form-group">
        <label for="type">Stock ID</label>
        <input type="number" class="form-control" id="sid" v-model="currentStock.id"
        />
      </div>
        <p v-if=errors>
    <b>Please correct the following error(s):</b>
    <ul>
      <li>{{ errors }}</li>
    </ul>
  </p>

      <div class="form-group">
        <label for="oquantity">Quantity ordered</label>
        <input type="number" class="form-control" id="oquantity"
         v-model="order.oquantity"/>
      </div>
      <div v-if="currentUser" class="form-group">
              <label for="oquantity">User ID </label>
        <input type="text" class="form-control" id="uid"
          v-model="currentUser.id"
        />
      </div>

    </form>

    <button type="submit" class="badge badge-success"
      @click="saveOrder"
    >
      Book
    </button>

      </div>
      <div v-else>
        <br />
        <p>Please click on a Item...</p>
      </div>
      </div>
          <div v-else>
      <h4>Your order is successfull!</h4>
    </div>

</template>

<script>
import StockDataService from "../services/StockDataService";
import OrderDataService from "../services/OrderDataService";

export default {
  name: "stock",
  data() {
    return {
      currentStock: null,
      order: {
        id: null,
        sid: "",
        oquantity :" ",
        uid:" ",
      },
      submitted: false,
      errors :null,
      message: ''
    };
  },
    computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    },
  methods: {
    getStock(id) {
      StockDataService.get(id)
        .then(response => {
          this.currentStock = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },


    saveOrder() {
      var data = {
        userid: this.currentUser.id,
        stockid: this.currentStock.id,
        quantity: this.order.oquantity,
        totalprice: this.order.oquantity*this.currentStock.price

      };
      if (this.order.oquantity>this.currentStock.quantity) {
        this.errors="Stock should be less";
                return false;

      }

      OrderDataService.create(data)
        .then(response => {
                      this.submitted = true;

          this.order.id = response.data.id;
          console.log(response.data);
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