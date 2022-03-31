import mongoose from 'mongoose';

const { Schema } = mongoose;

const fields = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  hotel: {
    type: Schema.Types.ObjectId,
    ref: "Hotel",
  },
  chain: {
    type: Schema.Types.ObjectId,
    ref: "Chain",
  },
  items: [{
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Float32Array,
    },
    details: {
      type: String,
    }
  }]
};

const schema = new Schema(fields);

export default mongoose.model('Service', schema);
