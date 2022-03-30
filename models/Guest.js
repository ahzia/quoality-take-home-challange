import mongoose from 'mongoose';

const { Schema } = mongoose;

const fields = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  room: {
    type: String,
    required: true,
  },
  checkin: {
    type: Date,
    required: true,
  },
  checkout: {
    type: Date,
  },
  hotel: {
    type: Schema.Types.ObjectId,
    ref: 'Hotel',
  },
};

const schema = new Schema(fields);

export default mongoose.model('Guest', schema);
