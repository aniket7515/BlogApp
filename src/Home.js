import React from 'react'

function Home() {
    const handleClick=() => {
        console.log("Hello Ninja");
    }
    const handleClickAgain=(name) => {
        console.log("hello"+ name);
    }


    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={()=>{
                handleClickAgain("Aniket")
            }}>Click me Again</button>
        </div>
    )
}

export default Home
