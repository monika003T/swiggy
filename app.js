import React from 'react';
import ReactDOM from "react-dom/client";
const StyleCard={
    backgroundColor:"#f0f0f0",
}
const Header=()=>{
    return(
        <div className='header'>
            <div>
                <img className='logo' height='100px' width='100px' src='https://static.vecteezy.com/system/resources/previews/011/406/936/large_2x/food-signal-online-food-ordering-logo-design-order-food-on-internet-restaurant-cafe-meals-delivery-online-free-vector.jpg'/>
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
const ResturantCard=(props)=>{
    const {resName, cuisine,rating,delivery}= props
    return(
        <div className='res-card' style={StyleCard}>
            <img className="res-logo" alt='res-logo'
            src='https://purendesi.in/wp-content/uploads/2024/12/Andhra-Style-Chicken-Biryani-500x500.jpg'/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h5>{delivery}</h5>
        </div>
    )
}
const Body=()=>{
    return(
        <div className='body' >
            <div className="search">Search</div>
            <div className='res-container'>
                    <ResturantCard resName="Meghana Foods" cuisine="Biryani, Indian, Asian" rating="4.4" delivery="38 min"/>
                    <ResturantCard  resName="Burger Farms" cuisine="Burger, Rolls" rating ="4.5" delivery= "12 min"/>
                   
                   
            </div>
           
        </div>
    );
};
const AppLayout=()=>{
    return(
        <div className='app'>
             <Header />
          <Body />
        </div>
       
    )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);