import React from "react"
import ind_logo from './../../images/sub.individual.gif'
import crest from './../../images/cz-red.gif'
import { book_data } from './../Data/Book_data'


const Individual = function() {

    let openTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="Home">

            <br></br>
            <div className="body">
                <div className="title">
                    <img src={crest} className="img"/>
                    <span className="title_words">Individual Czech Lessons</span>
                </div><br/>
                <div className="left"> 
                I offer Czech lesson:<br/>
                    <ul>
                        <li>online via Zoom and Skype</li>
                        <li>over the phone</li>
                    </ul>
                <br/>
                Before I start working with a student, I send her an email that includes the following:<br/>
                    <ul>
                        <li>The Learning Style Inventory that determines the student's natural learning style</li> 
                        <li>Common characteristics of each learning style</li>    
                        <li>Study skills and strategies for each learning style</li>    
                        <li>A list of study skills and learning strategies for studying the Czech language</li>    
                    </ul>
                <br/>         
                As I work with the student, we further discuss various ways and strategies to study pronunciation, 
                vocabulary, and grammar. Since every student learns differently, the key is to find what works 
                for each individual student.
                <br/><br/>

                When I work with a student on Zoom and Skype, I type notes (words, phrases, sentences, and grammar 
                explanations) in the chat so the student can hear and see what I say in real time. After class, 
                I send the class notes as well as homework and any appropriate handouts to the student.
                <br/><br/>
                Based on the student’s request, I can record the class so that the student can view it again. This 
                is particularly useful when we work on Czech sounds, verbal accent, and pronunciation.
                <br/><br/>
                Whether you want to speak Czech when you travel to the Czech Republic, or you want to communicate with 
                your partner, relatives, and friends, I tailor lessons to your needs and interests.
                <br/><br/>
                Classes are interactive and fun. I focus on conversational Czech and developing listening and speaking skills. 
                I spend a lot of time practicing pronunciation with my students so they feel confident speaking. We talk about 
                various topics. I write up dialogues that serve as an inspiration to talk. We usually practice pronunciation, 
                conversation, vocabulary, sentence structure, and grammar in every session.
                <br/><br/>
                Students gain confidence in speaking with native Czech speakers when they visit the Czech Republic. They 
                learn the proper pronunciation, vocabulary and grammar that enable them to carry on a conversation. They 
                get a solid overview of language structure and are able to converse on many subjects.
                <br/><br/>
                I greatly enjoy working with people on an individual basis and in small groups. Teaching is my passion and \
                I love to share my knowledge of my first language with people.

                </div>
            </div>            
            <br/>
            <br/>
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
                                        <div>{book.subtitle}</div>
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
                                        <div>{book.subtitle}</div>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>

        </div>
    )
}


export default Individual