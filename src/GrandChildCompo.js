import React, {useState, useEffect} from 'react'

const GrandChildCompo = () => {
    const [count, setcount] = useState();

    console.log("GrandChild re-rendered");

    useEffect(() => {
        console.log("GrandChild useEffect")
    }, [count])

    const increaseCount = () => {
        setcount(3);
        console.log("GrandChild increaseCount")
        setcount(4);
        setcount(5);
    }
    return (
        <div>
            <h5>{count}</h5>
            <button onClick={increaseCount}>Increase</button>
        </div>
    )
}

export default GrandChildCompo
