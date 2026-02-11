import "./App.css";
import Welcome from "./components/Welcome";
import Course from "./components/Course";

function App(){
return(
<div className="container">
<div className="dashboard">
<Welcome/>
<Course/>
<div className="card">
<p>🚀 Level: Beginner</p>
</div>
<div className="card">
<p>⏰ Duration: 6 Weeks</p>
</div>
</div>
</div>
);
}
export default App;
