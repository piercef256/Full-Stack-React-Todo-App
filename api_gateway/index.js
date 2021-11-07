const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

dotenv.config();
app.use(cors());

// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to db")
);

// import routes
const tasksRoutes = require("./routes/tasks");
const authRoutes = require("./routes/auth");
const verifyToken = require("./routes/validate-token");

// middleware
app.use(express.json()); // for body parser

// route middleware
app.use("/api/user", authRoutes);
app.use("/api/tasks", verifyToken, tasksRoutes);
app.use("/api/verify", verifyToken);

const PORT = 3001;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
