import React, { useState } from 'react'; 

import { HomeIcon, AdjustmentsIcon, ViewGridAddIcon, MenuAlt2Icon, XIcon } from '@heroicons/react/outline';

import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';

const MobileMenu = () => {

    const [click, setClick] = useState(false); 

    const handleClick = () => {

        setClick(!click);
    }

    return (

        <div>
            {
                click ? (

                    
                    <div class="flex flex-col h-[30vh] w-screen bg-[#001529]">

                        <div class="flex flex-col justify-end w-[90%] mx-auto space-x-3 py-2">

                            <Link to="/" class=" mb-10 flex flex-row mb-10 ">
                                <img src={logo} class="w-8" /> 
                                <p class="ml-5 mt-3 font-semibold text-[0.9rem] text-white">Dashboard</p>
                                <XIcon class="h-7 text-white mt-[1%] ml-[50%]" onClick={handleClick} />
                            </Link>

                        </div>

                        <div class="w-[100%] h-[50px] text-white font-thin mb-2 mt-2 hover:bg-[#2980b9] flex flex-col items-center justify-center">
                            <Link to="/" class="flex flex-row w-[90%] ml-auto mr-auto ">
                                <HomeIcon class="h-5" />
                                <p class="ml-3"> Home</p>
                            </Link>
                        </div>

                        <div class="w-[100%] h-[50px] text-white font-thin mb-2 mt-2 hover:bg-[#2980b9] flex flex-col items-center justify-center">
                            <Link to="/take_survey" class="flex flex-row w-[90%] ml-auto mr-auto">
                                <AdjustmentsIcon class="h-5" />
                                <p class="ml-3"> Take Survey</p>
                            </Link>

                        </div>

                        <div class="w-[100%] h-[50px] mb-2 mt-2 text-white hover:bg-[#2980b9] flex flex-col items-center justify-center">
                            <Link to="/add_survey" class="flex flex-row w-[90%] ml-auto mr-auto">
                                <ViewGridAddIcon class="h-5 font-thin" />
                                <p class="ml-3"> Add Survey</p>
                            </Link>
                        </div>

                    </div>


            ) : <MenuAlt2Icon class="h-7 text-[#001529] cursor-pointer" onClick={handleClick} />
            }
        </div>
    )
}

export default MobileMenu;
