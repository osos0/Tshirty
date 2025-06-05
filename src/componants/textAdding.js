import React from "react";

export default function TextAdding({ customTextAdd, setCustomTextAdd }) {
  return (
    <div className="dynamicleftSonText">
      <h5 className="subjectOf">Add Text</h5>
      <input
        type="text"
        className="form-control"
        placeholder="Type your text here"
        value={customTextAdd}
        onChange={(e) => setCustomTextAdd(e.target.value)}
      />
    </div>
  );
}
