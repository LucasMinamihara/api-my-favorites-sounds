import express from "express";
const app = express();
const PORT = 5000;
import router from "./routes/user.route.js";

app.use(router);

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
