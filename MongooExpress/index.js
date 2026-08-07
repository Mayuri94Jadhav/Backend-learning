const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./Modles/chat.js");

app.set("views", path.join(__dirname, "Views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  const existingChat = await Chat.findOne({ from: "Mayuri", msg: "send me your exam result" });

  if (!existingChat) {
    let chat1 = new Chat({
      from: "Mayuri",
      to: "Rohini",
      msg: "send me your exam result",
      created_at: new Date(),
    });

    await chat1.save().then((res) => {
      console.log(res);
    });
  }

  // ......... Index Route..........
  app.get("/chats", async (req, res) => {
    let chats = await Chat.find().sort({ created_at: -1 });
    res.render("index", { chats });
  });

  // ........... New route........
  app.get("/cg", (req, res) => {
    res.send("cg route is working");
  });

  app.get("/", (req, res) => {
    res.redirect("/chats");
  });

  app.listen(8080, () => {
    console.log("server is running");
  });
}
