mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = mongoose.Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Task", taskSchema);
