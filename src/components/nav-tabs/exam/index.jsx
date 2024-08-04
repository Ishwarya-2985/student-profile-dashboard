import { ExamCardData } from "../../Data"
import ExamCard from "./ExamCard"
import ExamTabs from "./ExamTabs"

const Exam= () => {
  return (
    <div>
      <ExamTabs />
      <div className="mt-10 flex items-center justify-center sm:justify-center md:justify-between lg:justify-between flex-wrap">
      {ExamCardData.map((card, index) => (
        <ExamCard 
          key={index}
          title={card.title}
         subject={card.subject}
          time={card.time}
          date={card.date}
          passingpercentage={card.passingpercentage}
          scoredpercentage={card.scoredpercentage}
        />
      ))}
      </div>
    </div>
  )
}

export default Exam