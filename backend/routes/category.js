const express = require("express");
const { add ,getAllcategory} = require("../controllers/category");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const categoryRouter = express.Router();


categoryRouter.get("/", authentication, getAllcategory);

categoryRouter.post("/",
    authentication,
    // authorization("ADD_CATEGORY"),
    add
  );

module.exports = categoryRouter;
