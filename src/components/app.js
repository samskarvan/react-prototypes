import React from 'react';
import Table from './table';

export default()=>{
    return( 
    <div className="container">
    <h1>Student Grade Table</h1>
    <Table data = {students}/>
    </div>
    )
}

const students =[
    {
        name: 'John',
        course: 'math',
        grade: 98
    },
    {
        name: 'Katy',
        course: 'science',
        grade: 98
    },
    {
        name: 'Margaret',
        course: 'english',
        grade: 98
    }
];
