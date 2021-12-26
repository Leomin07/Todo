import { connect } from 'mongoose';

const run = async (): Promise<void> => {
  try {
    await connect(
      'mongodb+srv://root:123@cluster0.cq7uq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );
    console.log('connected');
  } catch (error) {
    console.log(error);
  }
};

export default run;
