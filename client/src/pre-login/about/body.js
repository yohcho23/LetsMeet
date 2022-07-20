import { useState } from "react"

import "./body.css"

import pic1 from "../../assets/landingpage/aboutus/meeting.png"
import pic2 from "../../assets/landingpage/aboutus/calendar.png"
import pic3 from "../../assets/landingpage/aboutus/group.png"
import pic4 from "../../assets/landingpage/aboutus/schedule.png"

const Body=()=>{
    const [centerCardDisplay,setCenterCardDisplay] = useState(0)
    const [flip,setFlip] = useState(false)
    const [needChange, setNeedChange] = useState(0)


    const cards = [
        {
            front:"Getting Started",
            back:"Create an account and either create a group or join an existent one",
            img: pic1
        },
        {
            front:"Scheduling a new meeting",
            back:"Create a new meeting. Enter how long the meeting is and a date range that you want to have the meeting between",
            img: pic2           
        },
        {
            front:"Inviting your group members",
            back:"Invite your group members and wait for them to upload their availabilities",
            img: pic3
        },
        {
            front:"Find the best time",
            back:"Once everyone finishes uploading, our algorithm will generate which slot best fit the group's schedule",
            img: pic4
        }
    ]

    const changeSlide=(num)=>{
        if(centerCardDisplay===0 && num===-1)
            return
        if(centerCardDisplay===cards.length-1 && num===1)
            return
        if(!flip){
            setCenterCardDisplay(prevCenterCardDisplay=>prevCenterCardDisplay+num)
            return
        }
        setFlip(false)
        setNeedChange(num)
    }

    const handleNextSlide=()=>{
        setCenterCardDisplay(prevCenterCardDisplay=>prevCenterCardDisplay+needChange)
        setNeedChange(0)
    }

    return(
        <div className="about-page">
            <div className="about-page-howTo">
                <h1>How Does LetsMeet Work?</h1>
                <div className={`about-page-howTo-cardsections`}>
                    <button onClick={()=>{changeSlide(-1)}} className={`about-page-howTo-cardsections-button ${centerCardDisplay===0 && "hide-element"}`}>{"<"}</button>
                    <div 
                        className={
                            `about-page-howTo-cardsections-card 
                            ${centerCardDisplay===0 && "hide-element"}`
                        }
                        onClick={()=>changeSlide(-1)}
                    >
                        {centerCardDisplay>0 && 
                            <div className="about-page-howTo-cardsections-card-front">
                                <h1>{`Step ${centerCardDisplay}:`}</h1>
                                <div>
                                    <img src={cards[centerCardDisplay-1].img}></img>
                                </div>
                                <h2>{cards[centerCardDisplay-1].front}</h2>
                            </div>
                        }
                        
                    </div>
                    <div 
                        className={
                            `about-page-howTo-cardsections-card 
                            ${flip && "about-page-howTo-cardsections-card-flip"}`
                            } 
                        onClick={()=>setFlip(prevFlip=>!prevFlip)}
                        onTransitionEnd={()=>handleNextSlide()}
                    >
                        <div className={`${flip && "about-page-howTo-cardsections-card-isFlippedDisplay"}`}>
                            {flip ? <p>{cards[centerCardDisplay].back}</p> : 
                                <div className="about-page-howTo-cardsections-card-front">
                                    <h1>{`Step ${centerCardDisplay+1}:`}</h1>
                                    <div>
                                        <img src={cards[centerCardDisplay].img}></img>
                                    </div>
                                    <h2>{cards[centerCardDisplay].front}</h2>
                                    <p>click to flip</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div 
                        className={
                            `about-page-howTo-cardsections-card
                            ${centerCardDisplay===cards.length-1 && "hide-element"}`
                            }
                        onClick={()=>changeSlide(1)}
                        >
                        {centerCardDisplay<cards.length-1 && 
                            <div className="about-page-howTo-cardsections-card-front">
                                <h1>{`Step ${centerCardDisplay+2}:`}</h1>
                                <div>
                                    <img src={cards[centerCardDisplay+1].img}></img>
                                </div>
                                <h2>{cards[centerCardDisplay+1].front}</h2>
                            </div>
                        }
                    </div>
                    <button onClick={()=>{changeSlide(1)}} className={`about-page-howTo-cardsections-button ${centerCardDisplay===cards.length-1 && "hide-element"}`}>{">"}</button>
                </div>
                <div className="about-page-howTo-bubblesection">
                    <div className={`about-page-howTo-bubblesection-bubble ${centerCardDisplay===0 && "about-page-howTo-bubblesection-bbuble-center"}`}></div>
                    <div className={`about-page-howTo-bubblesection-bubble ${centerCardDisplay===1 && "about-page-howTo-bubblesection-bbuble-center"}`}></div>
                    <div className={`about-page-howTo-bubblesection-bubble ${centerCardDisplay===2 && "about-page-howTo-bubblesection-bbuble-center"}`}></div>
                    <div className={`about-page-howTo-bubblesection-bubble ${centerCardDisplay===3 && "about-page-howTo-bubblesection-bbuble-center"}`}></div>
                </div>
            </div>
        </div>
    )
}

export default Body