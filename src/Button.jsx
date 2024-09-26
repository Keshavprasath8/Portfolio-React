const ClickEvent =()=>{
const handClick =()=>{
    console.log(`${name} Clicked the button`)
}
return <button onClick={()=>handClick("kjoe")}>click bro</button>
}
export default ClickEvent;