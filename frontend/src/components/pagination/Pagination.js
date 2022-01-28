
const Pagination = ({questionsPerPage, allQuestions, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allQuestions / questionsPerPage); i++)
        pageNumbers.push(i);
    
    return (

        <nav>
            <div class="flex flex-row ml-[-4%] mt-[5px] mb-[10px]">
                {pageNumbers.map((number) => (

                    <div key={number} class=" hover:bg-[#3498db] hover:text-[#fff] rounded-[4px] cursor-pointer flex flex-row w-[5vh] border-[1px] ml-[0.5px] border-[#bdc3c7] text-[#3498db] ">
                        <a class="flex flex-col w-[80%] m-auto items-center justify-center" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Pagination;
