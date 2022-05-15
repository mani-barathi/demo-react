import { useState } from "react";

function InputForm({ appendPerson }) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function addPerson(event) {
    event.preventDefault();
    appendPerson({ name: name, age: 23 });
    setName("");
  }

  return (
    <form onSubmit={addPerson}>
      <input type="text" onChange={handleChange} value={name} />
      <button type="submit">Add</button>
    </form>
  );
}

export default InputForm;
