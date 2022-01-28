import React, { useState, useEffect } from 'react';

import SideBar from '../../sidebar/SideBar';
import MobileMenu from '../../mobilemenu/MobileMenu';
import Pagination from '../../pagination/Pagination';
import AnswerBox from '../../answerbox/AnswerBox';

import API from '../../../api';


const SurveyResults = () => {

    const [showMobileMenu, setMobileMenu] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState([]);

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const answersPerPage = 4 
    const indexOfLastAnswer = currentPage * answersPerPage; 
    const indexOfFirstAnswer = indexOfLastAnswer - answersPerPage;

    const displayMobileMenu = () => {

        if (window.innerWidth <= 960)
            setMobileMenu(true);

        else 
            setMobileMenu(false);
    }

    const updateshowResults = () => {

        if (typeof results === undefined || results.length < 1) 
            setShowResults(false);

        else 
            setShowResults(true);
    }


    const getSurveyResults = async () => {

        try {

            const response = await API.fetchSurveyResults();
            setResults(response.data.questions);

        } catch(err) {

            console.log("Error while fetching results: ", err);
        }

    }

    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {

        displayMobileMenu();
        getSurveyResults(); 
        updateshowResults();
        
    }, [results]);

    return (
        <div>
            <div class="flex flex-row w-screen overflow-hidden">

                {
                    showMobileMenu ? <MobileMenu /> : <SideBar />
                }

                <div class="w-[82%] md:w-[100%] h-full pt-[3vh] overflow-hidden">
                    <div class="flex flex-col mt-[5vh] justify-center items-center w-[80%] h-full  m-auto">

                        {
                           showResults ? (

                            <div class="flex flex-col w-[100%] h-auto">
                                <p class="sx:text-[1rem] text-[#001529] text-[4vh] ml-[-5%] font-bold">Survey Results</p>
                                {
                                    results[0].slice(indexOfFirstAnswer, indexOfLastAnswer).map((question) => (

                                        <AnswerBox

                                            questionID={question.questionID}
                                            questionContext={question.questionContext}
                                            questionAnswer={question.questionAnswer}
                                        />

                                    )) 

                                }
                                
                                <Pagination 
                                    allQuestions={results[0].length}
                                    questionsPerPage={answersPerPage}
                                    paginate={paginate}
                                />

                            </div>
                           )  
                           
                           :(<p class="font-bold text-[25px]"> No availbale results </p>) 
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default SurveyResults;
