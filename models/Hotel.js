import mongoose from 'mongoose';
import Guest from './Guest.js';

const { Schema } = mongoose;

const fields = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  isChain: {
    type: Boolean,
    required: true,
  },
  chain: {
    type: Schema.Types.ObjectId,
    ref: 'Chain',
  },
  guests: [{
    type: Schema.Types.ObjectId,
    ref: 'Guest',
  }],
  services: [{
    type: Schema.Types.ObjectId,
    ref: 'Service',
  }],
};

const schema = new Schema(fields);
schema.pre('remove', (next) => {
  // await Guest.remove({hotel: this._id});
  Guest.deleteMany({ hotel: this._id });
  next();
});

export default mongoose.model('Hotel', schema);
