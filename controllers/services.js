import Service from '../models/Service.js';

export const showAll = async (req, res) => {
  services = await Service.find();
  res.send(services);
};

export const show = async (req, res) => {
  const { _id } = req.params;
  try {
    const service = await Service.findOne({ _id });
    res.send(service);
  } catch (err) {
    res.send(err);
  }
};

export const update = async (req, res) => {
  const { _id } = req.params;
  const { name } = req.body;
  try {
    const service = await Service.findOne({ _id });
    if (name) {
      service.name = name;
    }

    await service.save();
    res.send(service);
  } catch (err) {
    res.send(err);
  }
};

export const destroy = async (req, res) => {
  const { _id } = req.params;
  try {
    await Service.deleteOne({ _id });
    res.status(204).send('Service deleted.');
  } catch (err) {
    res.send(err);
  }
};

export const createItem = async (req, res) => {
  const { _id } = req.params;
  const { name, price, details } = req.body;
  const newItem = {
    name,
    price,
    details,
  };
  try {
    const item = await Service.updateOne({ _id }, { $push: { items: newItem } });
    res.send(item);
  } catch (err) {
    res.send(err);
  }
};
