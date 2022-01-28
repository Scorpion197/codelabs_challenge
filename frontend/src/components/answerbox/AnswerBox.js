
const AnswerBox = (props) => {

    const empty = props.questionID === 0;

    return (

        <div>
            {
                empty ? (<></>) : (

                    <div key={props.questionID} class="flex flex-col mt-[10px] mb-[10px] w-[100%] bg-[#f1f2f6] pt-[5px] pb-[5px] ml-[-5%] rounded-[8px] h-auto">
                        <div class="flex flex-row p-[10px] justify-between items-center">
                            <p class="text-[#001529] text-[20px] sx:text-[14px]"> {props.questionContext}</p>
                        </div>

                        {
                            props.questionAnswer === "Yes" ? (

                                <div class="flex flex-row">
                                    <input type="checkbox" checked/>
                                    <label class="ml-[5px] mr-[5px] mt-[-4px]">Yes</label>
                                    <input type="checkbox" disabled/>
                                    <label class="ml-[5px] mr-[5px] mt-[-4px]" >No</label>
                                </div>

                            ) : (
                                
                                <div class="flex flex-row">
                                    <input type="checkbox" disabled/>
                                    <label class="ml-[5px] mr-[5px] mt-[-4px]">Yes</label>
                                    <input type="checkbox" checked />
                                    <label class="ml-[5px] mr-[5px] mt-[-4px]"> No</label>
                                    
                                </div>
                            )
                        }
                        
                    </div>
                )
            }
        </div>

    )
}

export default AnswerBox;
