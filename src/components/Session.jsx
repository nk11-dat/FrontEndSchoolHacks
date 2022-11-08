import {getSession} from "../api.js";
import {useParams} from "react-router-dom";

export default function Session() {
    const {workID, sessionId} = useParams();
    console.log(workID);
    console.log(sessionId);
    const {name, desc, speaker} = getSession(sessionId, workID);

    return (
        <>
            <h3>{name}</h3>
            <p>{desc}</p>
            <h4>{speaker.name}</h4>
            <span>{speaker.title} at {speaker.org}</span>
            <p>{speaker.bio}</p>
        </>
    );
}