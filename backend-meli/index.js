import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tokenRoutes from './routes/tokenRoutes.js';
import itemsRoutes from './routes/itemsRoutes.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

const enableDomains = [process.env.FRONTEND_URL];

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

if (process.env.DEV_MODE === 'true') {
  app.use(cors(corsOptions));
}


app.use('/api/token', tokenRoutes);

app.use('/api/items', itemsRoutes);


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
