import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SideBar from '../../sidebar/SideBar';
import MobileMenu from '../../mobilemenu/MobileMenu';
import QuestionBox from '../questionbox/QuestionBox';

import API from '../../../api';

const TakeSurvey = () => {

    const [showMobileMenu, setMobileMenu] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);
    const [allQuestions, setAllquestions] = useState([]);
    const storageContent = localStorage.getItem('questions');

    const displayMobileMenu = () => {

        if (window.innerWidth <= 960)
            setMobileMenu(true);

        else 
            setMobileMenu(false);
    }

    const updateShowQuestions = () => {

        if (typeof allQuestions === undefined || allQuestions.length < 1) 
            setShowQuestions(false);


        else 
            setShowQuestions(true);
    }

    const getQuestions = async() => {

        try {

            const response = await API.getSurveysQuestion();
            setAllquestions(response.data.questions);
            
        }catch(err) {

            console.log("error occured", err);
        }
    }
    useEffect(() => {

        displayMobileMenu(); 
        updateShowQuestions();
        getQuestions();
    }, [allQuestions]);



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
                                {
                                    allQuestions[0].map((question) => (
                                        
                                        <QuestionBox 
                                            questionID={question.questionID}
                                            questionContext={question.questionContext} 
                                        />
                                    ))
                                }
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