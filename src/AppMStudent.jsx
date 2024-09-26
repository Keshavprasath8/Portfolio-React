import propTypes from "prop-types"

const Student = (props) => {
  return (
    <div className='student'>
      {/* <img src={props.url} alt="" /> */}
      <p>url:{props.url}</p>
        <h1>Name: {props.name}</h1>
        <h1>Age: {props.Age}</h1>
        <h1>Student: {props.isStudent ? "yes":"No"}</h1>
        <h1>hell:</h1>
    </div>
    // <h1>hiiiii</h1>
  );
};

Student.propTypes = {
    url: propTypes.string,
    name: propTypes.string,
    Age: propTypes.number,
    isStudent: propTypes.bool,
}
Student.defaultProps = {
    name: `Guest`,
    Age: `24`,
    isStudent: true, 
}
export default Student;