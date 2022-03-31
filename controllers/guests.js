import Guest from '../models/Guest.js';

export const showAll = async (req, res) => {
  try {
    const guests = await Guest.find();
    res.send(guests);
  } catch (err) {
    res.send(err);
  }
};

export const show = async (req, res) => {
  const { _id } = req.params;
  try {
    const guest = await Guest.findOne({ _id });
    if (guest) {
      res.send(guest);
    } else {
      res.status(404).send({ message: 'Guest not found' });
    }
  } catch (err) {
    res.send(err);
  }
};

export const update = async (req, res) => {
  const { _id } = req.params;
  const {
    name, room, checkin, checkout,
  } = req.body;
  try {
    const guest = await Guest.findOne({ _id });
    if (guest) {
      if (name) {
        guest.name = name;
      }
      if (room) {
        guest.room = room;
      }
      if (checkin) {
        guest.checkin = checkin;
      }
      if (checkout) {
        guest.checkout = checkout;
      }
      await guest.save();
      res.send(guest);
    } else {
      res.status(404).send({ message: 'Guest not found' });
    }
  } catch (err) {
    res.send(err);
  }
};

export const destroy = async (req, res) => {
  const { _id } = req.params;
  try {
    await Guest.deleteOne({ _id });
    res.status(204).send({ message: 'Guest deleted.' });
  } catch (err) {
    res.send(err);
  }
};
