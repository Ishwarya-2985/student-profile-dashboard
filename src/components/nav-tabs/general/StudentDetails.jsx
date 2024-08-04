import { MdOutlineCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

const StudentDetails = () => {
    return (
        <div className="border border-[#DADADA] p-2 sm:p-2 md:p-2 lg:p-4  rounded w-full sm:w-full md:w-[60%] lg:w-[40%] block sm:block md:flex lg:flex justify-between mt-3 sm:mt-4 md:mt-0 lg:mt-0">
            <div>
                <h4 className="text-sm sm:text-sm md:text-sm lg:text-base   font-medium ">Student Details</h4>
                <div className="text-xs sm:text-xs	md:text-sm lg:text-sm">
                    <p>Pincode : 302021</p>
                    <p>District : Jaipur</p>
                    <p>State : Rajasthan</p>
                </div>  
                <div className="text-xs sm:text-xs	md:text-sm lg:text-sm mt-2">
                    <p>Address : Plot no. 116, Lane number 4, Rathore nagar, Vaishali nagar , Jaipur</p>
                </div>
            </div>

            <div className="ml-0 sm:ml-0 md:ml-3 lg:ml-3 mt-3 sm:mt-3 md:mt-0 lg:mt-0">
                <h4 className="text-sm sm:text-sm md:text-sm lg:text-base  font-medium">Student Contact</h4>
                <div className="text-xs sm:text-xs	md:text-sm lg:text-sm ">
                    <p className="flex items-center leading-relaxed"><MdOutlineCall /> <span className="ml-2">12345 69870</span></p>
                    <p className="flex items-center leading-relaxed"><MdOutlineMailOutline /> <span className="ml-2">hanumannagar.center@tipsg.in</span></p>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails