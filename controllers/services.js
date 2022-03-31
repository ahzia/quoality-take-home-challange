import Service from '../models/Service.js';

export const showAll = async (req, res) => {
  try {
    const services = await Service.find();
    res.send(services);
  } catch (err) {
    res.send(err);
  }
};

export const show = async (req, res) => {
  const { _id } = req.params;
  try {
    const service = await Service.findOne({ _id });
    if (service) {
      res.send(service);
    } else {
      res.status(404).send({ message: 'Service not found' });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const update = async (req, res) => {
  const { _id } = req.params;
  const { name } = req.body;
  try {
    const service = await Service.findOne({ _id });
    if (service) {
      if (name) {
        service.name = name;
      }
      await service.save();
      res.send(service);
    } else {
      res.status(404).send({ message: 'Service not found' });
    }
  } catch (err) {
    res.send(err);
  }
};

export const destroy = async (req, res) => {
  const { _id } = req.params;
  try {
    await Service.deleteOne({ _id });
    res.status(204).send({ message: 'Service deleted.' });
  } catch (err) {
    res.send(err);
  }
};

export const createItem = async (req, res) => {
  const { _id } = req.params;
  const newItem = req.body;
  try {
    await Service.updateOne({ _id }, { $push: { items: newItem } });
    res.send('Item added');
  } catch (err) {
    res.send(err);
  }
};
