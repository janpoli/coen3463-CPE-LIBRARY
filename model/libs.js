var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var libSchema = new Schema({
  name: {
      type: String,
      required: [true, 'Subject Name is required']
      },
  code: {
      type: String,
      required: [true, 'Subject Code is required']
      },
  year: {
      type: String,
      required: [true, 'Subject Year is required']
      },
  sem: {
      type: String,
      required: [true, 'Subject Sem is required']
      },
  createdate: Date,
  updatedate: String,
}, { collection: 'Libs' });

module.exports = mongoose.model('Lib', libSchema);