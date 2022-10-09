import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }
    return (
        <div className="counter-box">
            <h2>Counter</h2>
            <p>This counter uses useState to increment itself</p>
            <p className="count-number">{count}</p>
            <button onClick={increaseCount}>Add a number</button>
            <button onClick={decreaseCount}>Decrease a number</button>
        </div>
    )
}

export default Counter;