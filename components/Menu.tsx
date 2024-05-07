import React from "react";
import {createPortal} from "react-dom";

interface MenuProps {
    setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Menu: React.FC<MenuProps> = ({setIsOpenMenu}) => {

    return createPortal(<nav className="menu">


        <a href="#about" onClick={() => setIsOpenMenu(false)}><span>01.</span>About</a>
        <a href="#projects" onClick={() => setIsOpenMenu(false)}><span>02.</span>Projects</a>
        <a href="#contact" onClick={() => setIsOpenMenu(false)}><span>03.</span>Contact</a>

    </nav>, document.body);
}