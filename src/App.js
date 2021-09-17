

import Home from'./Component/Home/Home'
import NavMeenu from './Component/NavBar/NavMeenu'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import Hobby from './Component/Hobby/Hobby'
import Portfolio from './Component/Portfolio/Portfolio'
import './App.css'

 // <NavMeenu/>
 //     <Home />
 //     <About />
 //      <Hobby />
 //     <Contact />
 

function App() {
  return (

    <div style={{overflow:'hidden'
      
      }}>

 <NavMeenu/>
     <Home />
     <About />
      <Portfolio />
      <Hobby />
     <Contact />    

 

    </div>
  );
}

export default App;
