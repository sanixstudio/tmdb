const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/", function (req, res) {
  const name = "Adi";
  res.json(name);
});

app.listen(PORT, () => {
  console.log("listening at http://localhost:" + PORT);
});
