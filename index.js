const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://user:1234@cluster0.fcvqd.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("몽고디비 연결..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`${port}포트에서 서버 실행 중`));
