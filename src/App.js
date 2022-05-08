import { useState } from "react";
import "./App.css";
import Form from "./Form";

// default import
import Person from "./Person";

// named import

function App() {
  console.log("re executed");

  const isTrue = 10;
  const persons = [
    { name: "john", age: 21 },
    { name: "mike", age: 22 },
    { name: "ross", age: 23 },
    { name: "mani", age: 24 },
  ];
  const [name, setName] = useState("");

  function handleChange(e) {
    // name = e.target.value;        // wrong
    setName(e.target.value);
  }

  // jsx
  return (
    <div className="App">
      <h1 className="text-teal"> Hello world</h1>

      <input type="text" onChange={handleChange} value={name} />

      <p>{name}</p>

      {/* {persons.map((person) => {
        return  <p> {person.name} </p>;
      })} */}

      {persons.map((person) => (
        <Person name={person.name} age={person.age} />
      ))}

      {/* If else */}
      {isTrue === 10 ? <p>Yes Its true</p> : <p> Not its not</p>}

      {/* If */}
      {isTrue === 10 && isTrue % 2 == 0 && <p>Seems like its True</p>}
    </div>
  );
}

export default App;
