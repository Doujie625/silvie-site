import React from "react"
import pron_logo from './../../images/sub.pronunciation.gif'
import crest from './../../images/cz-red.gif'

const Pronounciation = function() {
    
    return (
        <div className="Home">
            <br></br>
            <div className="body">
                <div className="title">
                    <img src={crest} className="img"/>
                    <span className="title_words">Basic Rules of Pronounciation in Czech</span>
                </div><br/>
                <div className="left"> 
                You have probably noticed that Czech pronunciation is rather difficult for an English-speaking person.  
                True, there are a few sounds and clusters of consonants that are quite challenging.  On the other hand, 
                Czech has rules of pronunciation that are very consistent and predictable.  Once you learn the rules, 
                you can depend on them, and from then on, whenever you come across a new word, you will know how to 
                pronounce it.  This is definitely not the case in English.
                <br/><br/>
                Below is a chart of all the letters that you will encounter in Czech, with a guide to the rules of pronunciation.
                <br/><br/> 
                <br/><br/> 

                Insert Chart Here
                <br/><br/> 
                <br/><br/> 
                Do you notice any patterns that repeat in the rules of pronunciation?  Do you notice how the voiced consonants 
                b, d, g, z and ž will change into their unvoiced counterparts p, t, k, s and š when they appear at the end of 
                a word or before an unvoiced consonant?  This is a rule that you can depend on.
                <br/><br/>
                Which syllable is accented in Czech?  This is the easiest rule of all.  In every Czech word, the first syllable 
                is always accented, with one exception.  When there is a one-syllable preposition before the word, then the 
                accent will shift over to the preposition.  So, for example, you have the word “kolo” above, which is bicycle.  
                If I want to say that I am riding on a bicycle, I will say “Jedu na kole.”  The word “na” means “on,” so it is 
                a preposition, and it has only one syllable, so it takes the accent away from the noun.\
                <br/><br/>
                Czech does not have a “schwa” sound.  This is the unclear sound that any English vowel can have when it is in 
                an unaccented syllable.  This is part of what makes English so difficult for foreigners to learn.  But in Czech, 
                every vowel, whether it is accented or not, is pronounced clearly and distinctly.  The only two vowels that sound 
                the same are “i” and “y,” and we will learn some basic rules as we go for when to use which one.


                <br/>
                <br/>
                <br/>
  
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