import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';

const Child2 =() =>{

    let [state, dispatch] = useReducer(counterReducer, 1);
    return(
        <div>
           <h4>This is second Child using Counter Reducer</h4>
           <h3>Value of reducer state is: {state}</h3>
           <button onClick={()=>dispatch('INCREAMENT')}>Increament Reducer</button>
        </div>
    )
}

export default Child2;