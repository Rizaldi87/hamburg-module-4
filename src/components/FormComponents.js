"use client";
import React, { useState } from "react";

function FormComponents() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log("event", event);
    // const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData, // memastikan sebelum mendapat data yang baru, data yang lama tetap sesuai
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked submit", formData);
  };

  return (
    <div>
      <h1>Form Components</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formData.name}
          name="name"
          placeholder="type name here"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="type email here"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="type password here"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormComponents;
