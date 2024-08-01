import React, { useState, useEffect } from "react";

function WidthHeight() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    //without useEffect
    // window.addEventListener("resize",handleResize);

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("evenet listner added");

        //cleanup while unmount
        return ()=>{
            window.removeEventListener("resize",handleResize)
            console.log("listner removed");
        }
    }, [width,height])

    function handleResize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    

    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
    );
}

export default WidthHeight;