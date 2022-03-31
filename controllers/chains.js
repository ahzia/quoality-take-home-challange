import Chain from '../models/Chain.js';
import Hotel from '../models/Hotel.js';

export const showAll = async (req, res) => {
  const chains = await Chain.find();
  res.send(chains);
};

export const create = async (req, res) => {
  const { name, address } = req.body;
  const chain = new Chain({
    name,
    address,
  });
  try {
    await chain.save();
    res.status(201).send(chain);
  } catch (err) {
    res.send(err);
  }
};

export const show = async (req, res) => {
  const { _id } = req.params;
  try {
    const chain = await Chain.findOne({ _id });
    res.send(chain);
  } catch (err) {
    res.send(err);
  }
};

export const update = async (req, res) => {
  const { _id } = req.params;
  const { name, address } = req.body;
  try {
    const chain = await Chain.findOne({ _id });
    if (name) {
      chain.name = name;
    }
    if (address) {
      chain.address = address;
    }
    await chain.save();
    res.send(chain);
  } catch (err) {
    res.send(err);
  }
};

export const destroy = async (req, res) => {
  const { _id } = req.params;
  try {
    await Chain.deleteOne({ _id });
    res.status(204);
  } catch (err) {
    res.send(err);
  }
};

export const showAllHotels = async (req, res) => {
  const { _id } = req.params;
  try {
    const hotels = await Hotel.find({ chain: _id });
    res.send(hotels);
  } catch (err) {
    res.send(err);
  }
};

export const createHotel = async (req, res) => {
  const { _id } = req.params;
  const { name, address } = req.body;
  const newHotel = new Hotel({
    name,
    address,
    isChain: true,
    chain: _id,
  });
  try {
    await newHotel.save();
    await Chain.updateOne({ _id: newHotel.chain }, { $push: { hotels: newHotel._id } });
    res.status(201).send(newHotel);
  } catch (err) {
    res.send(err);
  }
};
