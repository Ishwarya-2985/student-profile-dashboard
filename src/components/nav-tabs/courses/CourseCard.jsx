import { FaRegClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const CourseCard = ({ title, batch, time, date, status}) => {
    return (
        <div className="min-w-72 max-w-[380px] border border-[#E6E6E6] rounded p-4 m-2">
                <h2 className="text-[#000000] text-lg sm:text-lg md:text-xl lg:text-xl font-bold">{title}</h2>
                <p className="text-[#989898] text-xs sm:text-xs md:text-sm lg:text-sm border border-[#D3D3D3] rounded w-[120px] p-1 my-2">{batch}</p>
                <div className="text-[#989898] flex items-center gap-4  text-xs sm:text-xs md:text-sm lg:text-sm ">
                    <div className="flex items-center justify-between"><FaRegClock /><span className="ml-2">{time}</span></div>
                    <div className="flex items-center justify-between"><FaRegCalendarAlt /><span className="ml-2">{date}</span></div>
                </div>
                <p className=" text-xs sm:text-xs md:text-sm lg:text-sm  bg-[#FFDDDD] text-[#F12222] p-1 px-3 rounded w-[130px] mt-4">Status : {status}</p>

        </div>
    )
}

export default CourseCard