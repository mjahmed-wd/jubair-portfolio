import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import particlesConfig from './components/particle-config/particlesjs-config';
import Headers from './components/Headers/Headers';
import Introduction from './components/Introduction/Introduction';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <div style={{position:"relative",overflow:"hidden"}}>
       <div style={{ position: 'absolute'}}>
        <Particles height="100%" width="100vw" params={particlesConfig} />
      </div>
     <Headers/>
     <Introduction/>
     <Projects/>
     <Contacts/>
     <About/>
     <Footer/>
   </div>
  );
}

export default App;
