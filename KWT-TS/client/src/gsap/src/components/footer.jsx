import React from "react";
import "../fontello/css/fontello.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrap } from "bootstrap";

const Footer =()=>{
    return(
        <div className="footer col-12">
            <div className="row">
                <div className="col-12 col-md-3 text-center">
                    <h2>DANE OSOBOWE</h2>
                    <div className="data">
                        <p>jakub.kontek05@gmail.com</p>
                        <p>790 839 086</p>
                    </div>
                    <div className="socials col-12">     
                    <div className="icons m-auto">
                        <a className="icon-facebook"/>
                        <a className="icon-instagram"/>
                        <a className="icon-github-circled-alt2" href="https://github.com/K0ntek"/>
                    </div>  
                </div>
                </div>

                <div className="links col-12  col-md-9 m-auto">
                    <div className="row">
                    <div className="videos col-12">
                        <h4>FILMY</h4>
                        <div className="linkItems">
                            <a href="https://www.youtube.com/watch?v=DgqguSG9ZB4">HOME</a>
                            <a href="https://www.youtube.com/watch?v=XuFtFjIcHxY">BMW</a>
                            <a href="https://www.youtube.com/watch?v=0uCzpRL0KHw">MERCEDES</a>
                            <a href="https://www.youtube.com/watch?v=AFeXrG3nvnA">AUDI</a>
                        </div>
                    </div>

                    <div className="images col-12">
                        <h4>ZDJĘCIA</h4>
                        <div className="linkItems">
                            <div className="row">
                            <div className=" col-12 col-md-6 col-lg-3 text-center">
                                <h5>HOME</h5>
                                <div className="linkItem">
                                    <a href="https://www.audi-mediacenter.com/en/the-new-audi-rs-6-avant-the-fourth-generation-of-the-rs-icon-12345/engine-12348"> ENGINE</a>
                                    <a href="https://www.audi-mediacenter.com/en/the-new-audi-rs-6-avant-the-fourth-generation-of-the-rs-icon-12345/engine-12348"> INTERIOR</a>
                                    <a href="https://www.audi-mediacenter.com/en/the-new-audi-rs-6-avant-the-fourth-generation-of-the-rs-icon-12345/engine-12348"> BACKGROUND</a>
                                </div>
                            </div>
                            <div className=" col-12 col-md-6 col-lg-3 text-center">
                                <h5>BMW</h5>
                                <div className="linkItem">
                                    <a href="https://www.audi-mediacenter.com/en/the-new-audi-rs-6-avant-the-fourth-generation-of-the-rs-icon-12345/engine-12348"> ENGINE</a>
                                    <a href="https://www.audi-mediacenter.com/en/the-new-audi-rs-6-avant-the-fourth-generation-of-the-rs-icon-12345/engine-12348"> INTERIOR</a>
                                    <a href="https://www.audi-mediacenter.com/en/the-new-audi-rs-6-avant-the-fourth-generation-of-the-rs-icon-12345/engine-12348"> BACKGROUND</a>
                                </div>
                                </div>
                            <div className=" col-12 col-md-6 col-lg-3 text-center">
                                <h5>MERCEDES</h5>
                                <div className="linkItem">
                                    <a href="https://www.audi-mediacenter.com/en/the-new-audi-rs-6-avant-the-fourth-generation-of-the-rs-icon-12345/engine-12348"> ENGINE</a>
                                    <a href="https://www.audi-mediacenter.com/en/the-new-audi-rs-6-avant-the-fourth-generation-of-the-rs-icon-12345/engine-12348"> INTERIOR</a>
                                    <a href="https://www.audi-mediacenter.com/en/the-new-audi-rs-6-avant-the-fourth-generation-of-the-rs-icon-12345/engine-12348"> BACKGROUND</a>
                                </div>
                                </div>
                            <div className=" col-12 col-md-6 col-lg-3 text-center">
                                <h5>AUDI</h5>
                                <div className="linkItem">
                                    <a href="https://www.audi-mediacenter.com/en/the-new-audi-rs-6-avant-the-fourth-generation-of-the-rs-icon-12345/engine-12348"> ENGINE</a>
                                    <a href="https://www.audi-mediacenter.com/en/the-new-audi-rs-6-avant-the-fourth-generation-of-the-rs-icon-12345/engine-12348"> INTERIOR</a>
                                    <a href="https://www.audi-mediacenter.com/en/the-new-audi-rs-6-avant-the-fourth-generation-of-the-rs-icon-12345/engine-12348"> BACKGROUND</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;