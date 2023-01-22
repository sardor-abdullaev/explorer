//DyYKwsRDUcun4uzt
const http = require("http");
const mongoose=require("mongoose")

const PORT = process.env.PORT || 8000;
const MONGO_URL='mongodb+srv://nasa-api:DyYKwsRDUcun4uzt@nasacluster.fsq4b2w.mongodb.net/nasa?retryWrites=true&w=majority';

const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");

const server = http.createServer(app);

mongoose.connection.once('open',()=>{
  console.log('MongoDB connection ready');
})

mongoose.connection.on("error",(err)=>{
  console.error(err)
})

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();

// const express = require("express");
// const app = express();
// app.listen();

// console.log(PORT);

// "watch": "npm run server & npm run client",
