import {NavLink} from "react-router-dom";
import CreateMovie from "./CreateMovie";


export default function  NavBar () {
    return(

        <div>
            <NavLink to={"/"}> HomePage </NavLink>
            <p>            </p>
            <NavLink to={"/formular"}> Create new Movie  </NavLink>
        </div>

    )
}