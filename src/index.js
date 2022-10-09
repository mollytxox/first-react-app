import ReactDOM from 'react-dom/client';
// import our components (java script files)
import Hero from './components/Hero';
import Message from './components/Message';
import Footer from './components/Footer';
import FirstUseState from './components/FirstUseState';
import Counter from './components/Counter';
import Modals from './components/Modals';
import Gallery from './components/Gallery';
import Props from './components/Props';
import Dinosaurs from './components/Dinosaurs';
import MapSomeData from './components/MapSomeData';

//import our styles
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Hero />
    <Message />
    <Gallery />
    <Props />
    <Dinosaurs />
    <FirstUseState />
    <Counter />
    <Modals />
    <MapSomeData />
    <Footer />
  </>
);
