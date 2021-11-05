mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Task", taskSchema);
