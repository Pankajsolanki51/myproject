import React, { useState, useEffect } from "react";

function UseEffect() {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")

    function addCount() {
        setCount(c => c + 1)
    }
    // no dependencies are  given means teh side efect will cure ecah tiem teh compo re-rendres
    // useEffect(() => {
    //     document.title = `Count: ${count}`
    // })

    // // runs only when compo mounts

    // useEffect(() => {
    //         document.title = `My Counter`
    //     },[])

    // runs on mount + when teh given dependency  value changes


    useEffect(() => {
        document.title = `Counter: ${count} ${color}`
    }, [count,color])


    function subCount() {
        setCount(c => c - 1);
    }

    function changeColor() {
        setColor(c => c === 'green' ? "red " : "green")
}
    return (
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Increase Count</button>
            <button onClick={subCount}>Decrease Count</button> <br />
            <button onClick={changeColor}>Chnage Color</button>
        </>
    )
}

export default UseEffect