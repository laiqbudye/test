import React, { useState, useEffect } from 'react'

const ChildCompo = ({listMethod, printName}) => {
    console.log("ChildCompo component rendered")
    const [myData, setmyData] = useState([]);
    
    useEffect(() => {
        console.log("ChildCompo UseEffect");
        setmyData(listMethod());
        return () => {
            // cleanup
        }
    }, [listMethod])

    
    useEffect(() => {
        console.log("ChildCompo UseEffect PrintName called");
    }, [printName])

    

    return (
        <ul>
            {myData.map((el, i) => <li key={i}>{el}</li>)}
        </ul>
    )
}

export default ChildCompo
