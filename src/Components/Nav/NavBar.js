import { Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import logo from './../../images/logo-text_03.gif'
import NavLinks from "./NavLinks";
import css from './../Css/Nav.css'

const NavBar = (props) => {
    const [open, setOpen] = useState(false)
    const handleImg = props.handleImg
    return (
        <div className="Nav">
            <nav className="links" id="font-face-gm">
                <div className="logo">
                    <Link to="/" > <img className="Home" src={logo} onClick={handleImg}/></Link>
                </div>
                <div className="nav-links">
                    <div className="item">
                        <Link to="/Contact" className='Contact' onClick={handleImg}>Contact</Link>
                    </div>
                    <div className="item">
                        <Link to="/Individual" className='Private_Lessons' onClick={handleImg}>Czech Lessons</Link>
                    </div>
                    <div className="item">
                    <Link to="/Pronounciation" className='Pronounciation' onClick={handleImg}>Pronounciation</Link>
                    </div>
                    <div className="item">
                    <Link to="/Books" className='Books' onClick={handleImg}>Books</Link>
                    </div>
                    <div className="item">
                    <Link to="/Resources" className='Resources' onClick={handleImg}>Resources</Link>
                    </div>
                    <div className="item">
                    <Link to="/Testimonials" className='Testimonials' onClick={handleImg}>Testimonials</Link>
                    </div>
                </div>
                <div className="hamburger">
                    <AiOutlineMenu className="HBIcon" size='40px' onClick={() => setOpen(!open)}>
                    </AiOutlineMenu>
                    {open && <NavLinks handleImg={handleImg}/>}
                </div>
                {/* {open && <NavLinks handleImg={handleImg}/>} */}
            </nav>
        </div>
    )
}

export default NavBar