const mongoose = require('mongoose');
// const books = mongoose.model('books',booksSchema);

main()
  .then(() => {
    console.log('script finished');
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
} 
const bookSchema = new mongoose.Schema({
 title:{
    type:String,
    required:true,
    maxLength:20,

 },
 author:{
    type:String,
 },
 price:{
    type:Number,
    min:[20,"Price is too low for amazon selling"],// custoam err 
 },
 discount:{
    type:Number,
    default:0,
 },
 category:{
    type:String,
    enum:["fiction","non-fiction"],
 },
});
const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate ("6a36960904bbc6be1e5c24f5",{price:30000})
    .then((res) => {
        console.log(res);
})
    .catch((err) => {
        console.log(err.errors.price.properties);
});

// let book1 = new Book({
//     title:"Math XII",
//     author:"RD Sharma",
//     price:"1000",
//     category:"fiction",
// });

// book1
// .save()
// .then((res)=>{
//     console.log(res);
// })