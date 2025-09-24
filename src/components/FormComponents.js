"use client";
import React, { useState } from "react";

function FormComponents() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (event) => {
    console.log("event", event);
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked submit", name, email, password);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Form Components</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="type name here"
          onChange={handleChangeName}
        />
        <input
          type="email"
          value={email}
          placeholder="type email here"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="type password here"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormComponents;
