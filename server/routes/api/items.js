const Item = require('../../models/Item');

module.exports = (app) => {
  app.get('/api/items', (req, res, next) => {
    Item.find()
      .exec()
      .then((item) => res.json(item))
      .catch((err) => next(err));
  });

  app.get('/api/item/name/:item', (req, res, next) => {
    Item.findOne({item: req.params.item})
      .exec()
      .then((item) => res.json(item))
      .catch((err) => next(err));
  });

  app.get('/api/item/:id', (req, res, next) => {
    Item.findById(req.params.id)
      .exec()
      .then((item) => res.json(item))
      .catch((err) => next(err));
  });

  app.post('/api/item', function (req, res, next) {
    const { newItem } = req.body
    const item = new Item(newItem);

    item.save()
      .then(() => res.json(item))
      .catch((err) => next(err));
  });


  app.delete('/api/item/:id', function (req, res, next) {
    Item.findOneAndDelete({ _id: req.params.id })
      .exec()
      .then((item) => res.json())
      .catch((err) => next(err));
  });


  app.put('/api/item', (req, res, next) => {
    const { updatedItem } = req.body
    Item.findById(updatedItem.id)
        .exec()
        .then((item) => {
          item =
          // update tem here
            .then(() => res.json(counter))
            .catch((err) => next(err));
        })
        .catch((err) => next(err));
    })



};


// todo - how to update any property on item?
