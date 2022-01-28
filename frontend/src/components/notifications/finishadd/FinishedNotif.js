import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const FinishedNotif = () => {

    return (

        <div class="flex flex-row items-center mt-[10px] sx:h-[7vh] justify-center p-[5px] bg-[#27ae60] w-[22vh] ml-[10px] rounded-[5px] h-[9vh] text-white">

            <p> Survey Created !</p>
            <CheckCircleIcon class="h-8 text-white ml-[5px]" />

        </div>
    )
}


export default FinishedNotif;
