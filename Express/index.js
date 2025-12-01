const express = require("express");

const app = express();
// console.log(app);
let port = 3000; //8080

app.use(() => {
  console.log("request in comming..");
});

app.listen(port, () => {
  console.log(`Server is started now..${port}`);
});
