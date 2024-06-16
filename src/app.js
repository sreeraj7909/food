import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Error from "./components/Error"
import Footer from "./components/Footer"
import RestroMenu from "./components/Restromenu"
import About from "./components/About"
import {Provider} from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
const Applayout=()=>{
    return(
        <Provider store={appStore}>
         <div>
           <Header/>
           <Outlet/>
         
         </div>
        </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            { 
             path:"/",
             element:<Body/>   
             
            },
            {
                path:"/restaurent/:resId",
                element:<RestroMenu/>
            },{
                path:"/about",
                element:<About/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
            
           
        ],
        errorElement:<Error/>
        

    },
    
])



const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)