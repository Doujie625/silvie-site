import React from "react"
import books_logo from './../../images/sub.books.gif'
import crest from './../../images/cz-red.gif'
import { book_data } from './../Data/Book_data'
import { Link, useLinkClickHandler } from "react-router-dom"

const Books = function() {


    let openTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }
    
    return (
        <div className="Home">
            <br></br>
            <div className="body">
                <div className="title">
                    <img src={crest} className="img"/>
                    <span className="title_words">Books</span>
                </div><br/>
                <div className="left"> 
                    <div className="stripe">
                        I use the following series of textbooks with most of my students:
                    </div>
                    <div className="book_item">
                        {book_data.map((book) => {
                            if (book.id <= 3) 
                            return (

                                <div key={book.id} className="book" onClick={() => openTab(book.url)}>
                                    <a>
                                        <img className="book_image" src={book.image} />
                                        <div>{book.title}</div>
                                        <div>{book.author}</div>
                                        {/* <div>{book.subtitle}</div> */}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                    <div className="stripe">
                        I also recommend
                    </div>
                    <div className="book_item">
                    {book_data.map((book) => {
                            if (book.id > 3 && book.id < 8)
                            return (
                                <div key={book.id} className="book" onClick={() => openTab(book.url)}>
                                    <a>
                                        <img className="book_image" src={book.image} />
                                        <div>{book.title}</div>
                                        {/* <div>{book.subtitle}</div> */}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                    <div className="stripe">
                    Adapted/simplified Czech classics and other Czech books
                    </div>
                    <div className="book_item">
                    {book_data.map((book) => {
                            if (book.id > 7 && book.id < 13)
                            return (
                                <div key={book.id} className="book" onClick={() => openTab(book.url)}>
                                    <a>
                                        <img className="book_image" src={book.image} />
                                        <div>{book.title}</div>
                                        <div>{book.author}</div>
                                        {/* <div>{book.subtitle}</div> */}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                    <div className="stripe">
                    Books on strategies for learning a foreign language
                    </div>
                    <div className="book_item">
                    {book_data.map((book) => {
                            if (book.id > 12 && book.id < 18)
                            return (
                                <div key={book.id} className="book" onClick={() => openTab(book.url)}>
                                    <a>
                                        <img className="book_image" src={book.image} />
                                        <div>{book.title}</div>
                                        <div>{book.author}</div>
                                        {/* <div>{book.subtitle}</div> */}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <br/><br/>
        </div>
    )
}

export default Books