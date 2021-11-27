const mongoose = require("mongoose");

//structuring docs we need for all documents
const TaskShema = new mongoose.Schema({
  //setting keys and shema type
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name cannnot be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskShema);
