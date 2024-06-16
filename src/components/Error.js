import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    
    return(
        <div className="flex m-auto left-0 right-0">
            <div>
               <img className="md:w-96 md:ml-64 ml-0 md:mt-32 mt-28" src="https://mcdindia.com/wp-content/uploads/2020/04/img-1.png" alt="Error"></img>
             </div>
             <div className="md:ml-32 ">
                 <h1 className=" w-full mt-28 md:mt-52 font-bold text-4xl ">Who moved my Cheeseburger? 😡</h1>
                 <h1 className="text-xl mt-6 text-balance">You’re not lost 🤔. You’re simply seeing this 404 page because the URL you entered doesn’t exist Yet 😥.</h1>
                 
            </div>
            
        </div>
    )
}
export default Error;