import { useState, useEffect } from "react";
import "./styles/App.css";
import Person from "./components/Person";
import InputForm from "./components/InputForm";

function App() {
  const [persons, setPersons] = useState(() => {
    console.log("retreiving from local storage");
    const defaultValue = localStorage.getItem("persons");
    return defaultValue ? JSON.parse(defaultValue) : [];
  });

  // component get executed/recreate
  // html content is populated in screen
  // then useEffect is exeuted
  useEffect(() => {
    console.log("setting value to localstorage");
    localStorage.setItem("persons", JSON.stringify(persons));
  }, [persons]);

  function appendPerson(newPerson) {
    setPersons((prev) => {
      newPerson.isAdult = newPerson.age >= 18 ? "Adult" : "child";
      return [...prev, newPerson];
    });
  }

  function deletePerson(personName) {
    setPersons((prev) => {
      return prev.filter((person) => person.name !== personName);
    });
  }

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
          deletePerson={deletePerson}
        />
      ))}
    </div>
  );
}

export default App;
