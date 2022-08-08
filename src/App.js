import './App.css';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useState, Component, useEffect } from 'react';
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

import Test from './Components/Pages/Test'

function App() {

  const [navImg, setNavImg] = useState(home)
  const [page, setPage] = useState('Home')

  useEffect(() => {
    console.log(page)
  }, [page])

  const handleImg = (e) => {
    if (e.target.className === 'Home') {
      setNavImg(home)
      setPage('Home')
    }
    else if (e.target.className === 'Contact') {
      setNavImg(contact)
      setPage('Contact')
    }
    else if (e.target.className === 'Private_Lessons') {
      setNavImg(individual)
      setPage('Individual')
    }
    else if (e.target.className === 'Pronounciation') {
      setNavImg(pronounciation)
      setPage('Pronounciation')
    }
    else if (e.target.className === 'Books') {
      setNavImg(books)
      setPage('Book')
    }
    else if (e.target.className === 'Resources') {
      setNavImg(resources)
      setPage('Resources')
    }
    else if (e.target.className === 'Testimonials') {
      setNavImg(testimonials)
      setPage('Testimonial')
    }
  }

  return (
    <div className="App">
      <nav className='Nav-upper'>
          <div className='logo'>
            <Link to="/" > <img className="Home" src={logo} onClick={handleImg}/></Link>
          </div>
          <div className='bg-image' style={{backgroundImage: `url(${navImg})`}}>
          <div className='links'>
            {/* <Link to="Contact" ><a className='Contact' onClick={handleImg}>Contact</a></Link>| */}
            <Link to="/Individual" className='Private_Lessons' onClick={handleImg}>Private Lessons</Link>|
            <Link to="/Pronounciation" className='Pronounciation' onClick={handleImg}>Pronounciation</Link>|
            <Link to="/Books" className='Books' onClick={handleImg}>Books</Link>|
            <Link to="/Resources" className='Resources' onClick={handleImg}>Resources</Link>|
            <Link to="/Testimonials" className='Testimonials' onClick={handleImg}>Testimonials</Link>
          </div>
          </div>
      </nav>
      
      <main>
        <Test page={page} />
        <Routes className="Routes">
          <Route path="*" element={<Home />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
          <Route path="/Individual" element={<Individual />} />
          <Route path="/Pronounciation" element={<Pronounciation />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Test" element={<Test />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
