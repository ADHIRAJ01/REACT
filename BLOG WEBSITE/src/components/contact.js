import { Outlet } from "react-router-dom";

function Contact(){
    return (
        <div>
            <h1>THIS IS A CONTACT COMPONENT </h1>
            <Outlet />
            <h1>HERE IS OUR CONTACT COMPONENT , OUTLET ENDS </h1>
        </div>
    )
}
export default Contact;