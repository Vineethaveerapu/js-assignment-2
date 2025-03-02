
import express from "express";
import dotenv from "dotenv";
import path from "path";
import aboutRouter from "./routes/about.js";
import contactRouter from "./routes/contact.js";
import servicesRouter from "./routes/services.js";

dotenv.config();
const __dirname = path.resolve();
const { PORT = 3000 } = process.env;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.render("pages/common", { title: "Home" , content: "Home"});
});

app.use("/about", aboutRouter);
app.use("/contact", contactRouter);
app.use("/services", servicesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
