const jsonServer = require("json-server");

// const cors = require("cors");
const port = process.env.PORT || 3001;

const app = jsonServer.create();
const router = jsonServer.router("dbTeste.json");

app.db = router.db;

// app.use(cors());
// "cors": "^2.8.5"
app.use(router);
app.listen(port);

console.log("Server is running on port:", port);
