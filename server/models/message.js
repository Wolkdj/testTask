var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;

// schema
var messageSchema = new Schema({
  text: {type: String, required: true},
  email: {type: String, required: true},
  author: {type: String},
},{
  timestamps: true
});

messageSchema.plugin(mongoosePaginate);



var Message = mongoose.model('Message', messageSchema);

module.exports = Message;
