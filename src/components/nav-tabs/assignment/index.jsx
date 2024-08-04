import { AssignmentCardData } from "../../Data"
import AssignmentCard from "./AssignmentCard"
import AssignmentTabs from "./AssignmentTabs"

const Assignment = () => {
  return (
    <div>
      <AssignmentTabs />
      <div className="mt-10 flex items-center justify-center sm:justify-center md:justify-between lg:justify-between flex-wrap">
      {AssignmentCardData.map((card, index) => (
        <AssignmentCard 
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

export default Assignment