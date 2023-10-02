import { Route, Routes } from "react-router-dom";
import { Courses, Home, Course, Contacts } from "./pages/index";

function App() {
  

  return (
    
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/course/:title' element={<Course/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </div>
  );
}

export default App;
