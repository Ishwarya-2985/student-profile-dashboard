

const GeneralCard = ({title, Total, Attend, Missed,  attempt, fail}) => {
    return (

        <div className="mt-3">
            <h3 className="text-sm sm:text-sm md:text-sm lg:text-base  font-medium pb-2">{title}</h3>
            <div className="border border-[#ECECEC] p-2 rounded text-sm font-medium w-72">
                <p>Total {Total}</p>
                <div className="flex items-center justify-between">
                    <p className="text-[#60DF6F]">{Attend}</p>
                    <p className="text-[#9E9E9E]">{attempt}</p>
                </div>
                <div className="flex items-center justify-between">
                     <p className="text-[#F93333]">{Missed}</p>
                     <p className="text-[#F93333]">{fail}</p>
                </div>
               
            </div>
        </div>
    )
}

export default GeneralCard