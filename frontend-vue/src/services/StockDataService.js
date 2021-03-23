import http from "../http-common";

class StockDataService {
  getAll() {
    return http.get("http://localhost:8080/api/test"+"/stocks");
  }
  get(id) {
    return http.get("http://localhost:8080/api/test"+`/stocks/${id}`);
  }
  create(data) {
    return http.post("http://localhost:8080/api/test"+"/stocks", data);
  }

  findByType(type) {
    return http.get("http://localhost:8080/api/test"+`/stocks?type=${type}`);
  }
  update(id, data) {
    return http.put("http://localhost:8080/api/test"+`/stocks/${id}`, data);
  }

  delete(id) {
    return http.delete("http://localhost:8080/api/test"+`/stocks/${id}`);
  }

}

export default new StockDataService();