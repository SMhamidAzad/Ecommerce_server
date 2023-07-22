const app = require("./app");
const { connectDb } = require("./config/db");
const { serverPort } = require("./secret");

app.listen(serverPort, async() => {
    console.log(`Listening to port ${serverPort}`);
    await connectDb()
})