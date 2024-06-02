import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import itemsRoutes from './routes/itemsRoutes.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

const enableDomains = [process.env.FRONTEND_URL, 'http://localhost:4000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (enableDomains.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not enabled by CORS"));
    }
  },
};

app.use(express.json());

// app.use(cors(corsOptions));

app.use('/api/items', itemsRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
