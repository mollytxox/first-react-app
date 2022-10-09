const Dinosaur = (props) => {
    return (
        <div className="dinosaur">
            <h5>Dinosaur name: {props.name} - Diet: {props.diet} - Coolness Facotr: {props.coolness}</h5>
        </div>
    );
}

// this way you can call the properties without using the word props
// const Dinosaur = ({name, diet, coolness}) => {
//     return (
//         <div className="dinosaur">
//             <h5>Dinosaur name: {name} - Diet: {diet} - Coolness Facotr: {coolness}</h5>
//         </div>
//     );
// }

const Dinosaurs = () => {
    return (
        <div className="dinosaur-box">
            <h2>My Favourite Dinosaurs</h2>
            <br />
            <p>Here's a list of the coolest dinosaurs</p>
            <div className="section">
                <Dinosaur name="T-Rex" diet="Carnivore" coolness="9/10" />
                <Dinosaur name="Triceratops" diet="Carnivore" coolness="7/10" />
                <Dinosaur name="Velociraptor" diet="Carnivore" coolness="8/10" />
            </div>
        </div>
    );
}

export default Dinosaurs;