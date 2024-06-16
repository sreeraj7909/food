import { CDN_URL } from "../utils/constants"


const Card=({resData})=>{
  
  
  
  const {cuisines,avgRating,costForTwo,cloudinaryImageId,name,locality,isOpen,totalRatingsString}=resData?.info
  const {deliveryTime}=resData?.info?.sla
//  const {header,subHeader}=resData?.info?.aggregatedDiscountInfoV3

    return (
          <div className=" w-full md:w-3/12 space-x-24  m-5 right-0 left-0 text-white cursor-pointer hover:border-red-300 justify-center">
               <div className="absolute opacity-90 mx-24">
                   <img className="w-72 h-48 rounded-2xl z-50  " src={CDN_URL+cloudinaryImageId} alt="image"></img>
                  {/* // <h1 className="gradient-to-t from-black font-bold text-white text-xl -mt-10 mx-3">{header} {subHeader}</h1> */}
               </div>
                 <div className="pt-48 mx-2 text-white md:w-48"> 
                      <h1 className="font-bold text-xl ">{name}</h1>
                      <div className="flex">
                        <h3 className="font-bold">⭐{avgRating}</h3>
                        <h3 className="font-bold mx-2">{deliveryTime} mins</h3>
                      </div>
                      <h3 className="overflow-hidden">{cuisines.join(",")}</h3>
                      <h2 className=""> {locality}</h2> 
                      
                  </div>        
          </div>
    )
}
export default Card;