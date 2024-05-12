import React from "react";
import {createPortal} from "react-dom";

interface MenuProps {
    setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Menu: React.FC<MenuProps> = ({setIsOpenMenu}) => {

    return createPortal(<nav className="menu">


        <a href="#parcours" onClick={() => setIsOpenMenu(false)}><span>01.</span>Parcours</a>
        <a href="#projects" onClick={() => setIsOpenMenu(false)}><span>02.</span>Projets</a>
        <a href="#footer" onClick={() => setIsOpenMenu(false)}><span>03.</span>Contact</a>

    </nav>, document.body);
}