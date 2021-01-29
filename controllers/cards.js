const mongoose = require('mongoose');
const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send({ data: cards });
    })
    .catch(() => res.status(404).send({ message: 'Карточки не найдены! Ошибка данных' }));
};

const postCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => res.status(200).send({ data: card }))
    .catch(() => res.status(400).send({ message: 'Карточка не созданна! Ошибка данных' }));
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params._id)
    .then((card) => {
      res.status(200).send({ data: card });
    })
    .catch((err) => {
      if (err instanceof mongoose.CastError) {
        return res.status(404).send({ message: 'Нет карточки с таким id!' });
      }
      return res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};

const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params._id,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .then((like) => res.status(200).send({ data: like }))
    .catch(() => res.status(400).send({ message: 'Лайк не поставлен! Ошибка данных' }));
};

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params._id,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .then((dislike) => res.status(200).send({ data: dislike }))
    .catch(() => res.status(400).send({ message: 'Лайк не убран! Ошибка данных' }));
};

module.exports = {
  getCards,
  postCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
