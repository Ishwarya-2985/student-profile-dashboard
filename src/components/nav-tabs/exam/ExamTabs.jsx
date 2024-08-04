
const ExamTabs = () => {
    return (
        <div>
            <div className="flex items-end gap-3 sm:gap-5 md:gap-6 lg:gap-8 text-gray-500 my-6 pb-2  border-[#E4E4E4] text-xs sm:text-sm md:text-sm lg:text-sm font-medium	">
                <div className="text-[#3C3C3C]">Total Quizzes : 245</div>
                <div className="text-[#6B6B6B]">Attempted : 245</div>
                <div className="text-[#9E9E9E]">Unattempted : 245</div>
                <div className="text-[#55DE64]">Passed : 25</div>
                <div className="text-[#F93333]">Failed : 25</div>
            </div>
        </div>
    )
}

export default ExamTabs