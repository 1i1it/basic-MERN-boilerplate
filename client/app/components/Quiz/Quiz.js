import React, { useState } from 'react';

const options = [{value: 'usd', label: 'USD'}, {value: 'eur', label: 'EUR'}, {value: 'gbd', label: 'GBP'}]
const Quiz = () => {
  const [optionsOpen, setToggleOptions] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('usd');

  // const onChange = event => setValue(event.target.value);


  const selectedLabel = options.filter(option => option.value === selectedOption )[0].label
  console.log("selectedLabel", selectedLabel)



  return (
    <div>
      <h1>Currency</h1>

      <div style={{padding: '50px'}}>

        <div  onClick={() => setToggleOptions(!optionsOpen)} style={{borderRadius: "5%", border: '1px solid grey', height: '50px', width: '300px'}}>{selectedLabel}</div>

        {optionsOpen ? options.map((option, i)  => {

          if (option.value!== selectedOption) {
            return <div key={option.value}  onClick={() => setSelectedOption(option.value)} style={{border: '1px solid grey', height: '50px', width: '300px'}}>{option.label}</div>
          }
        } ) : null }

      </div>
    </div>
  );
};
export default Quiz;
