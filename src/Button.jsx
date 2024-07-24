import React, { useState } from 'react'

function Button() {

    const [count, setCount] = useState(0);

    const handleClick = (e) => {
        if(count < 10) {
            setCount(count + 1);
        } else {
            e.target.textContent = "STOP!"
        }
    };

    return (
        <>
            <button onClick={(e) => handleClick(e)}>Click Me!</button>
            {count < 10 ? <h2>{count}</h2> : <h2>You are mean!</h2>}
        </>
    );
}

export default Button