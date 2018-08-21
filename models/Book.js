/**
 * @author Nanichang Katzing
 * @email nanipaul68@gmail.com
 * @create date: 21 August, 2018
 * @modify date: 21 August, 2018
 * @modify by 
 */

 const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

module.exports = mongoose.model('Book', bookSchema);