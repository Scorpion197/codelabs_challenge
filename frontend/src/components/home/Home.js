import React, { useState, useEffect } from 'react';

import SideBar from "../sidebar/SideBar"
import MobileMenu from "../mobilemenu/MobileMenu";

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

        <div class="flex flex-row w-screen overflow-hidden bg-[green]">

            {
                showMobileMenu ? <MobileMenu />: <SideBar />
            }

            <div class="w-[82%] md:w-[100%] h-full bg-[yellow] pt-[3vh]">
                <div class="flex flex-col mt-[5vh] justify-center items-center w-[80%] h-full bg-[blue] m-auto">
                    <p class="h-1 text-[#001529] text-[4vh]">All Surveys</p>

                </div>
            </div>
        </div>
    )
}

export default Home;
