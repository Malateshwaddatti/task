import { useState } from "react";
import "./styles.css";

export default function App() {
  const [names, setNames] = useState([
    "Yashu",
    "Jeevitha",
    "Savitha",
    "Preethi"
  ]);
  const [name, setName] = useState("");

  return (
    <div className="App">
      <input
        onChange={(event) => setName(event.target.value)}
        value={name}
      ></input>
      <button onClick={() => setNames([...names, name])}>Adduser</button>
      {names.map((ur) => (
        <Box username={ur.names} />
      ))}
    </div>
  );
}

function Box({ name, names }) {
  return (
    <div>
      <h2>{names}</h2>
    </div>
  );
}
