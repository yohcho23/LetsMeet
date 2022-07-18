import { Link } from "react-router-dom";
import { AnimationOnScroll } from 'react-animation-on-scroll';


import initialimg from "../../assets/landingpage/initial3.jpg"

import "./body.css"
import "animate.css/animate.min.css";


const Body=()=>{
    return(
        <div className="landing-page">
            <div className="landing-page-section-1">
                <img src={initialimg} alt="initial"></img>
                <AnimationOnScroll duration={0.5} animatePreScroll={false} animateIn="animate__fadeInUp">
                    <div>
                        <h1>LetsMeet:</h1>
                        <p>A Modern Solution for A Modern Problem</p>
                    </div>
                </AnimationOnScroll>
            </div>
            <div className="landing-page-section-2">
                <AnimationOnScroll className="landing-page-section-2-content" duration={0.75} animateIn="animate__fadeInDown">
                    <h1>Addressing one of modern society's persistent challenges: <br></br>Scheduling Meetings</h1>
                    <p>
                        Missing meetings because they just keep getting scheduled at the worst times?<br></br>
                        Struggling with scheduling a meeting at the "best" time?<br></br> <br></br>
                        Introducing, LetsMeet: The simple solution to all your problems.
                    </p>
                </AnimationOnScroll>
            </div>
            <div className="landing-page-section-3">
                <AnimationOnScroll className="landing-page-section-3-content" duration={0.5} animateIn="animate__fadeInLeft">
                    <h1>So what exactly is LetsMeet?</h1>
                    <p>
                        In a nutshell, LetsMeet is a meeting scheduling application. Its a platform for users
                        to easily organize and schedule meetings at the best time.
                    </p>
                    <Link to={"/about"}>How does it work?</Link>
                </AnimationOnScroll> 
            </div>
            <div className="landing-page-section-4">

            </div>
        </div>
    )
}

export default Body;