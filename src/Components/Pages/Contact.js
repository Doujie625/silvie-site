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
                    I live and teach in Seattle in the state of Washington in the United States. 
                    I also offer distance instruction online via Skype and email and over the phone.
                    <br/><br/>
                    Phone: (206) 779-0530
                    <br></br>
                    Email: Silvie.Opatrna@gmail.com     
                </div>
            </div>
        </div>
    )

}

export default Contact