import { connect } from 'mongoose';

const run = async (): Promise<void> => {
  try {
    await connect('mongodb://localhost:27017/todo');
    console.log('connected');
  } catch (error) {
    console.log(error);
  }
};

export default run;
