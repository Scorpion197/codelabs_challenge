import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';

const AddedNotif = () => {

    return (


        <div class="flex flex-row items-center mt-[10px] justify-center p-[5px] bg-[#2980b9] w-[22vh] ml-[10px] rounded-[5px] h-[9vh] sx:h-[7vh] text-white">

            <p> Question Added !</p>
            <CheckCircleIcon class="h-8 text-white ml-[5px]" />

        </div>

    )
}

export default AddedNotif;
