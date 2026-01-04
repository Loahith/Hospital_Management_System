import React, { useState } from "react";

function Appointments() {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");

  return (
    <div className="card">
      <h2>Appointments</h2>

      <input
        placeholder="Patient Name"
        value={patient}
        onChange={e => setPatient(e.target.value)}
      />

      <select value={doctor} onChange={e => setDoctor(e.target.value)}>
        <option value="">Select Doctor</option>
        <option>Dr. Arun</option>
        <option>Dr. Satya</option>
        <option>Dr. Ravi</option>
        <option>Dr. Loahith</option>
        <option>Dr. Sita </option>
        <option>Dr. Monish</option>
      </select>

      {patient && doctor && (
        <p>
          Appointment fixed for <b>{patient}</b> with <b>{doctor}</b>
        </p>
      )}
    </div>
  );
}

export default Appointments;