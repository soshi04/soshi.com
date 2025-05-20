import React from "react";
import { Link } from "react-router-dom";

type NavBarProps = {
    currmode : number;
    toggleMode : () => void;
}

function NavBar({ currmode, toggleMode }: NavBarProps){
    return(

        <div>
            <span>this is the navbar</span>
            <button onClick={toggleMode}>
            Mode: {currmode === 0 ? "Dark" : currmode === 1 ? "Light" : "Cream"}
            </button>
        </div>
    )
}

export default NavBar
