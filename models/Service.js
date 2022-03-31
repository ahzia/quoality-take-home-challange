import mongoose from 'mongoose';

const { Schema } = mongoose;

const fields = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
};

const schema = new Schema(fields);

export default mongoose.model('Service', schema);
