import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrap } from "bootstrap";
import { SplitText } from "gsap/all";

//COMPONENTS
import Form from "./form";
import PageStuff from "./PageStuff";

//IMAGES
import interior from '../images/bmw/interior.jpg'
import engine from "../images/bmw/engine.jpg"
import back from "../images/bmw/back.jpg"
// import bgVideo from "../videos/bmw.webm"
import bgVideo from "../videos/audi.webm"

const Audi =()=>{
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

    const text = {
        header: (<h1 id="title">BMW <span className="m"><span className="m"><div className="mLogo"><div className="blue"></div><div className="darkBlue"></div><div className="red"></div></div>M</span>5</span></h1>),
        specs: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nulla ipsum ipsa, repellendus iusto, ullam quos a tempore aspernatur adipisci incidunt enim. Sint facilis eaque qui facere illo minus quia.',
        mark: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed sint vitae rem deserunt eum magnam placeat obcaecati atque aliquam adipisci? Voluptatum modi, error sequi, dolores corrupti similique ipsum autem ipsa voluptatem odit neque exercitationem tempore amet a voluptate hic? Odit reiciendis sunt id ad quibusdam odio ex voluptatibus nulla neque.',
        interior : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nulla ipsum ipsa, repellendus iusto, ullam quos a tempore aspernatur adipisci incidunt enim. Sint facilis eaque qui facere illo minus quia.',
    }

    const images = {
        interior,
        engine,
        back
    }

    const background ={
        bgVideo
    }

    return(
        <PageStuff content={content} text={text} images={images} background={background}/>
    )
}

export default Audi;