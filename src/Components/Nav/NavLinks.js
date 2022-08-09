import { Link } from "react-router-dom";


const NavLinks = (props) => {
    const handleImg = props.handleImg

    return (
        <div className="drop">
            <Link to="/Individual" className='Private_Lessons' onClick={handleImg}>Private Lessons</Link>
            <Link to="/Pronounciation" className='Pronounciation' onClick={handleImg}>Pronounciation</Link>
            <Link to="/Books" className='Books' onClick={handleImg}>Books</Link>
            <Link to="/Resources" className='Resources' onClick={handleImg}>Resources</Link>
            <Link to="/Testimonials" className='Testimonials' onClick={handleImg}>Testimonials</Link>
        </div>
    )
}

export default NavLinks