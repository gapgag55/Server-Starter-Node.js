import mongoose from 'mongoose';
import config from '../config';

export default () => {
  mongoose.connect(config.mongoURL)
  .then(
    () => {
      console.log('Connect to Mongoose successfully.');
    },
    err => {
      console.log('Error connect to mongoose:', err)
    }
  );
}
