import propType from "prop-types"
// const Task=({name, urll})=>{
// return(
// <div>
//     <img src={urll}alt="" />
//     <h1>Name :{name}</h1>
// </div>
// );
// };
// Task.propType = {
//     urll: propType.any,
//     name: propType.string,
// };
// Task.defaultProps = {
//     name: `Guest`,
    
// };
// export default Task;
import proptype from 'prop-types'
const PropProp=({name, imgurll})=>{
return(
    <div>
        <img src={imgurll} alt="" />
        <h1>Name:{name}</h1>
    </div>
)
}
PropProp.proptype ={
    imgurll: proptype.any,
    name: proptype.string,
}
PropProp.proptype ={
    name:'guest',
}
export default PropProp
