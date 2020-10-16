import React from "react";
import "./styles.css";

export default function Input({ value, handleChange}) {
  return (
    <div className="input">
      <input value={value} onChange={handleChange}/>
    </div>
  );
}