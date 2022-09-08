import React from "react"
import res_logo from './../../images/sub.resources.gif'
import crest from './../../images/cz-red.gif'


const Resources = function() {

    let openTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }
    
    return (
        <div className="Home">
            <br></br>
            <div className="body">
                <div className="title">
                    <img src={crest} className="img"/>
                    <span className="title_words">Resources on the Internet</span>
                </div><br/>
                <div className="left"> 
                Online Translators
                <br/><br/> 
                <a className="resources" onClick={() => openTab('https://www.deepl.com/translator')}>DeepL Translator</a>
                <br/><br/> 
                <a className="resources" onClick={() => openTab('https://translate.google.com/?hl=en&tab=TT')}>Google Translate</a>
                <br/><br/> 
                <br/><br/> 
                Online Dictionaries
                <br/><br/> 
                <a className="resources" onClick={() => openTab('https://www.slovnik.cz/')}>Slovnik.cz</a>
                <br/><br/> 
                <a className="resources" onClick={() => openTab('https://slovnik.seznam.cz/')}>Seznam.cz Slovník</a>
                <br/><br/> 
                <a className="resources" onClick={() => openTab('http://slovniky.centrum.cz/')}>Centrum.cz Slovník</a>
                <br/><br/> 
                <br/><br/>
                <a className="resources" onClick={() => openTab('https://forvo.com/languages/cs/')}>Forvo</a>: Czech pronunciation Dictionary
                <br/><br/> 
                <a className="resources" onClick={() => openTab('https://langpractice.com/czech/')}>Number Listening Practice</a>
                <br/><br/> 
                <br/><br/> 
                Online resources to accompany the textbook series Čeština Expres 1-4 / Czech Express 1-4 by Lída Holá
                <br/><br/> 
                <a className="resources" onClick={() => openTab('CzechStepByStep.cz')}>Czech Step By Step</a>
                <br/><br/> 
                <a className="resources" onClick={() => openTab('https://www.czechstepbystep.cz/materialy-on-line')}>Materiály online</a>
                <br/><br/> 
                <a className="resources" onClick={() => openTab('https://www.czechstepbystep.cz/en/cestina-expres-1-online-practise')}>Online practice / exercises</a>
                <br/><br/> 
                <a className="resources" onClick={() => openTab('https://www.czechstepbystep.cz/en/kategorie/short-czech-news')}>Short Czech news</a>
                <br/><br/> 
                <br/><br/>
                Online flashcards to build and maintain your vocabulary.
                <br/><br/> 
                <a className="resources" onClick={() => openTab('http://www.czechonlinetutor.com/cz/cesky-online/cestina-expres-1')}>flashcards 1</a>
                <br/><br/> 
                <a className="resources" onClick={() => openTab('http://www.czechonlinetutor.com/cz/cesky-online/cestina-expres-2')}>flashcards 2</a>
                <br/><br/> 
                <a className="resources" onClick={() => openTab('http://www.czechonlinetutor.com/cz/cesky-online/cestina-expres-3')}>flashcards 3</a>


                {/* <ul>
                    <li>www.czech.cz Czech.cz: Official site for the Czech Republic; it 
                        functions as a guide to the country and its people, institutions, 
                        culture, and history.</li>
                    <li>www.czechsite.com Czech site: Travel guide for your trip to Prague 
                        and the Czech Republic. Online accommodation (hotel, hostel) 
                        reservation.</li>
                    <li>www.czech-tourism.com Czech Tourism: Tourism information.</li>
                    <li>www.czech-vacations.com Tatra Travel: This travel agency offers 
                        airfare and travel packages to Prague and other destinations in 
                        Central and Eastern Europe for reasonable prices. I highly 
                        recommend buying plane tickets to Prague from them.</li>
                    <li>www.myczechrepublic.com My Czech Republic: This site is dedicated 
                        to Czech life, culture and travel. It is a source of first-hand 
                        information about the Czech Republic. It offers a guide to Prague 
                        with original articles and sightseeing tours, practical travel 
                        information and tips, personable columns, news, trivia, photos, 
                        active message boards, and more.</li>
                    <li>www.locallingo.com Local Lingo: This is an extensive Czech language 
                        resource including an audio pronunciation guide, grammar overview, 
                        phrases, vocabulary and online exercises. From travel phrases to grammar 
                        instruction and message boards, Local Lingo is a perfect destination for 
                        travelers.</li>
                    <li>www.centraleurope.com/czechtoday EIN News: Czech news, constantly 
                        updated news and information about the Czech Republic.</li>
                    <li>www.atlas.cz Atlas.cz: Czech search engine.</li>
                    <li>www.seznam.cz Seznam.cz: Czech search engine.</li>
                    <li>www.tradenet.cz AA TRADENET Global Trade Information Network: It 
                        provides free useful information about trade opportunities worldwide.</li>
                    <li>www.ctg.cz Czech Travel Guide: This site provides lodging, transportation, 
                        entertainment, sports, and cultural information.</li>
                    <li>www.crr.cz CRR: Center for regional development of the Czech Republic.</li>
                    <li>www.psp.cz Parliament of Czech Republic.</li>
                    <li>www.senat.cz Senate of the Czech Republic.</li>
                    <li>www.hrad.cz Hrad.cz: Office of the Czech President, information on the 
                        Czech President and Prague Castle.</li>
                    <li>www.cuni.cz Charles University: This is the oldest university in Central 
                        Europe.</li>
                    <li>www.cvut.cz Czech Technical University in Prague.</li>
                    <li>www.praguefinedining.cz Zatisi Catering Group: This is one of the leading 
                        fine dining companies in the Czech Republic. It operates three restaurants 
                        in the historic center of Prague in addition to its catering business.</li>
                    <li>www.imagetheatre.cz Image Theater: Image Theatre is a result of the Czech 
                        traditions of Black Theatre, which combines dance, music, and pantomime to 
                        tell an exciting story.</li>
                    <li>www.globebookstore.cz The Globe Bookstore in Prague.</li>
                    <li>www.opera-rkm.cz Prague Opera.</li>
                    <li>lava.ds.arch.tue.nl/gallery/praha/tgehry.html The Dancing Building in Prague.</li>
                    <li>www.prague-tribune.cz The Prague Tribune Magazine.</li>
                    <li>www.praguepost.cz The Prague Post.</li>
                    <li>www.radio.cz Radio Prague: The international service of Czech Radio, international 
                        broadcast station for the Czech Republic, offers Czech news in English, Czech, 
                        German, Spanish, French, and Russian.</li>
                    <li>www.kirjasto.sci.fi/vhavel.htm About Vaclav Havel.</li>
                    <li>users.ox.ac.uk/~tayl0010/transl.html Czech and Slovak literature in English.</li>
                    <li>www2.arts.gla.ac.uk/Slavonic/staff/Czech_literature.html Czech Literature and 
                        the Reading Public: Lecture given at the University of Glasgow. Igor Hajek, 
                        Memorial Conference, 26th November 1995.</li>
                    <li>www2.arts.gla.ac.uk/Slavonic/staff/Holy.html Czech literature since the 1980s.</li>
                    <li>www.oneworld.cz One World International Human Rights Film Festival.</li>
                    <li>www.iffkv.cz Karlovy Vary International Film Festival.</li>
                    <li>www.rootsweb.com/~czewgw Czech Republic Genealogy website.</li>
                    
                </ul> */}

                </div>
                <br/><br/>
            </div>
        </div>
    )

}

export default Resources