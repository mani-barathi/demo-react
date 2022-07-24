import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../components/InputForm";
import Person from "../components/Person";

function SomePage() {
  const [persons, setPersons] = useState(() => {
    // console.log("retreiving from local storage");
    const defaultValue = localStorage.getItem("persons");
    return defaultValue ? JSON.parse(defaultValue) : [];
  });

  // component get executed/recreate
  // html content is populated in screen
  // then useEffect is exeuted // sideeffect function
  useEffect(() => {
    console.log("setting value to localstorage");
    localStorage.setItem("persons", JSON.stringify(persons));
  }, [persons]);

  function appendPerson(newPerson) {
    setPersons((prev) => {
      newPerson.isAdult = newPerson.age >= 18 ? "Adult" : "child";
      const newPersons = [...prev, newPerson];
      // localStorage.setItem("persons", JSON.stringify(newPerson));
      return newPersons;
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
      <a href="/person"> Person Page a tag</a>

      <br />
      <Link to="/person"> Person Page using Link</Link>

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

export default SomePage;
