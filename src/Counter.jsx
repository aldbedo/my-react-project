import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const handleClick = (e) => {
        setCount(count + 1);
    }
    
    const resetClick = (e) => {
        setCount(0);
    }


    const decrementClick = (e) => {
        setCount(count - 1);
    }

    return (
            <div className="counter-box">
                <h1 className="counter-text">{count}</h1>
                <button className="buttons" onClick={(e) => decrementClick(e)}>Decrement</button>
                <button className="buttons" onClick={(e) => resetClick(e)}>Reset</button>
                <button className="buttons" onClick={(e) => handleClick(e)}>Increment</button>
            </div>
    );
}

export default Counter