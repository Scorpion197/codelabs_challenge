import React, { useState, useEffect } from 'react';

import SideBar from "../sidebar/SideBar"
import MobileMenu from "../mobilemenu/MobileMenu";

import welcome from '../../assets/welcome.webp';

const Home = () => {

    const [showMobileMenu, setMobileMenu] = useState(false);
    
    const displayMobileMenu = () => {

        if (window.innerWidth <= 960)
            setMobileMenu(true);

        else 
            setMobileMenu(false);
    }

    useEffect(() => {

        displayMobileMenu(); 
    }, [])

    window.addEventListener('resize', displayMobileMenu);
    return (

        <div class="flex flex-row w-screen overflow-hidden">

            {
                showMobileMenu ? <MobileMenu />: <SideBar />
            }

            <div class="w-[82%] md:w-[100%] h-full pt-[3vh]">
                <div class="flex flex-col mt-[5vh] justify-center items-center w-[80%] h-full m-auto">
                    <p class="text-[#020e29] text-[30px] text-extrabold">Welcome to our survey service </p>
                    <img src={welcome} class="w-[60vh] h-[60vh]" />
                </div>
            </div>
        </div>
    )
}

export default Home;
