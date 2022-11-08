import {useRef} from "react";
import {useNavigate} from "react-router-dom"

export default function Register() {
    const emailRef = useRef(null);

    const fnameRef = useRef(null);
    const lnameRef = useRef(null);
    const navigate =  useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        const user = {
            firstName: fnameRef.current.value,
            lastName: lnameRef.current.value,
            email: emailRef.current.value
        }
        navigate("/confirmation", {state: (user)})
    }

    return (
        <div className="container">
            <h1>Register for SchoolHacks next Workshop</h1>
            <p>
                Make sure to grab your spot for this year's workshop! We love
                technology and consistently work towards being the premier provider of
                workshops and events that interest our students.
            </p>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input required type="text" name="fname" ref={fnameRef}/>
                </label>
                <label>
                    Last Name:
                    <input required type="text" name="lname" ref={lnameRef}/>
                </label>
                <label>
                    Email:
                    <input required type="text" name="email" ref={emailRef}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}