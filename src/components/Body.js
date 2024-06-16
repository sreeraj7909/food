import { useEffect, useState } from "react";
import Card from "./Card"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body=()=>{
    const [ListOfRestro,setListOfRestro]=useState([])
    const [searchText,setSearchText]=useState("")
    const [filterForRestro,setFilterForRestro]=useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async ()=>{
        try{
          const data=await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING`)
          
          const json=await data.json()
          
        const cardList=json?.data?.cards
        const cards_id = "restaurant_grid_listing";
        if(cardList===undefined)return <Shimmer/>
        cardList.map((cards)=>{
            if(cards?.card?.card?.id === cards_id){
               const restaturents=cards?.card?.card?.gridElements?.infoWithStyle?.restaurants;
               
               setListOfRestro(restaturents)
               setFilterForRestro(restaturents)
               
            }
        
        }) 
    } catch(error){console.log(error)
        return null
      } 
    }
    if(ListOfRestro.length===0) return <Shimmer/>
    
    return(
        <div className="bg-black w-full ">
            <div className="flex md:mx-28 mx-5  items-center pt-4">
                  <input className="rounded-xl md:h-10 p-2 " type="text" placeholder="Serach" value={searchText} onChange={(e)=>{
                   setSearchText(e.target.value)
                  }}></input>
                  <button className="bg-green-800 p-2 rounded-lg text-white mx-8" onClick={()=>{
                 
                  const searchFilter=filterForRestro.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                  
                  setListOfRestro(searchFilter)
                 

                 
                }} >Search</button>
                  <button className="rounded-lg bg-green-600 text-white p-2 m-2 md:mx-24  mx-3" onClick={()=>{
                  setListOfRestro(filterForRestro.filter(res=>res.info.avgRating>4))
                  }}>Top Rated Restorents</button>
               </div>
             <div className="flex flex-wrap mt-5">
                 {
                    ListOfRestro.map(restaurent=><Link key={restaurent?.info?.id} to={"/restaurent/"+restaurent?.info?.id}><Card  resData={restaurent} /></Link>)
                  
                 }
             </div>
        </div>
    )
}
{/* //<Link key={restaurent?.info?.id} to={"/restaurent/"+restaurent?.info?.id}> <Card  resData={restaurent}/></Link>) */}

export default Body;