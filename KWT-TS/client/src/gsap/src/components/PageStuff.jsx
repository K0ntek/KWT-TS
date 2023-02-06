import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrap } from "bootstrap";


const PageStuff = ({content, images, text, background}) => {
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo('.nav,.buttons', {y:'-100%', opacity:0}, {y:0, opacity:1, duration:.5, stagger:.2})
    gsap.fromTo('.title', {x:'100%', opacity:0}, {x:0, opacity:1, duration:1})
    gsap.fromTo('.contentLine, .contentText ', {y:'100%', opacity:0}, {y:0, opacity:1, duration:.7, stagger:.2, ease: 'easeInOut',scrollTrigger:{trigger:'.contentLine, .contentText ', start:'top 90%'}})
    gsap.fromTo('.circle', {y:'50px', opacity:.7, boxShadow:'none'}, {y:0, opacity:1, duration:.7, delay:.8, stagger:.2, boxShadow:'0px 0px 20px 0px rgb(255, 136, 0)'})
    gsap.fromTo('.specsContent', {y:'100px', opacity:0}, {y:0, opacity:1, duration:.7, ease: 'easeInOut',scrollTrigger:{trigger:'.contentLine, .contentText ', start:'top 60%'}})
    gsap.fromTo('.specsImage', {x:'300px', opacity:0}, {x:0, opacity:1, duration:.7, ease: 'easeInOut',scrollTrigger:{trigger:'.contentLine, .contentText ', start:'top 60%'}})
    gsap.fromTo('.interiorContent', {y:'100px', opacity:0}, {y:0, opacity:1, duration:.7, ease: 'easeInOut',scrollTrigger:{trigger:'.interiorContent ', start:'top 80%'}})
    gsap.fromTo('.interiorImage', {x:'-300px', opacity:0}, {x:0, opacity:1, duration:.7, ease: 'easeInOut',scrollTrigger:{trigger:'.interiorContent ', start:'top 80%'}})

  },[])


  const scroller = () => {
    let info = document.querySelector('.specs');
    info.scrollIntoView({behavior: "smooth"});
  }

  return(
    // <div className="container container-fluid">
        <div className="header">
                <div className="back">
                <div className="car-video-bg"> 
                    <div className="car-video">
                    <video loop autoPlay muted id="bg-video" style={{width:'100%'}}>
                            <source src={background.bgVideo} type="video/webm" className="video" />
                        </video> 
                    </div>
                    <div className="desktop-title">
                        {text.header}
                        <button id="infoBtn" onClick={scroller}> Dowiedz się więcej</button>
                    </div>
                    {/* <iframe src="https://www.youtube.com/embed/jwC061bKG2Y?autoplay=1&mute=1" frameborder="0" allow='autoplay' allowfullscreen className="video"></iframe> */}
                </div>
               </div>
            <div className="content">
            <div className="mobile-title">
                        {text.header}
                        <button id="infoBtn" onClick={scroller}> Dowiedz się więcej</button>
                    </div>
                <div className="container container-fluid">
                    <div className="contentElements">
                    {content.map((element)=>{
                            return(
                                <div className="contentElement">
                                    <div className="contentLine">
                                        <div className="circle"></div>
                                    </div>
                                    <div className="contentText">
                                        <h2>{element.title}</h2>
                                        <p>{element.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
                <div className="specs">
                    <div className="row">
                        <div className="specsContent col-md-7 m-auto py-4">
                            <h2>SPECYFIKACJA</h2>
                            <p className="col-10 m-auto">{text.specs}</p>
                        </div>
                        <div className="specsImage col-md-5 overflow-hidden">
                            <img src={images.engine} className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="carBack col-12" style={{background: `linear-gradient(90deg, rgb(19, 19, 19), rgba(138, 94, 0, 0.25)),url(${images.back})`,
                                                        backgroundAttachment: 'fixed',
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: 'cover'}}>
                    <div className=" col-10 col-lg-6 m-auto">
                        <h2>O MARCE</h2>
                        <p>{text.mark}</p>
                   </div>
                </div>

                <div className="interior">
                    <div className="row">
                        <div className="interiorImage col-md-5">
                            <img src={images.interior} className="img-fluid col-12"/>
                        </div>
                        <div className="interiorContent col-md-7 m-auto py-4">
                            <h2>WNĘTRZE</h2>
                            <p className="col-10 m-auto">{text.interior}</p>
                        </div>
                    </div>
                </div>
    </div>
//  </div>
)
}

export default PageStuff;