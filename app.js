import express from "express";
import { engine } from "express-handlebars";
import livrosRoutes from "./routes/livros.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/livros", livrosRoutes);

app.get("/", (req, res) => {
    res.redirect("/livros");
});

export default app;
