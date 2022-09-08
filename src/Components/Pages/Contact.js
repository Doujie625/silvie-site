import crest from './../../images/cz-red.gif'

const Contact = function() {
    
    return (
        <div className="Contact">
            <br></br>
            <div className="body">
                <div className="title"> 
                    <img src={crest} className="img"/>
                    <span className="title_words">Contact</span>
                </div><br/>
                <div className='left' >
                    If you have any questions, or would like to learn more about my services, 
                    please do not hesitate to contact me.

                    <br/><br/>
                    Phone: (206) 779-0530
                    <br></br>
                    <br></br>
                    Email: Silvie.Opatrna@gmail.com  
                    <br></br>
                    <br></br>
                    I divide my time between the Czech Republic and Kerrville, Texas in the United States.
                    <br></br>
                    <br></br>
   
                </div>
            </div>
        </div>
    )

}

export default Contact