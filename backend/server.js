import express from "express";
import colors from "colors";
import connectDB from "./config/connectDB.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";

const { PORT } = process.env;
const app = express();

// CONNECT TO DATABASE
await connectDB();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ROUTES
app.use("/users", userRoutes);

// ERROR HANDLER
app.use(errorHandler);

// LISTEN
app.listen(PORT, () => {
  console.log(
    `Server is running on`.gray,
    `http://localhost:${PORT}`.underline.green
  );
});
