import http from "../http-common";

class OrderDataService {
  getAll() {
    return http.get("http://localhost:8080/api/test"+"/orders");
  }
  findById(id) {
    return http.get("http://localhost:8080/api/test"+`/orders?userid=${id}`);
  }



  create(data) {
    return http.post("http://localhost:8080/api/test/orders", data);
  }

}

export default new OrderDataService();