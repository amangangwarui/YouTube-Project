import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

// middlewares
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser())

// test route
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

export default app;
