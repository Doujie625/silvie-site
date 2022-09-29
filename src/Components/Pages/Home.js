import React from "react"
import home_logo from './../../images/sub.home.gif'
import crest from './../../images/cz-red.gif'

import Test from "./Test"

const Home = function() {
    
    return (
        <div className="Home">

            <br></br>
            <div className="body">
                <div className="title">
                    <img src={crest} className="img"/>
                    <span className="title_words">Czech Lessons</span>

                </div><br/>
                <div className="left"> 
                My name is Silvie Opatrná and I am a native Czech speaker. 
                I was born in Prague and grew up in the Czech Republic.
                <br/><br/>
                I have been teaching Czech to private students since 1999 on an individual basis
                 and in small groups. I have been designing lesson plans based on individual student
                  needs and interests and writing handouts to help students with specific grammar 
                  points and to give them additional practice. Teaching is my passion and I love to 
                  share my knowledge of my first language with people.<br/><br/>
                I offer Czech lesson:<br/>
                    <ul>
                        <li>online via Zoom and Skype</li>
                        <li>over the phone</li>
                    </ul>
                <br/>
                My services include:<br/>
                    <ul>
                        <li>translations from Czech to English and English to Czech</li>
                        <li>assisstance with correspondence for those who have Czech relatives and friends</li>
                        <li>teaching strategies of Czech pronounciation for opera singers</li>
                    </ul>
                    <br/>
                In addition to providing individual instruction, I teach Conversational Czech
                courses at the University of Washington Experimental College in Seattle and 
                Seattle Central Community College.<br/><br/>

                </div>

            </div>
        </div>
    )
}

export default Home