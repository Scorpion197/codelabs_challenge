import React, { useState, useEffect } from 'react';

import SideBar from '../../sidebar/SideBar';
import MobileMenu from '../../mobilemenu/MobileMenu';

import { PlusIcon, CheckIcon } from '@heroicons/react/solid';

const AddSurvey = () => {

    const handleSubmit = () => {
        console.log("clicked");
    }

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
                showMobileMenu ? <MobileMenu /> : <SideBar />
            }

            <div class="w-[82%] md:w-[100%] h-full pt-[3vh]">
                <div class="flex flex-col mt-[5vh] justify-center items-center w-[80%] h-full  m-auto">
                    <p class="h-1 text-[#001529] text-[4vh] ml-[-5%]">Add Survey</p>

                    <div class="flex flex-row sx:flex-col sx:justify-center sx:items-center mt-[10vh]">
                        <input class="outline-0 border-[1px] mt-[5px] mb-[5px] border-[#2980b9] rounded-[4px] p-2 w-[40vh] mr-3" type="text" placeholder="Write a question" required />
                        <button class="ml-2 w-[15vh] sx:ml-[-2px] mt-[5px] mb-[5px] flex flex-row items-center text-white  border-0 rounded-[4px] outline-0 bg-[#2980b9]"type="submit">
                            <PlusIcon class="h-5 mr-1 ml-2"/>
                            Add

                        </button>

                        <button class="ml-2 w-[15vh] sx:ml-[-2px] mt-[5px] mb-[5px] flex flex-row items-center text-white  border-0 rounded-[4px] outline-0 bg-[#27ae60]"type="submit">
                            <CheckIcon class="h-5 mr-1 ml-2" />
                            Finish
                        </button>
                        

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddSurvey;

