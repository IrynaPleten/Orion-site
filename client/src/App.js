import { Route, Routes } from "react-router-dom";
import { Courses, Home, Course } from "./pages/index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/course:id' element={<Course/>} />
        <Route path='/courses' element={<Courses/>} />
      </Routes>
    </div>
  );
}

export default App;
