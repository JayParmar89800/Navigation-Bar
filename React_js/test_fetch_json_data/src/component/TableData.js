import React,{useState} from 'react';
import jsondata from '../data.json';
import StudentForm from './StudentForm';
export default function TableData() {
    const[studentData,setStudentData]=useState(jsondata);

    const tableRows=studentData.map((info)=>{
        return(
            <tr>
                <td>{info.id}</td>
                <td>{info.name}</td>
                <td>{info.city}</td>
            </tr>
        );
    });

    const addrows=(data)=>{
        const totalStudent=studentData.length;
        data.id=totalStudent+1;
        const updatedStudentData=[...studentData];
        updatedStudentData.push(data);
        setStudentData(updatedStudentData);
    }

  return (
    <div className=''>
      <table className="table table-stripped"> 
      <thead>
        <tr>
            <th>Sr.NO</th> 
            <th>Name</th> 
            <th>City</th> 
        </tr>
      </thead>
      <tbody>{tableRows}</tbody> 
     
      </table>
      <StudentForm func={addrows}/>
    </div>
  )
}
