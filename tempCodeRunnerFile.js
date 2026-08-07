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
    requires:true,
 },
 author:{
    type:String,
 },
 price:{
    type:Number,
 },