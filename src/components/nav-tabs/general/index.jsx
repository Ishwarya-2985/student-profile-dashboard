import GeneralCard from "./GeneralCard"
import StudentDetails from "./StudentDetails"
import StudentInfo from "./StudentInfo"
import { GeneralCardData } from "../../Data"


const General = () => {
    return (
        <>
            <div className="mt-5 block sm:block md:flex lg:flex items-center">
                <StudentInfo />
                <StudentDetails />
            </div>
            <div className="mt-10 flex items-center justify-center sm:justify-center md:justify-between lg:justify-between flex-wrap mr-12">
            {GeneralCardData.map((val, index) => (
                    <GeneralCard
                        key={index}
                        title={val.title}
                        Total={val.Total}
                        Attend={val.Attend}
                        Missed={val.Missed}
                        attempt={val.attempt} 
                        fail={val.fail}
                    />
                ))}
               
            </div>
        </>
    )
}

export default General