import { QuizCardData } from "../../Data"
import QuizCard from "./QuizCard"
import QuizTabs from "./QuizTabs"

const Quiz = () => {
  return (
    <div>
      <QuizTabs />
      <div className="mt-10 flex items-center justify-center sm:justify-center md:justify-between lg:justify-between flex-wrap">
      {QuizCardData.map((card, index) => (
        <QuizCard 
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

export default Quiz