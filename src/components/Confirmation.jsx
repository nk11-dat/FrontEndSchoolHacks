import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export default function Confirmation() {
    const location = useLocation();
    console.log(location);

    // useEffect(() => {
    //     ga('Send', 'preview');
    // }, [location])
    return (
        <div className="container">
            <h1>Thank You!</h1>
            <p>{location.state.firstName} {location.state.lastName} you're now registered for SchoolHacks.</p>
            <p>We've sent more details to <strong>{location.state.email}</strong></p>
        </div>
    );
}