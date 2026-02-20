
import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer"

const Body=()=>{
    
    //usestate hooks
    const [listOfRestaurants,setListOfRestaurant]=useState([])
    
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
      const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7287381&lng=75.80759929999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        

        const json=await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
  if(listOfRestaurants===0){
    return <Shimmer />
    
  }
  

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