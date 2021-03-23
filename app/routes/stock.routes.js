const { authJwt } = require("../middleware");
const control = require("../controllers/stock.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/test/stocks", control.create);
  app.get("/api/test/stocks", control.findAll);
  app.get("/api/test/stocks/:id", control.findOne);
  app.delete("/api/test/stocks/:id", control.delete);
  app.put("/api/test/stocks/:id", control.update);


};