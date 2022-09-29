import { Link } from "react-router-dom";


const NavLinks = (props) => {
    const handleImg = props.handleImg

    return (
        <div className="drop">
            <div className="item">
                <Link to="/" className='Home' onClick={handleImg}>Home</Link>
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
                <Link to="/Contact" className='Contact' onClick={handleImg}>Contact</Link>
            </div>
            <div className="item">
                <Link to="/Testimonials" className='Testimonials' onClick={handleImg}>Testimonials</Link>
            </div>
        </div>
    )
}

export default NavLinks