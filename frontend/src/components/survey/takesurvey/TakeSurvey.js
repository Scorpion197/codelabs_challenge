import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import SideBar from '../../sidebar/SideBar';
import MobileMenu from '../../mobilemenu/MobileMenu';

const TakeSurvey = () => {

    const [showMobileMenu, setMobileMenu] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);
    const [done, setDone] = useState(false);
    const storageContent = localStorage.getItem('questions');
    const chkoppi = useSelector((state) => state.questions);
    console.log(chkoppi);
    
    const handleCheckBox = (e) => {

        e.preventDefault();
        setDone(true);
    }

    const displayMobileMenu = () => {

        if (window.innerWidth <= 960)
            setMobileMenu(true);

        else 
            setMobileMenu(false);
    }

    const updateShowQuestions = () => {

        if (storageContent !== null)
            setShowQuestions(true);

        else 
            setShowQuestions(false);
    }


    useEffect(() => {

        displayMobileMenu(); 
        updateShowQuestions();
    }, []);

   /* useEffect(() => {

        updateShowQuestions();
    }, [questions]);
    */

    window.addEventListener('resize', displayMobileMenu);
    

    return (

        <div class="flex flex-row w-screen overflow-hidden">

            {
                showMobileMenu ? <MobileMenu /> : <SideBar />
            }
            <div class="w-[82%] md:w-[100%] h-full pt-[3vh] overflow-hidden">
                <div class="flex flex-col mt-[5vh] justify-center items-center w-[80%] h-full  m-auto">

                    {
                        showQuestions ? (
                            <div class="flex flex-col w-[100%] h-auto">

                                <p class="sx:text-[1rem] text-[#001529] text-[4vh] ml-[-5%] text-bold">Survey Questions</p>
                                
                                <div class="flex flex-col w-[100%] bg-[#f1f2f6] pt-[5px] pb-[5px] ml-[-5%] rounded-[8px] h-auto">
                                    
                                    <div class="flex flex-row p-[10px] justify-between items-center">
                                        <p class="text-[#001529] text-[20px] sx:text-[14px]"> Did you ever stole a bank?</p>
                                        {
                                            done ? (
                                                <div class="bg-[#7bed9f] h-auto flex flex-row justify-center items-center w-[8vh] rounded-[5px]"><p class="text-[#747d8c] sl:text-[14px] sx:text-[11px]">Done</p></div>

                                            ): (

                                                <div class="bg-[#ff4d4d] h-auto flex flex-row justify-center items-center w-[8vh] rounded-[5px]"><p class="text-[#fff] sl:text-[14px] sx:text-[11px]">Actif</p></div>

                                            )
                                        }
                                    </div>

                                    <div class="flex flex-col p-[10px]">

                                        <div class="flex flex-row items-center">
                                            <input onClick={handleCheckBox} type="checkbox" class="rounded-full"/>
                                            <label class="ml-[10px]">Yes</label>
                                        </div>
                                        <div>
                                            <input onClick={handleCheckBox} type="checkbox" class="rounded-full"/>
                                            <label class="ml-[10px]">No</label>

                                        </div>

                                    </div>


                                </div>

                            </div>
                        ) : (

                            <h1> NO available surveys</h1>
                        )
                    }

                </div>
            </div>

        </div>

    )
}

export default TakeSurvey;