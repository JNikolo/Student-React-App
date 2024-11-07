import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { StudentInfo } from './StudentInfo'
import './App.css'
import { Link } from 'react-router-dom'

const studentList = [
  {
    firstName: "Misty",
    lastName: "Knight",
    sId: "234",
    school: "Queens College",
    major: "Law",
  },
  {
    firstName: "Jessica",
    lastName: "Jones",
    sId: "434",
    school: "Brooklyn College",
    major: "CS",
  },
  {
    firstName: "Colleen",
    lastName: "Wing",
    sId: "233",
    school: "Queens College",
    major: "CS",
  },
  {
    firstName: "Dare",
    lastName: "Devil",
    sId: "876",
    school: "CCNY",
    major: "Law",
  },
  {
    firstName: "Luke",
    lastName: "Cage",
    sId: "323",
    school: "CCNY",
    major: "Math",
  },
];

function App() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const getStudents = async () => {
      console.log(import.meta.env.VITE_API_URL);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/students`);
      const data = await response.json();
      if (data === null) {
        setStudent(studentList);
        return;
      }
      setStudent(data);
    };
    getStudents();
  }, []);

  return (
    <>
      <div>
        <h1>Welcome to CTP</h1>
        <p>List of Students</p>
        {student.map((student) => (
          <Link to={`/students/${student.sId}`} key={student.sId}>
            <StudentInfo
              key={student.sId}
              {...student}
          />
          </Link>
        ))}
        <Link to={`/students/submit`}>
          <button>
            Submit a new student
          </button>   
        </Link>
          <button onClick = {async () => {
            await fetch(`${import.meta.env.VITE_API_URL}/students`, {
              body: JSON.stringify({
                sId: '367',
                firstName: 'Jolly',
                lastName: 'Rancher',
                school: 'Candy College',
                major: 'Cooking',
              }),
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
            })}}

          >
            Add a new student
          </button>
        <button 
        onClick={()=> {
          setStudent((oldStudentList) => oldStudentList.slice(0, -1))
        }}
      >
        Delete last student
      </button>
      </div>
    </>
  )
}

export default App

/*
          onClick={() => {
            setStudent((oldStudentList) => [   
              ...oldStudentList,
              {
                firstName: "John",
                lastName: "Doe",
                sId: "123",
                school: "CCNY",
                major: "CS",
              },
            ])
          }}
            */
