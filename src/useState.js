import React, { useState } from 'react';

export default function UseState() {
    let [grades, setGrades] = React.useState([
        { id: 1, marks: 49, course: "C++" },
        { id: 2, marks: 51, course: "Java" },
        { id: 3, marks: 55, course: "PhP" },
        { id: 4, marks: 45, course: "Python" },
        { id: 5, marks: 40, course: "JavaScript" },
    ]);

    let [selected, setSelected] = React.useState([]);

    const select = (index) =>{
        const copySelected = [...selected];
        copySelected.push(grades[index]);
        setSelected(copySelected);
    }
  const increment = (index) => {
        const copyGrades = [...grades];
        copyGrades[index].marks++;
        setGrades(copyGrades);
    };
    const del = (index) => {
        const copyGrades = [...grades];
        copyGrades.splice(index, 1);
        setGrades(copyGrades);
    };

    const decrement = (index) => {
        const copyGrades = [...grades];
        copyGrades[index].marks--;
        setGrades(copyGrades);
    };

    return (
        <div className="container my-5">
            {grades.map((g, i) => (
                <div key={g.id}>
                    <button onClick={() => increment(i)}>+</button>
                    {g.marks} marks in {g.course} course
                    <button onClick={() => decrement(i)}>-</button>
                    <button onClick={() => del(i)}>delete</button>
                    <button onClick={()=> select(i)}>Add to Select</button>
                </div>
            ))}
            <div>
                <hr />
                <h3>Selected Course</h3>
                {selected.map((s, i) => (
                    <div key={s.id}>
                        {s.marks}marks in {s.course} course
                    </div>

                ))}
            </div>
        </div>);
}
