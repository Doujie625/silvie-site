import React from "react"
import books_logo from './../../images/sub.books.gif'
import crest from './../../images/cz-red.gif'


const Books = function() {
    
    return (
        <div className="Home">
            <br></br>
            <div className="body">
                <div className="title">
                    <img src={crest} className="img"/>
                    <span className="title_words">Czech Textbooks and Dictionaries</span>
                </div><br/>
                <div className="left"> 
                I use the following two textbooks with most of my beginner students. 
                I highly recommend these books:<br/><br/>

                Title: Čeština hrou (Czech for Fun)<br/>
                Author: Susan Kresin<br/>
                Publisher: McGraw-Hill Primis Custom Publishing<br/>
                ISBN: 0072455470<br/>
                Pages: 566<br/>
                The book is very comprehensive and comes with 2 tapes.<br/><br/>

                Title: New Czech Step by Step<br/>
                Author: Lida Hola<br/>
                Publisher: Akropolis<br/>
                ISBN: 8086903079<br/>
                Pages: 240<br/><br/>

                There is also a workbook that students find helpful.<br/>
                Title: Čeština hrou Pracovní sešit (Czech for Fun Workbook)<br/>
                Author: Susan Kresin, Hope Subak-Kaspar<br/>
                Publisher: McGraw-Hill Primis Custom Publishing<br/>
                ISBN: 0070350132<br/>
                Pages: 212<br/><br/>

                Here is a list of other textbooks for learning the Czech language:<br/><br/>

                {/* insert list1 */}

                Advanced textbooks for learning the Czech language:<br/><br/>

                {/* insert list2 */}

                Czech-English and English-Czech dictionaries:<br/><br/>
                
                {/* insert list3 */}

                Czech travel phrasebooks:<br/><br/>

                {/* insert list4 */}

                Books on strategies for learning a foreign language:<br/><br/>

                {/* insert list5 */}

                Other books:<br/><br/>

                {/* insert list6 */}

                </div>

            </div>
        </div>
    )
}

export default Books