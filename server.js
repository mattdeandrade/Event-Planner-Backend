/ Import Enviroment
require("dotenv").config();

// Define Express App
const express = require("express");
const app = express();
const PORT = 3000;
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const cors = require("cors");

// Logging middleware
app.use(morgan("dev"));
