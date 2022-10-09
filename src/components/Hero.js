import addTwoNumbers from "../utilities/add";
// <></>  These are called react fragmments, they replace divs as a parent element

const name = "Molly";

// bottomtext is a component of the hero which will apear at the bottom of the hero return
// scrolling text component
const BottomText = () => {
  return (
    <div id="scroll-container">
      <p id="scroll-text">TESTING SCROLL ANIMATIONS ON OUR REACT WEBSITE</p>
    </div>
  )
}

const Hero = () => {
  addTwoNumbers()
  return (
    <div id="hero">
      <h1 className="header">Hello World</h1>
      <p>This is the hero</p>
      <p>Welcome back, {name}</p>
      <BottomText />
    </div>
  );
}

export default Hero;
