import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  t_name: {
    required: true,
    type: String,
  },

  t_desc: {
    required: true,
    type: String,
  },
});

export const Task = mongoose.models.Task ?? mongoose.model("Task", taskSchema);
