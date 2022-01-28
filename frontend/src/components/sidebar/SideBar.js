
import { HomeIcon, AdjustmentsIcon, ViewGridAddIcon, CollectionIcon } from '@heroicons/react/outline';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import image from '../../assets/me.jpeg';

const SideBar = () => {

    return (

        <div class="flex flex-col bg-[#001529] h-screen overflow-hidden
        w-[18%] 
        ">
            
            <div class="flex flex-col justify-end w-[90%] mx-auto space-x-3 py-2">

                <Link to="/" class=" mb-10 flex flex-row mb-10 ">
                    <img src={logo} class="w-12" /> 
                    <p class="ml-5 mt-3 font-semibold text-[1.5rem] sl:text-[1rem] sg:text-[1.1rem] text-white">Dashboard</p>
                </Link>

            </div>

            <nav class="flex flex-col w-full mt-10 h-auto text-[#ecf0f1] overflow-hidden">
                <div>

                    <div class="w-[100%] h-[50px] font-thin mb-2 mt-2 hover:bg-[#2980b9] flex flex-col items-center justify-center">
                        <Link to="/" class="flex flex-row w-[90%] ml-auto mr-auto ">
                            <HomeIcon class="h-5" />
                            <p class="ml-3"> Home</p>
                        </Link>
                    </div>

                    <div class="w-[100%] h-[50px] font-thin mb-2 mt-2 hover:bg-[#2980b9] flex flex-col items-center justify-center">
                        <Link to="/take_survey" class="flex flex-row w-[90%] ml-auto mr-auto">
                            <AdjustmentsIcon class="h-5" />
                            <p class="ml-3"> Take Survey</p>
                        </Link>
                    </div>

                    <div class="w-[100%] h-[50px] mb-2 mt-2 hover:bg-[#2980b9] flex flex-col items-center justify-center">
                        <Link to="/add_survey" class="flex flex-row w-[90%] ml-auto mr-auto">
                            <ViewGridAddIcon class="h-5 font-thin" />
                            <p class="ml-3"> Add Survey</p>
                        </Link>
                    </div>

                    <div class="w-[100%] h-[50px] mb-2 mt-2 hover:bg-[#2980b9] flex flex-col items-center justify-center">
                        <Link to="/results" class="flex flex-row w-[90%] ml-auto mr-auto">
                            <CollectionIcon class="h-5 font-thin" />
                            <p class="ml-3"> Browse Results</p>
                        </Link>
                    </div>

                </div>

                <div class="flex flex-row absolute top-[92%] flex-row w-[18%] h-[8vh] bg-[#2c3e50] items-center">
                    <img src={image} class="w-[6vh] h-[6vh] rounded-full ml-1" />
                    <div class="flex flex-col ml-4">
                        <h3 class="text-[#bdc3c7] font-semibold sl:text-[14px]">Kamel Gaouaoui</h3>
                        <a class="text-[#bdc3c7] h-5 font-[12px] sl:text-[12px]" href="https://github.com/Scorpion197">View Github</a>
                        
                    </div>
                </div>



            </nav>
        </div>
    )
}

export default SideBar;