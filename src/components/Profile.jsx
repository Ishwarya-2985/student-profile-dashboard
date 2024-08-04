import { FaArrowLeft } from "react-icons/fa6";

const Profile = () => {
    return (
        <div className="text-[#3C3C3C]">
            <div className="flex items-center justify-start">
                <FaArrowLeft />
                <h1 className='text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold ml-4 '>Student Profile</h1>
            </div>

            <div className="block sm:flex md:flex lg:flex items-center sm:justify-start md:justify-start lg:justify-start mt-6 sm:mt-12 md:mt-14">
                <div className="flex items-center gap-4 w-full sm:w-full md:w-[50%] lg:w-[50%]">
                    <div>
                        <img className="h-[80px] w-[80px] rounded-full" src="https://s3-alpha-sig.figma.com/img/c21a/b9e6/2f702d327f6e73d3c1fefef3e071d1c6?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-LU~9herFCKDrLXrElVf92g55swS2RRMolO-7gVTSazHnagb9eCmFILRi3qGGoHtx7IQquoVLCpPw33dJJBXO-vs~rYy~G8x5Dxy4LXiGYuDqnPMBf~X5aC6isyOUhS10MwC~ptM4BYzNg4PqzBur1gbymsuNC4mRei52lO53mTTFmH8WCYp95HjwQ164OQ-BPfx~X65Gn9qwZcChlRI-a-lybKV49fqgAcPbk3uROFYxE3R56swO58p46CGDJivx3KY3kLu-wmtZzMfieouAxGi3hFA0bJhyYXy2nuKF5ebhoiV9tPaBos0EAus3mTAu8LqDnrkwormQCQ4phNVA__" alt="profile" />
                    </div>
                    <div className="ml-6">
                        <h2 className='text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium  leading-relaxed'>Karuna Singhal</h2>
                        <p className="text-xs font-medium  leading-relaxed">Student ID: <span>imt_2021049</span></p>
                        <p className="text-xs font-medium  leading-relaxed">Gender: <span>Female</span></p>
                    </div>
                </div>

                <div className="flex items-end justify-between bg-[#F2EDFD] p-3 px-7 rounded min-w-72 mt-2 sm:mt-2 md:mt-0 lg:mt-0">
                    <div>
                        <h4 className='text-lg sm:text-lg md:text-xl lg:text-xl font-medium  leading-relaxed'>Attendance</h4>
                        <h1  className='text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold  leading-relaxed text-[#8147E7]'>85%</h1>
                    </div>
                    <div className="font-semibold text-lg sm:text-lg md:text-xl lg:text-xl mt-6">
                        <span className="text-[#3EDC4E]">85</span><span>/100</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile