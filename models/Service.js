import mongoose from 'mongoose';

const { Schema } = mongoose;

const fields = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  details: {
    type: String,
  },
  prices: {
    type: Number,
  },
};

const schema = new Schema(fields);

export default mongoose.model('Hotel', schema);
