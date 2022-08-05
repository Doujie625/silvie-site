import React from "react"
import home_logo from './../../images/sub.home.gif'
import silvie from './../../images/Silvie_046-adj-285x.jpg'

const Home = function() {
    
    return (
        <div className="Home">
            <br></br>
            <div className="body">
                <div className="left"> 
                    <img src={home_logo} /><br/><br/>
                My name is Silvie Opatrn and I am a native Czech speaker. 
                I was born in Prague and lived in the Czech Republic until the age of 18.
                <br/><br/>
                I have been teaching Czech to private students since 1999 on an individual 
                basis and in small groups of up to eight students. During that time I have 
                been designing lesson plans based on individual student needs and interests 
                and writing handouts to help students with specific grammar points and to 
                give them additional practice.<br/><br/>
                I offer Czech lesson:<br/>
                    <ul>
                        <li>in person</li>
                        <li>online via Skype and email</li>
                        <li>over the phone</li>
                    </ul>
                In addition to providing individual instruction, I teach Conversational Czech
                courses at the University of Washington Experimental College in Seattle and 
                Seattle Central Community College.<br/><br/>
                My services include:<br/>
                    <ul>
                        <li>translations from Czech to English and English to Czech</li>
                        <li>help with genealogical research</li>
                        <li>assisstance with correspondence for those who have Czech relatives and friends</li>
                        <li>teaching strategies of Czech pronounciation for opera singers</li>
                    </ul>
                </div>

                <div className="right">
                (206) 779-0530 <br/>
                Silvie.Opatrna@gmail.com <br/>
                    <div>
                        <img src={silvie} />

                    </div>

                "Silvie is an excellent instructor. She is especially helpful with
                pronunciation. She can explain grammar in an easy to understand manner. 
                She is very patient."
                <br></br>
                <br></br>
                - Scott Timmons, Judge
                </div>

            </div>
        </div>
    )
}

export default Home