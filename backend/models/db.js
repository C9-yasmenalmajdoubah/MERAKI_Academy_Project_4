const mongoose = require ("mongoose")
mongoose
  .connect("mongodb://127.0.0.1:27017/project4")
  .then(() => {
    console.log("DB Ready To Use");
  })
  .catch((err) => {
    console.log(err);
  });
  