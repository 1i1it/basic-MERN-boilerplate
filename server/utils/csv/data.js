const Item = require('../../models/Item');
const mongoose = require('mongoose');
const csv = require('fast-csv');

// Set up Mongoose
mongoose.connect('mongodb://localhost:27017/checkr');
mongoose.Promise = global.Promise;


let parsedCsv = []
function readCsv(onEachRow, onAllRows) {
  csv.parseFile('./data.csv',  { headers: true })
    .on('data', function(data) {
      const newData = Object.keys(data).forEach(key=> {
        return {[key]:  data[key].trim()}
      })
      console.log("newData", newData)
      parsedCsv.push(data)
      //onEachRow(data)

    })
    .on('end', function() {
      console.log('Parsing complete!', parsedCsv)
      onAllRows(parsedCsv)

    });
}

function onEachRow (data) {
const file = new Item( data);
file.save(function(err) {
  if (err) throw err;

  console.log('File saved successfully!');
});
}

function onAllRows (allFiles) {
  Item.insertMany(allFiles)
    .then(() => {console.log('success')}, err => {throw new Error(err.message)});

}
function runAll () {
  readCsv(onEachRow, onAllRows)
}
runAll()
