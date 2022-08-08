import React from "react"
import pron_logo from './../../images/sub.pronunciation.gif'
import silvie from './../../images/Silvie_184-adj-285x.jpg'

const Pronounciation = function() {
    
    return (
        <div className="Home">
            <br></br>
            <div className="body">
                <div className="left"> 
                    <img src={pron_logo} /><br/><br/>
                    The Czech Alphabet
                <br/>
                {/* Insert Table Componenet Here */}<br/>
                The Stress or accent falls on the first syllable.<br/>
                Američan (American man)<br/>
                Američanka (American woman)<br/>
                Češka (Czech woman)<br/>
                Praha (Prague)<br/><br/>

                One-syllable prepositions always carry the stress.<br/>
                do Prahy (to Prague)<br/>
                na letišti (at the airport)<br/><br/>

                Vowels<br/>
                short: a, e, i, y, o, u<br/>
                long: á, é, í, ý, ó, ú, ů<br/><br/>

                Diphthongs = double vowels<br/>
                ou, au, eu<br/><br/>
                
                Consonants<br/>
                b, c, č, d, ď, f, g, h, ch, j, k, l, m, n, ň, p, q, r, ř, s, š, t, ť, v, w, x, z, ž<br/>
                <br/><br/>

                </div>

            </div>
        </div>
    )
}


export default Pronounciation