import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import Individual from './Components/Pages/Individual'
import Classes from './Components/Pages/Classes'
import Pronounciation from './Components/Pages/Pronounciation'
import Books from './Components/Pages/Books'
import Resources from './Components/Pages/Resources'
import Testimonials from './Components/Pages/Testimonials'

import logo from './images/logo-text_03.gif'
import home from './images/b.home.jpg'


function App() {

  return (
    <div className="App">
      <nav className='Nav'>
        <img src={logo}/>
        <img src={home}/>
        <br></br>

        <Link to="/"><a className='Home'>Home</a></Link>|
        <Link to="/Individual"><a className='Private_Lessons'>Private Lessons</a></Link>|
        <Link to="Classes"><a className='Group Lessons'>Group Lessons</a></Link>|
        <Link to="/Pronounciation"><a className='Pronounciation'>Pronounciation</a></Link>|
        <Link to="/Books"><a className='Books'>Books</a></Link>|
        <Link to="/Resources"><a className='Resources'>Resources</a></Link>|
        <Link to="/Testimonials"><a className='Testimonials'>Testimonials</a></Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Individual" element={<Individual />} />
          <Route path="/Classes" element={<Classes />} />
          <Route path="/Pronounciation" element={<Pronounciation />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Testimonials" element={<Testimonials />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
