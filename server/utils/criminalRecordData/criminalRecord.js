const RecordSchema = require('../../models/CriminalRecord');
const mongoose = require('mongoose');
const csv = require('fast-csv');


// Set up Mongoose
mongoose.connect('mongodb://localhost:27017/criminalRecord');
mongoose.Promise = global.Promise;


function onEachRow (data) {
const record = new RecordSchema( data);
console.log("record", record)
record.save(function(err) {
  if (err) throw err;

  console.log('Record saved successfully!');
});
}

function onAllRowsSave (allFiles) {
  RecordSchema.insertMany(allFiles)
    .then(() => {console.log('success')}, err => {throw new Error(err.message)});

}

const parsedCsv =[]
function readFile({onEachRow, onAllRowsSave}) {
  csv.parseFile('./recordData.csv',  { headers: true })
    .on('data', (data) => {
      parsedCsv.push(data)

      console.log('data', data )
      onEachRow && typeof onEachRow === 'function' && onEachRow(data)

    })
    .on('end', () => {

      // onAllRowsSave && typeof onAllRowsSave === 'function' && onAllRowsSave(parsedCsv)
      // console.log('Parsing complete!!', onAllRowsSave )

    });
}

RecordSchema.remove({})
  .then(() => {console.log('success')}, err => {throw new Error(err.message)});
readFile({onEachRow})


