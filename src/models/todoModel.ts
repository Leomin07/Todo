import { Schema, model } from 'mongoose';
import { ITodo } from '../interface/ITodo';

const todoSchema = new Schema<ITodo>({
  text: {
    type: String,
  },
});

const todoModel = model<ITodo>('todo', todoSchema);

export default todoModel;
