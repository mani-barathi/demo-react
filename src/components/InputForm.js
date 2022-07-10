import { useState } from "react";
import { useNavigate } from "react-router-dom";

// react hooks
function InputForm({ appendPerson }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const navigate = useNavigate();

  function handleFNameChange(e) {
    setFname(e.target.value);
  }

  // what we execept to happen
  /// person update
  //  useEffect run -> localstorage update
  //  navigate

  // what actually happens
  /// person update
  //  navigate
  //  useEffect run -> localstorage update (this won't happen as we already moved to different page)

  function addPerson(event) {
    event.preventDefault();
    appendPerson({ name: fname, age: 23 });

    setTimeout(() => {
      navigate(`/person/${fname}/${lname}`);
    }, 100);

    setFname("");
    setLname("");
  }

  return (
    <form onSubmit={addPerson}>
      <input type="text" onChange={handleFNameChange} value={fname} />
      <input
        type="text"
        onChange={(e) => setLname(e.target.value)}
        value={lname}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default InputForm;
