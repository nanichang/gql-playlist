/**
 * @author Nanichang Katzing
 * @email nanipaul68@gmail.com
 * @create date: 21 August, 2018
 * @modify date: 21 August, 2018
 * @modify by 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('Author', authorSchema);