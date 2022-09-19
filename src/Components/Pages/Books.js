import React from "react"
import books_logo from './../../images/sub.books.gif'
import crest from './../../images/cz-red.gif'
import { book_data } from './../Data/Book_data'
import { Link, useLinkClickHandler } from "react-router-dom"

const Books = function() {
    
    return (
        <div className="Home">
            <br></br>
            <div className="body">
                <div className="title">
                    <img src={crest} className="img"/>
                    <span className="title_words">Books</span>
                </div><br/>
                <div className="left"> 
                I use the following series of textbooks with most of my students:
                <br/><br/>
                <div className="book_item">
                    {book_data.map((book) => {
                        if (book.id <= 3) 
                        return (
                            <div className="book" href={book.url}>
                                <img className="book_image" src={book.image} />
                                <div>{book.title}</div>
                            </div>
                        )
                    })}
                </div>
                <br/><br/>
                <br/><br/>

                I also recommend
                <br/><br/>

                {book_data.map((book) => {
                    if (book.id > 3 && book.id < 6)
                    return (
                        <div href={book.url}>{book.title} by {book.author}
                            <img className="book_image" src={book.image} />
                        </div>
                    )
                })}

                <br/><br/>
                <br/><br/>
                Česky krok za krokem 1-2 / Czech Step by Step 1-2 by Lída Holá
                <br/><br/>
                <br/><br/>
                Adapted/simplified Czech classics and other Czech books
                <br/><br/>
                Josef Čapek: O pejskovi a kočičce
                <br/><br/>
                adapted by Silvie Převrátilová and Petra Bulejčíková
                <br/><br/>
                <br/>
                Pražské legendy
                <br/>
                adapted by Lída Holá
                <br/><br/>
                Jan Neruda: Povídky malostranské
                <br/>
                adapted by Lída Holá
                <br/><br/>
                Brněnské legendy
                <br/>
                adapted by Martina Trchová
                <br/><br/>
                <br/><br/>
                Books on strategies for learning a foreign language
                <br/><br/>
                Fluent Forever: How to Learn Any Language Fast and Never Forget It
                <br/>
                by Gabriel Wyner
                <br/><br/>
                Becoming Fluent: How Cognitive Science Can Help Adults Learn a Foreign Language
                <br/>
                by Richard Roberts and Roger Kreuz
                <br/><br/>
                Fluent in 3 Months: How Anyone at Any Age Can Learn to Speak Any Language from Anywhere in the World
                <br/>
                by Benny Lewis 
                <br/><br/>
                Make It Stick: The Science of Successful Learning
                <br/>
                by Brown, Peter C.
                <br/><br/>
                Moonwalking with Einstein: The Art and Science of Remembering Everything
                <br/>
                by Joshua Foer
    
                {/* I highly recommend these books:<br/><br/>

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
 */}
                {/* insert list1 */}

                {/* Advanced textbooks for learning the Czech language:<br/><br/> */}

                {/* insert list2 */}

                {/* Czech-English and English-Czech dictionaries:<br/><br/> */}
                
                {/* insert list3 */}

                {/* Czech travel phrasebooks:<br/><br/> */}

                {/* insert list4 */}

                {/* Books on strategies for learning a foreign language:<br/><br/> */}

                {/* insert list5 */}

                {/* Other books:<br/><br/> */}

                {/* insert list6 */}

                </div>
            </div>
            <br/><br/>
        </div>
    )
}

export default Books