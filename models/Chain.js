import mongoose from 'mongoose';

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
  hotels: [{
    type: Schema.Types.ObjectId,
    ref: 'Hotel',
  }],
  services: [{
    type: Schema.Types.ObjectId,
    ref: 'Service',
  }],

};

const schema = new Schema(fields);
export default mongoose.model('Chain', schema);
