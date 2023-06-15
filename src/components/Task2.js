import React, { useState } from 'react';

function Task2(props) {
    //Task2
    const [arr1, setArr1] = useState([]);
    const [arr2, setArr2] = useState([]);
    const [arr3, setArr3] = useState([]);
    const [arrayList, setArrayList] = useState([]);
    
    //Task2 handle function
    const generateArrayList = () => {
       //var joind = arr1.concat(arr2,arr3);
        setArrayList(arr1+','+arr2+','+arr3)
    };

    return (
        <>
        <div>
            <h1>List of 3 Arrays</h1>
            <label>Enter the comma (,) seprated integers:</label>
            <input type="text" id="arr1" value={arr1} onChange={(e) => setArr1(e.target.value)} />
            <input type="text" id="arr2" value={arr2} onChange={(e) => setArr2(e.target.value)} />
            <input type="text" id="arr3" value={arr3} onChange={(e) => setArr3(e.target.value)} />
            <button className="btn btn-primary btn-block mb-4" onClick={generateArrayList}>Generate List of Arrays</button>
            <p>List of Arrays: {arrayList}</p>
        </div>
        </>

    );
}

export default Task2;