const Item = require('../../models/Item');
const mongoose = require('mongoose');
const csv = require('fast-csv');

// // Set up Mongoose
// mongoose.connect('mongodb://localhost:27017/dbName');
// mongoose.Promise = global.Promise;


let parsedCsv = [];

function readFile({onEachRow, onAllRows}) {
  csv.parseFile('./dataFile.csv',  { headers: true })
    .on('data', (data) => {
      let newDataObj = {}
      Object.keys(data).forEach(key=> {
          newDataObj[key] = data[key].trim()
          return newDataObj
        }
      )
      console.log("data", data)
      parsedCsv.push(newDataObj)
      onEachRow && typeof onEachRow === 'function' && onEachRow(data)

    })
    .on('end', () => {
      console.log('Parsing complete!!', parsedCsv)
      onAllRows && typeof onAllRows === 'function' && onAllRows(parsedCsv)

    });
}

module.exports = readFile;

// function onEachRowSave (data) {
// const file = new Item( data);
// file.save(function(err) {
//   if (err) throw err;
//
//   console.log('File saved successfully!');
// });
// }
//
// function onAllRowsSave (allFiles) {
//   Item.insertMany(allFiles)
//     .then(() => {console.log('success')}, err => {throw new Error(err.message)});
//
// }



// function runAll () {
//   readFile({onEachRow, onAllRows})
// }
// runAll()

readFile({})
