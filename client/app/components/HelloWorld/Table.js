import React, { useState, useEffect } from 'react';
import './table.css'

function filterRows() {

}
const TableComponent = (props) => {


  const {columns: dataColumns, rows: dataRows} = props.data;

  const [value, setValue] = React.useState('');
  const onChange = event => setValue(event.target.value);

  // todo filter table based on value

  const tableHeaders = (<thead>
  <tr>
    {dataColumns.map((column) => {
      return <th key={`${column}${Date.now()}`}>{column}</th>; })}
  </tr>
  </thead>);

  const tableBody = dataRows.map((row) => {
    return (
      <tbody>
      <tr key={`${row}${Date.now()}`}>
        {dataColumns.map((column) => {
          return <td key={`${row[column]}${Date.now()}`}>{row[column]}</td>; })}
      </tr>
      </tbody>); });


  return (
    <div className="infoContainer">
      <input value={value} type="text" onChange={onChange} />
      <table className="table table-bordered table-hover" width="100%">
      {tableHeaders}
      {tableBody}
    </table>;
    </div>
  );
};

const Table = () => {
  return (
    <div>
      <TableComponent data={tableData}/>
    </div>
  )
}



export default Table;
const tableData = {
  columns: ['Service', 'Cost/Unit', 'Unit', 'Units Requested'],
  rows: [{
    'Service': 'dog',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'cat1',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'mouse',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'cat3',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'rat',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'armadillo',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'meercat',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'bird',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'mouse',
    'Cost/Unit': 50,
    'Unit': '1 Hour',
    'Units Requested': 12
  }, {
    'Service': 'foo',
    'Unit': null,
    'Cost/Unit': undefined,
    'Units Requested': 42
  }]
};
