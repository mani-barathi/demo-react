import { useState } from "react";
import "./styles/App.css";

import Person from "./components/Person";
import InputForm from "./components/InputForm";

function App() {
  const [persons, setPersons] = useState([]);

  function appendPerson(newPerson) {
    // persons.push(newPerson)  // wrong

    // 1st way
    // setPersons([...persons, newPerson]);

    // 2nd way
    setPersons((prev) => {
      console.log("prev", prev);
      newPerson.isAdult = newPerson.age >= 18 ? "Adult" : "child";
      return [...prev, newPerson];
    });
  }

  // const arr = [1,2,3]
  // const newarr = [...arr,...ar2,4,5]

  // jsx
  return (
    <div className="App">
      <h1 className="text-teal"> Hello world</h1>

      <InputForm appendPerson={appendPerson} />
      {persons.map((person, index) => (
        <Person
          name={person.name}
          age={person.age}
          isAdult={person.isAdult}
          key={Math.random()}
        />
      ))}
    </div>
  );
}

export default App;
