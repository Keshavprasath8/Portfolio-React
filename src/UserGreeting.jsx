
const UserGreeting = (props)=>{
    if(props.isloggedIn){
        return <h1>Welcome {props.username}</h1>;
    }
    else{
        return <h1>Please Login {props.username}</h1>
    }

}
UserGreeting.defaultprops = {
    username:"guest",

}
export default UserGreeting;