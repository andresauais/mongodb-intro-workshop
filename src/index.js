const app = require("./server");
const config = require("./config/config");
const connect = require("./db/connect");

app.listen(config.app.PORT, () => {
  config.logger.info(`DB connected`);
  
  config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
});
