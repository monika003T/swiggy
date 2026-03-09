import {LOGO_URL} from "../utils/constants"
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";

const Header=()=>{
    console.log("Header rendered");
    const [isLoggedIn,setIsLoggedIn]=useState("Login");

    useEffect(()=>{
        console.log("useEffect called")
    })
    return(
        <div className='header'>
            <div>
                <img className='logo' height='100px' width='100px' src={LOGO_URL}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li >Home</li>
                    <li>Cart</li>
                    <li> <Link to="/about">About us</Link></li>
                    <li>Cart</li>
                    <li><Link to="/contact">Contact</Link></li>
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