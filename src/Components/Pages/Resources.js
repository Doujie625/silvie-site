import React from "react"
import res_logo from './../../images/sub.resources.gif'
import crest from './../../images/cz-red.gif'
import { resource_data } from "../Data/resource_data"

const Resources = function() {

    let openTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }
    console.log(resource_data[10].image)
    return (

        <div className="Home">
            <br></br>
            <div className="body">
                <div className="title">
                    <img src={crest} className="img"/>
                    <span className="title_words">Resources on the Internet</span>
                </div><br/>
                <div className="left"> 

                <div className="stripe">
                Online Translators
                </div>
                <div className="book_item">
                    {resource_data.map((resource) => {
                        if (resource.id < 3) 
                        return (
                            <div key={resource.id} className="book" onClick={() => openTab(resource.url)}>
                                <img className="book_image" src={resource.image} />
                                <a className="resource_a_tag">{resource.name}
                                </a>
                            </div>
                        )
                    })}
                </div>

                <div className="stripe">
                Online Dictionaries
                </div>
                <div className="book_item">
                    {resource_data.map((resource) => {
                        if (resource.id > 2 && resource.id < 8) 
                        return (
                            <div key={resource.id} className="book" onClick={() => openTab(resource.url)}>
                                <img className="resource_image" src={resource.image} />
                                <a className="resource_a_tag">{resource.name}
                                </a>
                            </div>
                        )
                    })}
                </div>
                <div className="stripe">
                Online resources to accompany the textbook series Čeština Expres 1-4 / Czech Express 1-4 by Lída Holá
                </div>
                <div className="book_item">
                    {resource_data.map((resource) => {
                        if (resource.id > 7 && resource.id < 9) 
                        return (
                            <div key={resource.id} className="book" onClick={() => openTab(resource.url)}>
                                {/* <a className="resource_a_tag">{resource.name} */}
                                <img className="resource_image" src={resource.image} />
                                {/* </a> */}
                            </div>
                        )
                        else if (resource.id > 8 && resource.id < 11)
                        return (
                            <div key={resource.id} className="book" onClick={() => openTab(resource.url)}>
                                <div className="yellow_button">
                                <a className="resource_a_tag">{resource.name}
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="stripe">
                Online flashcards to build and maintain your vocabulary.
                </div>

                <div className="book_item">
                    {resource_data.map((resource) => {
                        if (resource.id > 10 && resource.id < 14) 
                        return (
                            <div key={resource.id} className="book" onClick={() => openTab(resource.url)}>
                                
                                <img className="flash" src={resource.image} />
                                <a>{resource.name}
                                </a>
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
        </div>
    )

}

export default Resources