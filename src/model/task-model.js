import mongoose, { Schema } from "mongoose";
  
const taskSchema = new Schema({
 
  user: {
    required: true,
    type: String,
  }, 

  t_name: {
    required: true,
    type: String,
  },
  t_desc: {
    required: true,
    type: String,
  },
  t_employee: {
    required: true,
    type: String,
  },   
  completed: {
    required: true,
    type: Boolean,
    default: false,
  },
  createdAt: {
    required: true,
    type: Date,
    default: Date.now(),
  },
});
 
export const Task = mongoose.models.Task ?? mongoose.model("Task", taskSchema);
