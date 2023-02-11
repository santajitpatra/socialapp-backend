// import
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages";
// app config
const app = express();
const port = process.env.port || 9000;

// middleware

// MongoDB config
const connection_url =
  "mongodb+srv://admin:dhQKBglQx8qOFSPl@cluster0.dkkbptp.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// ???

// api routes
app.get("/", (req, res) => res.status(200).send("Hello, world!"));

app.post("/api/v1/message/new", (req, res) => {
  const dbMessage = req.body;
  Messages.creae(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
// listen
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
