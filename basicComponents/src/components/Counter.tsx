import React from 'react'
import {useState} from 'react'


const Counter = () => {
    const [counterValue , setCounterValue] = useState(0);
  return (
    <div>
        <h1>This heading is from Counter components</h1>
        <div>
            <p>
                {counterValue}
            </p>
            <button onClick={() => setCounterValue(prev => prev+1)}>Increase </button>
            <button onClick={() => setCounterValue(prev => prev-1)}>Decrease </button>
            <button onClick={() => setCounterValue(0)}>Reset </button>
        </div>
    </div>
  )
}

export default Counter