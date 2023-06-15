import React, { useState } from 'react';

function Task3(props) {
  
    //Task3
    const [array, setArray] = useState([1,2,3,4,5,50,90]);
    const [sum, setSum] = useState([]);
    const [pairs, setPairs] = useState([]);
    
    const [maxDifference, setMaxDifference] = useState(Number.MIN_SAFE_INTEGER);
    const [minDifference, setMinDifference] = useState(Number.MAX_SAFE_INTEGER);



    //Task3 handle function 
    const findPairs = () => {
        let temp = [];
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == sum) {
                temp.push(['{'+array[i]+','+ array[j]+'}']);
            }
            }
        }
        //console.log(temp);
        setPairs(temp);

        // find maximum and minimum difference between adjacent elements
        for (let i = 1; i < array.length; i++) {
        let difference = Math.abs(array[i] - array[i - 1]);
    
        if (difference > maxDifference) {
            setMaxDifference(difference);
        }
    
        if (difference < minDifference) {
            setMinDifference(difference);
        }
        }
    
        
  
    }

    return (
        <>
        <div>
            <h1>Pairs of integers</h1>
            <label>Enter the comma (,) seprated integers array:</label>
            <input type="text" id="array" value={array} onChange={(e) => setArray(e.target.value)} />
            <label>Enter a sum, to find pairs:</label>
            <input type={'number'} id='sum' value={sum} onChange={(e)=>setSum(e.target.value)} />
            <br/>
            <button className="btn btn-primary btn-block mb-4" onClick={findPairs} >Find Pairs</button>
            <p>Pairs of integers: {pairs} whose sum is: {sum} </p>

            <p>Max difference: {maxDifference}</p>
            <p>Min difference: {minDifference}</p>
        </div>

        </>

    );
}

export default Task3;