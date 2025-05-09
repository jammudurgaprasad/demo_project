import { useState } from "react";
import axios from 'axios';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/', { name, email })
      .then(result => {
        console.log(result);
        setMessage("User saved successfully!");
        setName("");
        setEmail("");
      })
      .catch(err => {
        console.log(err);
        setMessage("Something went wrong.");
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Hello DP</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Email: </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button style={{ marginTop: 15 }} type="submit">Submit</button>
      </form>
      {message && <p style={{ marginTop: 15 }}>{message}</p>}
    </div>
  );
}

export default App;
