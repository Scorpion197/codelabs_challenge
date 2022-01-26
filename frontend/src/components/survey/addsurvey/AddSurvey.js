
import SideBar from '../../sidebar/SideBar';
import { PlusIcon, CheckIcon } from '@heroicons/react/solid';

const AddSurvey = () => {

    const handleSubmit = () => {
        console.log("clicked");
    }

    return (

        <div class="flex flex-row w-screen overflow-hidden">
            <SideBar />

            <div class="w-[82%] md:w-[100%] h-full pt-[3vh]">
                <div class="flex flex-col mt-[5vh] justify-center items-center w-[80%] h-full  m-auto">
                    <p class="h-1 text-[#001529] text-[4vh] ml-[-5%]">Add Survey</p>

                    <div class="flex flex-row mt-[10vh]">
                        <input class="outline-0 border-[1px] border-[#2980b9] rounded-[4px] p-2 w-[42vh] mr-3" type="text" placeholder="Write a question" required />
                        <button class="ml-2 w-[15vh] flex flex-row items-center text-white  border-0 rounded-[4px] outline-0 bg-[#2980b9]"type="submit">
                            <PlusIcon class="h-5 mr-1 ml-2"/>
                            Add

                        </button>

                        <button class="ml-2 w-[15vh] flex flex-row items-center text-white  border-0 rounded-[4px] outline-0 bg-[#27ae60]"type="submit">
                            <CheckIcon class="h-5 mr-1 ml-2" />
                            Finish
                        </button>
                        

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddSurvey;

