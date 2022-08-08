import React, {useState} from "react"
import { testimonial_data } from "./../Data/Testimonials_data"

const Test = function(props) {

    const silvie = testimonial_data.filter(image =>
        image.page === props.page
    )
    const silvieImage = silvie.map(image =>
        <div className="format">
        <div className="icon" key={image.id}>
            <img src={image.image} />
        </div>
        <div className="text">
            <div className="quote">
                '{image.quote}'
            </div>
            <div className="student">
                - {image.student},&nbsp;
                {image.occupation}
            </div>
        </div>
        </div>
    )
    
    return (
        <div className="format">
            {silvieImage[0]}
        </div>
    )
}

export default Test