const mongoose = require("mongoose");
const Chat = require("./chat.js");

main()
.then(()=>{
    console.log("connection sucessful");
})
.catch((err)=> console.log(err)); 

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  
  let allChats= [{
    from:"Mayuri",
    to:"Rohini",
    msg: "send me your exam result",
    created_at: new Date(),
},
{
    from:"gayatri",
    to:"ashwini",
    msg: "send me your exam result",
    created_at: new Date(),
},
{
    from:"rutuja",
    to:"tejii",
    msg: "send me your exam result",
    created_at: new Date(),
},
{
    from:"Mohit",
    to:"Rohit",
    msg: "send me your exam result",
    created_at: new Date(),
}];

  await Chat.insertMany(allChats);
}