import React, { useState } from "react";
import Patients from "./components/Patients";
import Doctors from "./components/Doctors";
import Appointments from "./components/Appointments";

function App() {
  const [page, setPage] = useState("patients");

  return (
    <div className="container">
      <h1>🏥 Hospital Management System</h1>

      <div className="nav">
        <button onClick={() => setPage("patients")}>Patients</button>
        <button onClick={() => setPage("doctors")}>Doctors</button>
        <button onClick={() => setPage("appointments")}>Appointments</button>
      </div>

      {page === "patients" && <Patients />}
      {page === "doctors" && <Doctors />}
      {page === "appointments" && <Appointments />}
    </div>
  );
}

export default App;