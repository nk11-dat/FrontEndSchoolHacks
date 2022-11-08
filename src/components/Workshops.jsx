import {getWorkshops} from "../api.js";
import {NavLink, Outlet} from "react-router-dom";

export default function Workshops() {
    let data = getWorkshops();
    return (
        <div className="container">
            <h1>Workshop Categories</h1>
            <ul className="workshops">
                {data.map((workshop) => (
                    <li key={workshop.id}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "workshop-active" : null
                            }
                            to={workshop.id}
                        >
                            {workshop.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet/>
        </div>
    );
}