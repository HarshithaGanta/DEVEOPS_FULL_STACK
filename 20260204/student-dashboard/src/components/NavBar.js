import {NavLink} from "react-router-dom";

function NavBar(){
  return(
    <div className="topbar">
      <div className="logo">🎓 Student Portal</div>

      <div className="nav-links">
        <NavLink to="/" className={({isActive})=>isActive?"nav-item active":"nav-item"}>Dashboard</NavLink>
        <NavLink to="/courses" className={({isActive})=>isActive?"nav-item active":"nav-item"}>Courses</NavLink>
        <NavLink to="/profile" className={({isActive})=>isActive?"nav-item active":"nav-item"}>Profile</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
