const express = require("express");
const app = express();
const PORT = 5000;
const USERS = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  // Get data from database
  res.send(JSON.stringify(USERS));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
