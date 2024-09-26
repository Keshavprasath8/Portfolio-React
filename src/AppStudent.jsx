import Student from "./AppMStudent.jsx"

const App= () => {
  return (
    <>
    <Student name="keshav" Age={24} isStudent={true}/>
    <br />
    <Student name="anu" Age={22} isStudent={false}/>
    {/* <Student/> */}
    </>
  );
}

export default App;