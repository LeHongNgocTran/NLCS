import React,{useState, useEffect} from 'react';
import Header from "../Component/Header/Navbar";
import Footer from "../Component/Footer/Footer";
import { Outlet } from 'react-router-dom';
import {useStore, actions} from "../Store"
function Client(){
    const [showHeader, setshowHeader] = useState(false);
    const [state, dispatch] = useStore();
  
    useEffect(() => {
      const handleScroll = () => {
        setshowHeader(window.scrollY >= 190);
      };
      window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
        <Header showHeader={showHeader}/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Client;