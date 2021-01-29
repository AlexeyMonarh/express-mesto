const mongoose = require('mongoose');
const User = require('../models/user');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(() => res.status(404).send({ message: 'Пользователи не найдены!' }));
};

const getUser = (req, res) => {
  User.findById(req.params._id)
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch((err) => {
      if (err instanceof mongoose.CastError) {
        return res.status(404).send({ message: 'Нет пользователя с таким id!' });
      }
      return res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};

const postUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(200).send({ data: user }))
    .catch(() => res.status(400).send({ message: 'Пользователь не добавлен! Ошибка данных' }));
};

const patchUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about })
    .then((user) => res.status(200).send({ data: user }))
    .catch(() => res.status(400).send({ message: 'Информация не обновлена! Ошибка данных' }));
};

const patchAva = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar })
    .then((ava) => res.status(200).send({ data: ava }))
    .catch(() => res.status(400).send({ message: 'Информация не обновлена! Ошибка данных' }));
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  patchUser,
  patchAva,
};
