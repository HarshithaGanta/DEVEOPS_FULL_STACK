function Dashboard(){
  return(
    <div className="content">
      <h2>Dashboard Overview</h2>

      <div className="card-row">
        <div className="card green">
          <h3>Attendance</h3>
          <p>92%</p>
        </div>

        <div className="card blue">
          <h3>CGPA</h3>
          <p>8.4</p>
        </div>

        <div className="card orange">
          <h3>Backlogs</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
