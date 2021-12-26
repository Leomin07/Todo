import {
  addTodo,
  deleteTodo,
  getAllTodo,
  getTodo,
  updateTodo,
} from '../controller/todoController';
import { Router } from 'express';

const router = Router();

router.route('/api/').get(getAllTodo).post(addTodo);

router.route('/api/:id').put(updateTodo).get(getTodo).delete(deleteTodo);

export default router;
