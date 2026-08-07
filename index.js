const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

main()
  .then(() => {
    console.log('script finished');
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // to Update data...
  // User.updateOne({name:"Mayuri"}, {age:19}) // .. note: no need to use set opreaterr/
  User.findOneAndUpdate({name:"Mayuri"}, {age:45}, {new:true})
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })
}

  // ....... insert query.....
//   User.find({age:{$gt:22}})
//   .then((res)=>{
//     console.log(res[0].name);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });
// }

  // remove existing documents to avoid duplicates when re-running the script
  // await User.deleteMany({});

//   await User.insertMany([
//     { name:"Mayuri", email:"mayu@gmail.com", age:21},
//     { name:"rohini", email:"rohii@gmail.com", age:22},
//     { name:"ashvini", email:"ashii@gmail.com", age:20},
//     { name:"komal", email:"komal@gmail.com", age:24}
//   ]);

//   const res = await User.find({});
//   console.log(res);
// }

//   const user1 = new User({
//     name: 'Adam',
//     email: 'adam@123.in',
//     age: 48,
//   });

//   const savedUser = await user1.save();
//   console.log('connection successful');
//   console.log('saved user:', savedUser);
// }
