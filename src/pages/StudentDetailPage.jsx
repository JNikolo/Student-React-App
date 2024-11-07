import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const StudentDetailPage = () => {
    const { id } = useParams();
    const [student, setStudent] = React.useState(null);

    useEffect(() => {
          const getStudents = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/students/${id}`);
            const data = await response.json();
            setStudent(data);
          };
          getStudents();
    }, [id]);
  
    return (<div>{student ? student.major : 'Loading...'}</div>);
}