
import express from "express";
import dotenv from "dotenv";
import path from "path";


dotenv.config();
const __dirname = path.resolve();
const { PORT = 3000 } = process.env;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.render("pages/home", { title: "Home" });
});


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
