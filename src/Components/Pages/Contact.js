import contact_logo from './../../images/sub.contact.gif'
import silvie from './../../images/Silvie_129-adj-285x.jpg'

const Contact = function() {
    
    return (
        <div className="Contact">
            <br></br>
            <div className="body">
                <div className="left"> 
                    <img src={contact_logo} /><br/><br/>
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

                <div className="right">
                (206) 779-0530 <br/>
                Silvie.Opatrna@gmail.com <br/>
                    <div>
                        <img src={silvie} />

                    </div>

                "Silvie is an excellent teacher. Not only is
                she attentive to the student's needs, but she
                is incredibly patient. She
                is one of friendliest persons I've ever met
                and as such, I felt immediately relaxed around her. Silvie
                creates an atmosphere that is fun, focused,
                and flexible. I highly recommend her
                especially if you're a beginner like I am."
                <br></br>
                <br></br>

                - Blake Dodson,
                Software Tester
                </div>

            </div>
        </div>
    )

}

export default Contact