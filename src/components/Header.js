import {LOGO_URL} from "../utils/constants"
const Header=()=>{
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
                </ul>
            </div>
        </div>
    )
}
export default Header;