const express = require("express");
const app = express();
const cors = require("cors");

const accountRouter = require("./routers/accounts");
const loginRouter = require("./routers/login");
// ^^^^^ routers ^^^^^^^

const config = require("./utils/config");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
// ^^^^^ utils ^^^^^

const mongoose = require("mongoose");
mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info("Connected to mongoDB"))
  .catch((err) => logger.error(err.message));

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use("/api/accounts", accountRouter);
app.use("/api/login", loginRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
