import React, { useState } from 'react';

function Task1(props) {
    const [input, setInput] = useState('');
    const [waveFormArray, setWaveFormArray] = useState([]);
  
    const generateWaveFormArray = () => {
      const inputArray = input.split(',').map(Number);
  
      inputArray.sort((a, b) => a - b);
  
      for (let i = 0; i < inputArray.length - 1; i += 2) {
        const temp = inputArray[i];
        inputArray[i] = inputArray[i + 1];
        inputArray[i + 1] = temp;
      }
  
      setWaveFormArray(inputArray);
    };
  
    return (
      <div>
        <h1>Wave Form Array</h1>
        <label>Enter the comma (,) seprated integers:</label>
        <input type="text" id="input" value={input} onChange={(e) => setInput(e.target.value)} />
        <button 
            className="btn btn-primary btn-block mb-4"
            onClick={generateWaveFormArray}>
            Generate Wave Form</button>
        <p>Wave Form Array: {waveFormArray.join(', ')}</p>
      </div>
    );
}

export default Task1;

