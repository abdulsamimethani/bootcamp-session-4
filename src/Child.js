import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(CounterContext)
    return (
        <div>
            <h1>This is first child using counter context</h1>
            <h2>counter value is:{counterValue[0]}</h2>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increament context</button>
        </div>
    )
}

export default Child;