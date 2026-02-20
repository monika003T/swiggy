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
    const {resData}= props;
    const {cloudinaryImageId,name,cuisines,avgRating,sla}=resData;
   
    return(
        <div className='res-card' style={StyleCard}>
            <img className="res-logo" alt='res-logo'
            src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+ cloudinaryImageId }/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}⭐</h4>
            <h5>{sla.deliveryTime} minutes</h5>
        </div>
    )
}
const resList = [
  {
    info: {
      id: "80653",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/6/a669757e-2f1c-4352-9f48-baf75588cc42_80653.JPG",
      cuisines: ["Desserts", "Ice Cream", "Bakery", "Beverages"],
      avgRating: 4.5,
      costForTwo: "₹450 for two",
      sla: { deliveryTime: 30 }
    }
  },
  {
    info: {
      id: "882432",
      name: "Theobroma",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/17/d2ec40ad-a273-47f7-84b7-79cdb618a707_882432.JPG",
      cuisines: ["Bakery", "Desserts", "Beverages"],
      avgRating: 4.6,
      costForTwo: "₹300 for two",
      sla: { deliveryTime: 48 }
    }
  },
  {
    info: {
      id: "84070",
      name: "Gurukripa Restaurant",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/7/1673e5b3-700b-4ba2-a1f5-e76f2c54fb2a_84070 (1).jpg",
      cuisines: ["Thalis", "Indian", "Chinese"],
      avgRating: 4.4,
      costForTwo: "₹250 for two",
      sla: { deliveryTime: 47 }
    }
  },
  {
    info: {
      id: "338727",
      name: "Baskin Robbins",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/24/18c66105-d697-4820-88fb-786f2b589f68_338727.JPG",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.7,
      costForTwo: "₹250 for two",
      sla: { deliveryTime: 24 }
    }
  },
  {
    info: {
      id: "706688",
      name: "Apsara Ice Creams",
      cloudinaryImageId: "393ec6edd1f379895f12c80c13ca1d05",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      costForTwo: "₹150 for two",
      sla: { deliveryTime: 30 }
    }
  },
  {
    info: {
      id: "156145",
      name: "The Good Bowl",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/a7b57969-83b7-46f8-9742-67e8e9d52eba_156145.jpg",
      cuisines: ["Biryani", "North Indian", "Punjabi"],
      avgRating: 4.4,
      costForTwo: "₹400 for two",
      sla: { deliveryTime: 30 }
    }
  },
  {
    info: {
      id: "669093",
      name: "IBACO",
      cloudinaryImageId: "a75b9873d2809fc9c3df51c5c24b11f2",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      costForTwo: "₹250 for two",
      sla: { deliveryTime: 25 }
    }
  },
  {
    info: {
      id: "581971",
      name: "Pizza Hut",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/02f45302-993b-4089-89fd-55ab75d6bfa2_581971.JPG",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      costForTwo: "₹350 for two",
      sla: { deliveryTime: 30 }
    }
  },
  {
    info: {
      id: "303103",
      name: "KFC",
      cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/8/7921f08b-8cb0-4f28-bc3f-344e5ee4bdbe_303103.JPG",
      cuisines: ["Burgers", "Fast Food"],
      avgRating: 4.3,
      costForTwo: "₹400 for two",
      sla: { deliveryTime: 43 }
    }
  }
];

                    
                
const Body=()=>{
    return(
        <div className='body' >
            <div className="search">Search</div>
            <div className='res-container'>
                    
                    {
                        resList.map((restaurant)=>(
                            <ResturantCard key={restaurant.info.id} resData={restaurant.info}/>
                            
                        ))
                    }
                    
                   
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