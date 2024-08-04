import { useState } from 'react'; // Import useState from React
import General from './nav-tabs/general';
import Courses from './nav-tabs/courses';
import Quiz from './nav-tabs/quiz';
import Exam from './nav-tabs/exam';
import Assignment from './nav-tabs/assignment'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('General'); // Set initial active tab

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update active tab state
  };

  return (
    // <div className="flex items-end gap-8 text-gray-500 mt-6 pb-2 border-b-[1px] border-[#E4E4E4]">
    //     <div>General</div>
    //     <div>Courses</div>
    // </div>

    <div>
    {/* Tab Navigation */}
    <div className="flex items-end gap-8 text-gray-500 mt-6 pb-2 border-b-[1px] border-[#E4E4E4]">
      <div
        className={`cursor-pointer ${activeTab === 'General' ? 'text-[#3D70F5] font-bold border-b-2 border-blue-500 ' : ''}`} // Apply styles to active tab
        onClick={() => handleTabClick('General')} // Set General as active on click
      >
        General
      </div>

      <div
        className={`cursor-pointer ${activeTab === 'Quiz' ? 'text-[#3D70F5] font-bold border-b-2 border-blue-500 ' : ''}`} // Apply styles to active tab
        onClick={() => handleTabClick('Quiz')} // Set General as active on click
      >
       Quiz
      </div>

      <div
        className={`cursor-pointer ${activeTab === 'Exam' ? 'text-[#3D70F5] font-bold border-b-2 border-blue-500 ' : ''}`} // Apply styles to active tab
        onClick={() => handleTabClick('Exam')} // Set General as active on click
      >
      Exams
      </div>

      <div
        className={`cursor-pointer ${activeTab === 'Assignment' ? 'text-[#3D70F5] font-bold border-b-2 border-blue-500 ' : ''}`} // Apply styles to active tab
        onClick={() => handleTabClick('Assignment')} // Set General as active on click
      >
      Assignments
      </div>
     
      <div
        className={`cursor-pointer ${activeTab === 'Courses' ? 'text-[#3D70F5] font-bold border-b-2 border-blue-500' : ''}`} // Apply styles to active tab
        onClick={() => handleTabClick('Courses')} // Set Courses as active on click
      >
        Courses
      </div>
      
    </div>
   

    {/* Tab Content */}
    <div className="mt-4">
      {activeTab === 'General' && <General />} 
      {activeTab === 'Courses' && <Courses />} 
      {activeTab === 'Quiz' && <Quiz />}
      {activeTab === 'Exam' && <Exam />}
      {activeTab === 'Assignment' && <Assignment />}
    </div>
  </div>
  )
}

export default Tabs