import React,{useState} from 'react'

function Home() {
    // let name="Mario"
    const[name,setName]=useState('mario');
    const[age,setAge]=useState(25)



    const handleClick=() => {
        setName("Aniket")
        setAge(20)
    }
    


    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age}</p>
            <button onClick={handleClick}>Click me</button>
            
        </div>
    )
}

export default Home
