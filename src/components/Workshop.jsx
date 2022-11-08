import {NavLink, Outlet, useParams} from "react-router-dom";
import {getWorkshop} from "../api.js";

export default function Workshop() {

    let {workID} = useParams();
    // console.log(workID);
    const workshopInfo = getWorkshop(workID)
    return (
        <>
            <h2>{workshopInfo.name}</h2>

            <ul className="session-list">
                {workshopInfo.sessions.map(session => (
                    <li className="session" key={session.id}>
                        <NavLink
                            className={({ isActive }) => isActive ? "session-active" : null}
                            to={session.id}>
                            <p className="session-name">{session.name}</p>
                            <p>
                                {session.speaker.name} | {session.speaker.org}
                            </p>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <Outlet/>
            {/*<p>Workshop session content displays here...</p>*/}
        </>
    );
}