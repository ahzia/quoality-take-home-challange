import Hotel from '../models/Hotel.js';

export const showAll = async (req, res) => {
  const { nonChain } = req.body;
  let hotel;
  if (nonChain) {
    hotel = await Hotel.find({'isChain':false});
  } else {
    hotel = await Hotel.find();
  }
  res.send(hotel);
};

export const create = async (req, res) => {
  const { name, address } = req.body;
  const hotel = new Hotel({
    name,
    address,
    isChain: false,
  });
  try {
    await hotel.save();
    res.send(hotel);
  } catch (err) {
    res.send(err);
  }
};

export const show = async (req, res) => {
  const { _id } = req.params;
  try {
    const hotel = await Hotel.findOne({ _id });
    res.send(hotel);
  } catch (err) {
    res.send(err);
  }
};

export const update = async (req, res) => {
  const { _id } = req.params;
  const { name, address } = req.body;
  try {
    const hotel = await Hotel.findOne({ _id });
    if (name) {
      hotel.name = name;
    }
    if (address) {
      hotel.address = address;
    }
    await hotel.save();
    res.send(hotel);
  } catch (err) {
    res.send(err);
  }
};

export const destroy = async (req, res) => {
  const { _id } = req.params;
  try {
    await Hotel.deleteOne({ _id });
    res.status(204).send('Hotel deleted.');
  } catch (err) {
    res.send(err);
  }
};
