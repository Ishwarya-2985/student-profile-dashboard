import { FaRegClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const ExamCard = ({ title, subject, time, date, passingpercentage,scoredpercentage}) => {
    return (
        <div className="relative min-w-72 max-w-[380px] border border-[#E6E6E6] rounded p-4 m-2">
        <div className="absolute right-0 top-0 text-xs sm:text-xs md:text-sm lg:text-sm flex items-center justify-center bg-[#FFDDDD] text-[#F12222] p-1 px-2 rounded w-[71px]  mr-0 ml-1">Failed</div> 
        
          


             
                <h2 className="text-[#3C3C3C] text-lg sm:text-lg md:text-xl lg:text-xl font-medium mt-4">{title}</h2>
                <p className="text-[#989898] text-base sm:text-sm md:text-base p-1 my-2">{subject}</p>

                <div className="text-[#3C3C3C] flex items-center gap-4  text-xs sm:text-xs md:text-sm lg:text-sm ">
                <div className="flex items-center justify-between"><FaRegCalendarAlt /><span className="ml-2">{date}</span></div>
                    <div className="flex items-center justify-between"><FaRegClock /><span className="ml-2">{time}</span></div>
                    </div>
                 
                 
                <p className=" text-[#000000] text-xs sm:text-xs md:text-sm lg:text-sm p-1 my-2">Passing Percentage <span className="text-[#11a56c]">{passingpercentage}</span></p>
                <p className=" text-[#000000] text-xs sm:text-xs md:text-sm lg:text-sm p-1 -my-1.5">Scored Percentage <span className="text-[#F12222]">{scoredpercentage}</span></p>
        
        </div>
    )
}

export default ExamCard