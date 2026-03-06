import {LOGO_URL} from "../utils/constants"
import {useState} from "react";
const Header=()=>{
    
    const [isLoggedIn,setIsLoggedIn]=useState("Login");
    return(
        <div className='header'>
            <div>
                <img className='logo' height='100px' width='100px' src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About us</li>
                    <li>Cart</li>
                    <button className="login-btn" 
                    onClick={()=>{
                        isLoggedIn==="Login"? setIsLoggedIn("Logout"): setIsLoggedIn("Login");
                        console.log(isLoggedIn);

                    }}>{isLoggedIn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;