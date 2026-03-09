
import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer"

const Body=()=>{
    
    //usestate hooks
    const [listOfRestaurants,setListOfRestaurant]=useState([]);
    const [filteredResList,setFilteredRestaurants]=useState([]);

    // usestate hook for search text
    const [searchText,setSearchText]=useState("");

    //Whenever state variable changes,
    //  react triggers a reconciliation cycle
    //  and compares the new virtual DOM with the previous one.
    //  If there are differences, React updates the actual DOM accordingly.
    //  This process is efficient and ensures that only the necessary parts of the UI are re-rendered, resulting in a smooth user experience.
    console.log("Body rendered");
    
    useEffect(()=>{ fetchData(); },[]); const fetchData=async()=>{ const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7287381&lng=75.80759929999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

  const json = await data.json();
  console.log(json);

  setListOfRestaurant(
    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[]
  );
  setFilteredRestaurants(
    json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[]
  );

};
    //conditional rendering
  
  

    return listOfRestaurants.length===0 ? <Shimmer />:(
        
        <div className='body' >

            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search for restaurant, cuisine or a dish" 
                    value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button onClick={( )=>{
                        const filteredResList=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase() ))
                        
                        setFilteredRestaurants(filteredResList);
                    }} 
                    
                     className="search-btn"
                    >Search</button>

                </div>


                <button className="filter-btn" 
                onClick={()=>{
                    const filteredResList=listOfRestaurants.filter((res)=>res.info.avgRating>4.5)
                    console.log("clicked")

                    console.log(listOfRestaurants);
                    
                    setFilteredRestaurants(filteredResList);
                }}
                >Top rated restaurants</button>
            </div>
            <div className='res-container'>
                    
                    {
                        filteredResList.map((restaurant)=>(
                            <RestaurantCard key={restaurant.info.id} resData={restaurant.info}/>
                            
                        ))
                    }
            </div>
        </div>
    );
};

export default Body;