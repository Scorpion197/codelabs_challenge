import React, { useState, useEffect } from 'react';

import SideBar from '../../sidebar/SideBar';
import MobileMenu from '../../mobilemenu/MobileMenu';
import AddedNotif from '../../notifications/questionadded/AddedNotif';
import FinishedNotif from '../../notifications/finishadd/FinishedNotif';

import { PlusIcon, CheckIcon } from '@heroicons/react/solid';

import { useDispatch, useSelector } from 'react-redux'; 

import { addQuestion } from '../../../store/add_questions/question';

import API from '../../../api';

const AddSurvey = () => {

    
    const [showMobileMenu, setMobileMenu] = useState(false);
    const [question, setQuestion] = useState(''); 
    const [showAddNotif, setShowAddNotif] = useState(false);
    const [showFinishNotif, setShowFinishNotif] = useState(false);

    const dispatch = useDispatch();
    const addedQuestions = useSelector((state) => state.questions);

    const displayMobileMenu = () => {

        if (window.innerWidth <= 960)
            setMobileMenu(true);

        else 
            setMobileMenu(false);
    }

    const handleAddClick = (e) => {
        
        e.preventDefault(); 
        dispatch(addQuestion(question));
        setShowAddNotif(true);
        setTimeout(() => {setShowAddNotif(false)}, 1000);
        setQuestion('');

    }

    const handleFinishClick = async (e) => {

        e.preventDefault();

        try {

            const response = await API.postQuestions(addedQuestions);

        } catch(err) {

            console.log(err);
        }

        setShowFinishNotif(true);
        setTimeout(() => {setShowFinishNotif(false)}, 1000);

    }

    useEffect(() => {

        displayMobileMenu(); 
    }, []);

    window.addEventListener('resize', displayMobileMenu);
    

    return (

        <div class="flex flex-row w-screen overflow-hidden">
            
            {
                showMobileMenu ? <MobileMenu /> : <SideBar />
            }

            <div class="w-[82%] md:w-[100%] h-full pt-[3vh]">
                <div class="flex flex-col mt-[5vh] justify-center items-center w-[80%] h-full  m-auto">
                    <p class="h-1 text-[#001529] text-[4vh] ml-[-5%] font-bold">Add Survey Questions</p>

                    <div class="flex flex-row items-center sx:flex-col sx:justify-center sx:items-center mt-[10vh]">
                        <input onChange={evt => setQuestion(evt.target.value)}class="outline-0 border-[1px] mt-[5px] mb-[5px] border-[#2980b9] rounded-[4px] p-2 w-[40vh] mr-3" type="text" placeholder="Write a question" required />

                        <button onClick={handleAddClick} class="ml-2 w-[15vh] h-[35px] sx:h-[25px] mt-[2px] sx:ml-[-2px] hover:bg-[#3498db] mb-[5px] flex flex-row items-center text-white  border-0 rounded-[4px] outline-0 bg-[#2980b9]"type="submit">
                            <PlusIcon class="h-5 mr-1 ml-2"/>
                            Add

                        </button>
                        <button onClick={handleFinishClick} class="ml-2 w-[15vh] h-[35px] sx:h-[25px] sx:ml-[-2px] mt-[2px] mb-[5px] flex flex-row items-center text-white  hover:bg-[#2ecc71] border-0 rounded-[4px] outline-0 bg-[#27ae60]"type="submit">
                            <CheckIcon class="h-5 mr-1 ml-2" />
                            Finish
                        </button>

                    </div>
                    {
                        showAddNotif ? (<AddedNotif />) : (<></>)
                    }

                    {
                        showFinishNotif ? (<FinishedNotif />) : (<> </>)
                    }
                </div>

            </div>
        </div>
    )
}

export default AddSurvey;

