// grab the useState hook from react
// the curly brackets are an example of destructuring
// they help us grab specific things from an object
import { useState } from 'react'

const FirstUseState = () => {
    // the first variable in [] is the name of the state
    // the second variable in [] is a function which changes the state
    const [name, setName] = useState("...");

    const inputName = () => {
        //this function will grab the username and update the name useState
        let newName = prompt("What is your name?:")
        setName(newName);
    }
    return (
        <div className="usestate-box">
            <h2>First use state</h2>
            <p>This is React useState.</p>
            <p>useState is a way React can keep track of data.</p>
            <p>useState is only available to the components we give it to.</p>
            <p>Your name is {name}</p>
            <button onClick={inputName}>Enter your name</button>
        </div>
    )
}

export default FirstUseState;