const express = require("express");
const cors = require("cors");
require("dotenv").config();
const MongoDB = require("./models/MongoDB");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      /\.scuttle\.gg%/,
      "https://www.scuttle.gg",
    ],
  })
);

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to your Express server!" });
});

app.get("/guilds", async (req, res) => {
  numGuilds = await MongoDB.getNumGuilds();
  res.json({ numGuilds });
});

app.get("/commands", async (req, res) => {
  numCommandsSent = await MongoDB.getNumCommandsSent();
  res.json({ numCommandsSent });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));