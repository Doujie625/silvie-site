import './App.css';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import Individual from './Components/Pages/Individual'
import Pronounciation from './Components/Pages/Pronounciation'
import Books from './Components/Pages/Books'
import Resources from './Components/Pages/Resources'
import Testimonials from './Components/Pages/Testimonials'

import logo from './images/logo-text_03.gif'
import home from './images/b.home.jpg'
import contact from './images/b.contact.jpg'
import individual from './images/b.individual.jpg'
import pronounciation from './images/b.pronunciation.jpg'
import books from './images/b.books.jpg'
import resources from './images/b.resources.jpg'
import testimonials from './images/b.testimonials.jpg'

function App() {

  const [navImg, setNavImg] = useState(home)

  const handleImg = (e) => {
    if (e.target.className === 'Home') {
      setNavImg(home)
    }
    else if (e.target.className === 'Contact') {
      setNavImg(contact)
    }
    else if (e.target.className === 'Private_Lessons') {
      setNavImg(individual)
    }
    else if (e.target.className === 'Pronounciation') {
      setNavImg(pronounciation)
    }
    else if (e.target.className === 'Books') {
      setNavImg(books)
    }
    else if (e.target.className === 'Resources') {
      setNavImg(resources)
    }
    else if (e.target.className === 'Testimonials') {
      setNavImg(testimonials)
    }
  }

  return (
    <div className="App">
      <nav>
        <div className='Nav-upper'>
          <div className='logo'>
            <Link to="/" > <img className="Home" src={logo} onClick={handleImg}/></Link>
          </div>
          <div className='bg-image' style={{backgroundImage: `url(${navImg})`}}>
          </div>
          <div className='links'>
            <Link to="Contact" ><a className='Contact' onClick={handleImg}>Contact</a></Link>|
            <Link to="/Individual" ><a className='Private_Lessons' onClick={handleImg}>Private Lessons</a></Link>|
            <Link to="/Pronounciation" ><a className='Pronounciation' onClick={handleImg}>Pronounciation</a></Link>|
            <Link to="/Books" ><a className='Books' onClick={handleImg}>Books</a></Link>|
            <Link to="/Resources" ><a className='Resources' onClick={handleImg}>Resources</a></Link>|
            <Link to="/Testimonials" ><a className='Testimonials' onClick={handleImg}>Testimonials</a></Link>
          </div>
        </div>
      </nav>
      
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Individual" element={<Individual />} />
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
