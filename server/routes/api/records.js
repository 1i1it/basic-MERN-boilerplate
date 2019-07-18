const RecordSchema = require('../../models/CriminalRecord');

module.exports = (app) => {
  app.get('/api/records', (req, res, next) => {
    RecordSchema.find()
      .exec()
      .then((records) => {
        let filteredItems = records
        if (req.query.country) {
          filteredItems = filteredItems.filter(record =>  record.country.includes(req.query.country))
          // respond with error
          if (req.query.year) {
            filteredItems = filteredItems.filter(record =>  record.year.includes(req.query.year))
          }
        }

        res.status(200).json(filteredItems)

      })
      .catch((err) => next(err));
  });

  // app.get('/api/item/:key/:value', (req, res, next) => {
  //   RecordSchema.findOne({[req.params.key]: req.params.value})
  //     .exec()
  //     .then((item) => res.status(200).json(item))
  //     .catch((err) => next(err));
  // });

  // app.get('/api/record/:year', (req, res, next) => {
  //   RecordSchema.findOne({[req.params.key]: req.params.value})
  //     .exec()
  //     .then((item) => res.status(200).json(item))
  //     .catch((err) => next(err));
  // });
  //
  // app.post('/api/item', function (req, res, next) {
  //
  //   const { newRecordSchema } = req.body
  //   const item = new RecordSchema(newRecordSchema);
  //
  //   item.save()
  //     .then(() =>res.status(200).json(item))
  //     .catch((err) => next(err));
  // });
  //
  //
  // app.delete('/api/item/:id', function (req, res, next) {
  //   RecordSchema.findOneAndDelete({ _id: req.params.id })
  //     .exec()
  //     .then(() => res.json('Deleted successfully'))
  //     .catch((err) => next(err));
  // });
  //
  //
  // app.put('/api/item/:id', (req, res, next) => {
  //   const { updatedRecordSchema } = req.body
  //   RecordSchema.findOneAndUpdate({ _id: req.params.id }, updatedRecordSchema, {upsert:true, useFindAndModify: false}, function(err, doc){
  //     if (err) return res.send(500, { error: err });
  //     return res.send("succesfully saved");
  //   })
  // });
};


