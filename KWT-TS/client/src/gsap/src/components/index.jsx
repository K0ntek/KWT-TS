import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrap } from "bootstrap";

// import bgVideo from '../videos/bgVideo.mp4'
import bgVideo from "../videos/audi.webm"

const Index =()=>{

    const content=[
        {
            title: 'lorem10',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et ipsa distinctio fugit nemo officiis quibusdam maiores rerum esse reprehenderit atque maxime,'
        },
        {
            title: 'lorem10',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et ipsa distinctio fugit nemo officiis quibusdam maiores rerum esse reprehenderit atque maxime, '
        },
        {
            title: 'lorem10',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et ipsa distinctio fugit nemo officiis quibusdam maiores rerum esse reprehenderit atque maxime,'
        },
        {
            title: 'lorem10',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum et ipsa distinctio fugit nemo officiis quibusdam maiores rerum esse reprehenderit atque maxime, '
        },
    ]

    useEffect(()=>{
        gsap.fromTo('.title', {x:'100%', opacity:0}, {x:0, opacity:1, duration:1})
        gsap.fromTo('.contentLine, .contentText ', {y:'100%', opacity:0}, {y:0, opacity:1, duration:1, stagger:.2, ease: 'easeInOut',scrollTrigger:{trigger:'.contentLine, .contentText ', start:'top 90%'}})
        gsap.fromTo('.circle', {y:'50px', opacity:.7, boxShadow:'none'}, {y:0, opacity:1, duration:1, delay:1, stagger:.2, boxShadow:'0px 0px 40px 2px rgb(255, 0, 43)'})
    },[])

    return(
        <>
        <div className="main">
            <div className="row">
            <div className="col-12">
            <div className="video-bg">
                <video loop autoPlay muted id="bg-video" className="video">
                    <source src={bgVideo} type="video/mp4"/>
                </video>
                <div className="iContent col-12">
                        <div className="container container-fluid">
                            <div className="contentElements">
                            {content.map((element)=>{
                                    return(
                                        <div className="contentElement">
                                            <div className="contentLine">
                                                <div className="circle indexBg"></div>
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
                </div>
            </div>
        <div className="indexTitle">
            <h1>TYTUŁ STRONY</h1>
            <button id="infoBtn"> Dowiedz się więcej</button></div>
            </div>

            <div className="about carBack">
            <div className="col-7 m-auto">
                <h2>O NAS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatibus ipsa quos earum pariatur, perferendis officiis, ipsum sapiente explicabo porro vero temporibus iusto harum autem. Officiis repellat, aliquam nulla sit dignissimos voluptatum error aperiam in officia accusantium, earum voluptas minima quae! Sapiente dicta iste, debitis mollitia earum suscipit beatae consectetur.</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Index;