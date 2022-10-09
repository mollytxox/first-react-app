const GreetingMessage = (props) => {
    return (
        <div id="greeting">
            Hello, {props.name}. {props.message}.
        </div>
    );
}

const Car = (props) => {
    return (
        <div className="car">
            <h5>Car type: {props.type} - Car Price: {props.price}</h5>
        </div>
    );
}

const Props = () => {
    return (
        <div className="props-box">
            <h2>Props</h2>
            <br />
            <p>You can look at props as arguments - it's a way to send
                data down between components.
            </p>
            <GreetingMessage name="Molly" message="Welcome back" />
            <Car type="BMW" price="$20,000" />
            <Car type="Toyota" price="$15,000" />
            <Car type="Lexus" price="$60,000" />
        </div>
    );
}


export default Props;