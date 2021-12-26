import { NextFunction, Request, RequestHandler, Response } from 'express';
import todoModel from '../models/todoModel';

export const getAllTodo: RequestHandler = async (req, res) => {
  try {
    const data = await todoModel.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send({ message: error });
  }
};

export const getTodo: RequestHandler = async (req, res) => {
  try {
    const data = await todoModel.find({ _id: req.params.id });
    res.status(200).send({ message: 'Success', data: data });
  } catch (error) {
    res.status(404).send({ message: error });
  }
};

export const addTodo = (req: Request, res: Response) => {
  const newTodo = new todoModel(req.body);
  newTodo
    .save()
    .then(() => {
      res.status(201).send({
        message: 'Success',
        data: newTodo,
      });
    })
    .catch(err => {
      res.status(400).send({ err });
    });
};

export const updateTodo: RequestHandler = async (req, res) => {
  try {
    const editTodo = await todoModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.send({ message: 'Update todo successfully', data: editTodo });
  } catch (error) {
    res.status(404).send(error);
  }
};

export const deleteTodo: RequestHandler = async (req, res) => {
  try {
    await todoModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send({
      message: 'Delete todo model successfully',
    });
  } catch (error) {
    res.status(404).send(error);
  }
};
