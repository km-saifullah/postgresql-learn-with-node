import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import employeeRouter from "./routes/employee.routes.js";

dotenv.config();

const app = express();
const PORT = 8000;

const corsOptions = {
  origin: "*",
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
