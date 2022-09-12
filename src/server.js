const app = require("./app.js")
const color = require("chalk")
const port = 4000

app.listen(port, () =>
  console.log(`The server is listening on port ${color.green(port)}`)
)