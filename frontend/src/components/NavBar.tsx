import {NavLink} from "react-router-dom";


export default function  NavBar () {
    return(

        <div>
            <NavLink to={"/"}> HomePage </NavLink>
            <p>            </p>
            <NavLink to={"/formular"}> Create new Movie  </NavLink>
        </div>

    )
}