import React, { useState } from "react";
import { jsPDF } from "jspdf";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    disease: "",
    date: ""
  });
  const [searchName, setSearchName] = useState("");
  const [searchDisease, setSearchDisease] = useState("");

  const addPatient = () => {
    if (!form.name || !form.phone || !form.disease || !form.date) {
      alert("Please fill all fields");
      return;
    }
    setPatients([...patients, form]);
    setForm({ name: "", phone: "", disease: "", date: "" });
  };

  const generateDiseasePDF = () => {
    const filtered = patients.filter(
      p => p.disease.toLowerCase() === searchDisease.toLowerCase()
    );

    if (filtered.length === 0) {
      alert("No patients found for this disease");
      return;
    }

    const pdf = new jsPDF();
    pdf.text(`Disease Report: ${searchDisease}`, 20, 20);

    let y = 40;
    filtered.forEach((p, i) => {
      pdf.text(`${i + 1}. Name: ${p.name}`, 20, y);
      pdf.text(`Phone: ${p.phone}`, 20, y + 10);
      pdf.text(`Date: ${p.date}`, 20, y + 20);
      y += 35;
    });

    pdf.save(`${searchDisease}_patients.pdf`);
  };

  const filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className="card">
      <h2>Patients</h2>

      <input placeholder="Patient Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input placeholder="Phone Number"
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })} />

      <input placeholder="Disease"
        value={form.disease}
        onChange={e => setForm({ ...form, disease: e.target.value })} />

      <input type="date"
        value={form.date}
        onChange={e => setForm({ ...form, date: e.target.value })} />

      <button onClick={addPatient}>Add Patient</button>

      <hr />

      <input placeholder="Search patient by name"
        value={searchName}
        onChange={e => setSearchName(e.target.value)} />

      <input placeholder="Enter disease for PDF"
        value={searchDisease}
        onChange={e => setSearchDisease(e.target.value)} />

      <button onClick={generateDiseasePDF}>
        Download Disease PDF
      </button>

      <ul>
        {filteredPatients.map((p, i) => (
          <li key={i}>
            <b>{p.name}</b> | {p.disease} | {p.phone} | {p.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Patients;