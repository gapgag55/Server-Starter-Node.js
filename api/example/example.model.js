import mongoose, { Schema } from 'mongoose';

const ExampleSchema = new Schema({
  title: String,
});

export default mongoose.model('Example', ExampleSchema);