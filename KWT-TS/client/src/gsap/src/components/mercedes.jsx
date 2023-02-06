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
import interior from '../images/mercedes/interior.jpeg'
import engine from "../images/mercedes/engine.jpg"
import back from "../images/mercedes/back.jpg"
// import bgVideo from "../videos/mercedes.webm"
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
        header: (<h1 id="title" className="mercedesTitle"><span className="amgLogo"><div className="amgLines"><div className="amg amg1"></div><div className="amg amg2"></div><div className="amg amg3"></div><div className="amg amg4"></div><div className="amg amg5"></div></div>AMG</span> <span className="m"> GT63S</span></h1>),
        specs: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nulla ipsum ipsa, repellendus iusto, ullam quos a tempore aspernatur adipisci incidunt enim. Sint facilis eaque qui facere illo minus quia.',
        mark: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed sint vitae rem deserunt eum magnam placeat obcaecati atque aliquam adipisci? Voluptatum modi, error sequi, dolores corrupti similique ipsum autem ipsa voluptatem odit neque exercitationem tempore amet a voluptate hic? Odit reiciendis sunt id ad quibusdam odio ex voluptatibus nulla neque.',
        interior : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nulla ipsum ipsa, repellendus iusto, ullam quos a tempore aspernatur adipisci incidunt enim. Sint facilis eaque qui facere illo minus quia.',
    }

    const images = {
        interior,
        engine,
        back,
    }

    const background ={
        bgVideo
    }

    return(
        <PageStuff content={content} text={text} images={images} background={background}/>
    )
}

export default Audi;