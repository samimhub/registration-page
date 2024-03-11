
import './App.css';
import { useState } from "react";

function App() {
    const [fromData, setFromData] = useState({
      username: "",
      email: "",
      password: "",
      conform_password: "",
    });
    const inputHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setFromData((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    };
   
    return (
      <div className="card">
        <div className="App">
          <h1>Ragistration</h1>
          <input
            type="name"
            id="name"
            placeholder="Enter The name"
            name="username"
            className=""
            autoComplete="off"
            value={fromData.username}
            onChange={inputHandler}
          />
          <input
            type="email"
            id="email"
            placeholder="Enter The email"
            name="email"
            className=""
            autoComplete="off"
            value={fromData.email}
            onChange={inputHandler}
          />
          <input
            type="password"
            id="password"
            placeholder="Enter The password"
            name="password"
            className=""
            autoComplete="off"
            value={fromData.password}
            onChange={inputHandler}
          />
          <input
            type="password"
            id="conform-password"
            placeholder="Enter The conform-password"
            name="conform_password"
            className=""
            autoComplete="off"
            value={fromData.conform_password}
            onChange={inputHandler}
          />
          <button>Register Here</button>
          <p>{`Registered Username is ${fromData.username} and Email id ${fromData.email}`}</p>
        </div>
      </div>
    );
  };


export default App;
