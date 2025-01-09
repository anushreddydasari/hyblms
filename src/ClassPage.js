import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ClassPage = () => {
  const { className } = useParams();
  const navigate = useNavigate();

  // Define subjects for each class
  const subjects = {
    'Class 1': ['EVS','Math','Hindi', 'English',"Spl Telugu"],
    'Class 2': ['Math', 'History', 'English', 'Geography'],
    'Class 3': ['Math', 'Art', 'Science', 'English'],
    'Class 4': ['ART','Math','English','Science','Social','Telugu'],
    'Class 5': ['Math', 'Biology', 'Geography', 'English'],
    'Class 6': ['Math', 'History', 'Literature', 'Art'],
    'Class 7': ['Math', 'Science', 'History', 'Literature'],
    'Class 8': ['Math', 'Science', 'Physics', 'English'],
    'Class 9': ['Math', 'Chemistry', 'History', 'Biology'],
    'Class 10': ['Math', 'Physics', 'Chemistry', 'Biology'],
  };

  const classSubjects = subjects[className] || [];

  // Handle subject selection
  const handleSubjectSelection = (subject) => {
    navigate(`/class/${className}/subject/${subject}`);
  };

  return (
    <div className="class-page">
      <h1>Subjects for {className}</h1>
      
      {/* List subjects */}
      <div>
        {classSubjects.map((subject, index) => (
          <div key={index}>
            <button onClick={() => handleSubjectSelection(subject)}>
              {subject}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassPage;
