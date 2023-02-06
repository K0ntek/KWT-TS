import React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar =()=>{

    const scroller =()=>{
            let contact = document.querySelector('.form');
            contact.scrollIntoView({behavior: 'smooth'});
        }

        const [active, setActive] = useState("nav__menu");
        const [icon, setIcon] = useState("nav__toggler");
        const navToggle = () => {
          if (active === "nav__menu") {
            setActive("nav__menu nav__active");
          } else setActive("nav__menu");
      
          // Icon Toggler
          if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
          } else setIcon("nav__toggler");
        };

    return(

              <nav className="nav">
                <div onClick={navToggle} className={icon}>
				<div>
					<div className="line item1" id="line"></div>
					<div className="line item2" id="line"></div>
					<div className="line item3" id="line"></div>
				</div>
			</div>
                <ul className={active}>
                <li>
						<Link to={"/"}>STRONA GŁÓWNA</Link>
					</li>
					<li>
						<Link to={"/bmw"}>BMW</Link>
					</li>
					<li>
						<Link to={"/mercedes"}>MERCEDES</Link>
					</li>
                    <li>
						<Link to={"/audi"}>AUDI</Link>
					</li>
					<li id="contactBtn" onClick={scroller}><Link style={{color: "rgb(128, 0, 0)"}}>KONTAKT</Link></li>
            </ul>
              </nav>
    )
}

export default Navbar;