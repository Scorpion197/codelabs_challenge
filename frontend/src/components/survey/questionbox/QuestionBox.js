import { useState } from 'react';

import { questionAnswered } from '../../../store/add_questions/question';

import { useDispatch } from 'react-redux';

const QuestionBox = (props) => {

    const emptyQuestion = props.questionID === 0;
    const [done, setDone] = useState(false);
    const [yesChecked, setYesChecked] = useState(false);
    const [noChecked, setNoChecked] = useState(false);
    const dispatch = useDispatch();

    const handleYesClick = () => {

        setDone(true);
        setYesChecked(true);
        
    }

    const handleNoClick = () => {

        setDone(true); 
        setNoChecked(true);
    }

    return (

        <div>
            {
                emptyQuestion ? (<></>) :

                (<div key={props.questionID} class="flex flex-col w-[100%] bg-[#f1f2f6] pt-[5px] pb-[5px] ml-[-5%] rounded-[8px] h-auto">

                    <div class="flex flex-row p-[10px] justify-between items-center">
                        <p class="text-[#001529] text-[20px] sx:text-[14px]"> {props.questionContext}</p>
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
                            {
                                noChecked ? (
                                    <input onClick={handleYesClick} type="checkbox" class="rounded-full" disabled/>
                                ) :(
                                    <input onClick={handleYesClick} type="checkbox" class="rounded-full"/>
                                )
                            }
                            
                            <label class="ml-[10px]">Yes</label>
                        </div>
                        <div>
                            {
                                yesChecked ? (
                                    <input onClick={handleNoClick} type="checkbox" class="rounded-full" disabled/>

                                ) : (
                                    <input onClick={handleNoClick} type="checkbox" class="rounded-full"/>
                                
                                )
                            }
                            <label class="ml-[10px]">No</label>
                    
                        </div>
                    
                    </div>
             </div>)
            }
        </div>
    )
}

export default QuestionBox;