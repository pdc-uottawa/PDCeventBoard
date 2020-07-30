const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  hostedBy: String,
  hostPhotoURL: String,
  startDate: String,
  expireDate: String,
  description: String,
  skills: String,
  category: Array,
  user: Array,
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
