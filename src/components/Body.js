import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";




const Body=()=>{
    
    //usestate hooks
    const [listOfRestaurants,setListOfRestaurant]=useState(resList)
    console.log(useState);

    return(
        <div className='body' >
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.5)
                    console.log("clicked")
                    console.log(listOfRestaurants);
                    setListOfRestaurant(filteredList);
                }}
                >Top rated restaurants</button>
            </div>
            <div className='res-container'>
                    
                    {
                        listOfRestaurants.map((restaurant)=>(
                            <RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>
                            
                        ))
                    }
            </div>
        </div>
    );
};
export default Body;