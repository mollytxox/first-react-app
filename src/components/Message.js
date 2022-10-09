const grabUserName = () => {
    let name = prompt("What is your name?")
}

const greeting = () => {
    alert("Hey there!")
}


const Message = () => {
    return (
        <div>
            <img className="message-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
            <button onClick={greeting}>Click Me</button>
            <p className="message-box">This is my first React website, welcome!</p>
        </div>
    )
}

export default Message;