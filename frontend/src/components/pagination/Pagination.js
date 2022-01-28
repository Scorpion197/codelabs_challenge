
const Pagination = ({questionsPerPage, allQuestions, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allQuestions / questionsPerPage); i++)
        pageNumbers.push(i);
    
    return (

        <nav>
            <ul>
                {pageNumbers.map((number) => (

                    <li key={number}>
                        <a class="cursor-pointer"onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;
