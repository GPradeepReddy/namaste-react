import React, { useEffect, useState } from 'react'

const User = (props) => {
    const { name, location, number } = props;
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(2);

    useEffect(() => {
        console.log("User function comp did mount");
        const timer = setInterval(() => {
            setCount1(count1 => count1 + 1);
            setCount2(count2 => count2 + 2);
        }, 1000)
        return () => {
            console.log("User function comp will unmount");
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <p>{name} - {location} - {number}</p>
            <p>Count1 - {count1}</p>
            <p>Count2 - {count2}</p>
            <button onClick={() => {
                setCount1(count1 + 1);
                setCount2(count2 + 2);
            }}>Increment Count</button>
        </div>
    )
}

export default User;
