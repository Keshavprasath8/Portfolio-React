import {useState} from "react"
const UseState = ()=>{
    let[name, setName] = useState("kjoe");
    let[age, setAge] = useState(0);
    return(
        <div>
        <p>Name: {name}</p>
        <button onClick={()=> setName("rahul")}>set name</button>

        <p>Age: {age}</p>
        <button onClick={()=> setAge(age+1)} >Increase</button>
        <button onClick={()=> setAge(age-1)} >Decrease</button>
        <button onClick={()=> setAge(0)} >Reset</button>
        </div>
    )
}
export default UseState