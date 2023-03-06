// Importations
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connected from "./database/database.js";
import userRoutes from "./routes/User.routes.js";

dotenv.config({ path: "./configs/.env" });
const app = express();
let PORT = process.env.PORT;

/**  LES MIDDLEWARES **/

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

/**  Requêtes et logiquec **/
app.use(userRoutes);

connected()
  .then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server connected to http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection ...!");
  });
