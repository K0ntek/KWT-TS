import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { bootstrap } from "bootstrap";

const Form =()=>{
    return(
        <>
        <div className="form">
        <div className="contact col-md-8 col-xl-6 m-auto">
            <h2>KONTAKT</h2>

                    <div className="input">
                        <input type="text" placeholder="imię" />
                        {/* <span>imię</span> */}
                    </div>

                    <div className="input">
                        <input type="email" placeholder="e-mail" />
                        {/* <span>e-mail</span> */}
                    </div>
                    <div className="input">
                    <textarea placeholder="wiadomość"/><br/>
                        {/* <span>wiadomość</span> */}
                    </div>
                    <input type="button" value ="Wyślij" />
                </div>       
        </div>
        </>
    )
}
export default Form;