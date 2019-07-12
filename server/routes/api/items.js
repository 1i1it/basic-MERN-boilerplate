const Item = require('../../models/Item');

module.exports = (app) => {
  app.get('/api/items', (req, res, next) => {
    Item.find()
      .exec()
      .then((item) => res.status(200).json(item))
      .catch((err) => next(err));
  });

  app.get('/api/item/:key/:value', (req, res, next) => {
    Item.findOne({[req.params.key]: req.params.value})
      .exec()
      .then((item) => res.status(200).json(item))
      .catch((err) => next(err));
  });

  app.get('/api/item/:id', (req, res, next) => {
    Item.findById(req.params.id)
      .exec()
      .then((item) => res.status(200).json(item))
      .catch((err) => next(err));
  });

  app.post('/api/item', function (req, res, next) {

    const { newItem } = req.body
    const item = new Item(newItem);

    item.save()
      .then(() =>res.status(200).json(item))
      .catch((err) => next(err));
  });


  app.delete('/api/item/:id', function (req, res, next) {
    Item.findOneAndDelete({ _id: req.params.id })
      .exec()
      .then(() => res.json('Deleted successfully'))
      .catch((err) => next(err));
  });


  app.put('/api/item/:id', (req, res, next) => {
    const { updatedItem } = req.body
    Item.findOneAndUpdate({ _id: req.params.id }, updatedItem, {upsert:true, useFindAndModify: false}, function(err, doc){
      if (err) return res.send(500, { error: err });
      return res.send("succesfully saved");
    })
  });
};


// todo - how to update any property on item?
