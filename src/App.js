import "./App.css";
import Form from "./Form";

// default import
import Person from "./Person";

// named import
import { name, name2 } from "./Person";

function App() {
  // jsx
  return (
    <div className="App">
      <h1 className="text-teal"> Hello world</h1>
      <h1>{name}</h1>
      <h1>{name2}</h1>

      <Person name={"john"} age={24} />
      <Person name={"mike"} age={34} />
    </div>
  );
}

export default App;
