import { useContext, useRef } from "react";
import{useNavigate} from "react-router-dom";
export default function Login(){

const [user, setUser] = useContext(userContext);
const usernameInput = useRef();
const passwordInput = useRef();
const navigate = useNavigate();

    const userInput = {
        username: usernameInput.current.value,
        password: password.current.value,
    };



    return(
        <div>



        </div>
    )
}