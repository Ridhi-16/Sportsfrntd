import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CoachHeader from "./CoachHeader";
import { MoonLoader } from "react-spinners";
// import CropBubble from "../pages/CropBubble";


export default function CoachLayout(){
    
    let isLogin=sessionStorage.getItem("isLogin")
    let userType=sessionStorage.getItem("userType")
    let nav=useNavigate()
    useEffect(()=>{
        if(!isLogin || userType!="coach"){
            toast.error("Please login to access this page")
            nav("/login")
        }
    },[isLogin])


    


    return(
        <>
        
        <CoachHeader/>
        <Outlet/>
         {/* <CropBubble/> */}
        {/* <Footer/> */}
        </>
    )
}