import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Courses from "./components/Courses";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";

function App(){
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
