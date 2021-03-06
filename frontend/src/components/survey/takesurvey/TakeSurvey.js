import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SideBar from '../../sidebar/SideBar';
import MobileMenu from '../../mobilemenu/MobileMenu';
import QuestionBox from '../questionbox/QuestionBox';

import API from '../../../api';
import Pagination from '../../pagination/Pagination';

const TakeSurvey = () => {

    const [showMobileMenu, setMobileMenu] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);
    const [allQuestions, setAllquestions] = useState([]);
    const results = useSelector((state) => state.answeredQuestions);
    const dispatch = useDispatch();

    //for pagination
    const [currentPage, setCurrentPage] = useState(1); 
    const questionsPerPage = 4;
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;


    
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


    const handleFinishClick = async (e) => {

        e.preventDefault();

        try {

            const response = await API.sendSurveyResults(results);
            
        } catch(err) {

            console.log("Error occured while sending data to backend API" ,err);
        }
    }

    const paginate = pageNumber => setCurrentPage(pageNumber);

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

                                <p class="sx:text-[1rem] text-[#001529] text-[4vh] ml-[-5%] font-bold">Survey Questions</p>
                                {
                                    allQuestions[0].slice(indexOfFirstQuestion, indexOfLastQuestion).map((question) => (
                                        
                                        <QuestionBox 
                                            questionID={question.questionID}
                                            questionContext={question.questionContext} 
                                        />
                                    ))
                                }
                                <Pagination
                                    allQuestions={allQuestions[0].length}
                                    questionsPerPage={questionsPerPage}
                                    paginate={paginate}
                                />
                                <button onClick={handleFinishClick} class="w-[15vh] h-[5vh] sx:w-[8vh] sx:text-[10px] sl:font-thin sl:w-[12vh] sl:text-[14px] text-white bg-[#27ae60] rounded-[5px] ml-[-4.6%] font-semibold">
                                    Finish Survey
                                </button>
                            </div>
                        ) : (

                            <p class="font-bold text-[25px]"> No available surveys</p>
                        )
                    }

                </div>
            </div>

        </div>

    )
}

export default TakeSurvey;