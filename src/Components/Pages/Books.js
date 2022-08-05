import React from "react"
import books_logo from './../../images/sub.books.gif'
import silvie from './../../images/Silvie_120-adj-285x.jpg'


const Books = function() {
    
    return (
        <div className="Home">
            <br></br>
            <div className="body">
                <div className="left"> 
                <img src={books_logo} /><br/><br/>
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

                <div className="right">
                (206) 779-0530 <br/>
                Silvie.Opatrna@gmail.com <br/>
                    <div>
                        <img src={silvie} />

                    </div>

                    "I am learning to sing a seven song cycle by Dvorak now. Silvie is helping me with my diction. She explained
                    the difference between using the soft pallet versus using the hard pallet and the correct tongue position and structures of the mouth involved in producing
                    the sounds. Also, she translated the songs
                    word by word and explained the meaning
                    of the lyrics very well.
                    She really has a good sense of poetry.
                    I strongly
                    recommend her."
                <br></br>
                <br></br>
                - Joo-Young Jung,
                DMA voice student
                </div>

            </div>
        </div>
    )
}

export default Books