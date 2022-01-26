
import SideBar from "../sidebar/SideBar"

const Home = () => {

    return (

        <div class="flex flex-row w-screen overflow-hidden bg-[green]">

            <SideBar />

            <div class="w-[82%] md:w-[100%] h-full bg-[yellow] pt-[3vh]">
                <div class="flex flex-col mt-[5vh] justify-center items-center w-[80%] h-full bg-[blue] m-auto">
                    <p class="h-1 text-[#001529] text-[4vh]">All Surveys</p>

                </div>
            </div>
        </div>
    )
}

export default Home;
