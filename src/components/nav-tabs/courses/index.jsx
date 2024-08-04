import { CourseCardData } from "../../Data"
import CourseCard from "./CourseCard"
import CourseTabs from "./CourseTabs"

const Courses = () => {
  return (
    <div>
      <CourseTabs />
      <div className="mt-10 flex items-center justify-center sm:justify-center md:justify-between lg:justify-between flex-wrap">
      {CourseCardData.map((card, index) => (
        <CourseCard 
          key={index}
          title={card.title}
          batch={card.batch}
          time={card.time}
          date={card.date}
          status={card.status}
        />
      ))}
      </div>
    </div>
  )
}

export default Courses