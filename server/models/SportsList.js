import mongoose from "mongoose";

const SportsListSchema = new mongoose.Schema({
  sort: {
    type: String,
    required: "Sort is missed"
  },
  name: {
    type: String,
    required: "Name is missed"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const model = mongoose.model("sportslist", SportsListSchema);

export default model;
