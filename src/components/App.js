import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import "./App.css"

const user = {
  name: "Liza",
  city: "New York",
  bio: "A software developer who loves to create web applications.",
  github: "https://github.com/liza",
  linkedin: "https://linkedin.com/in/liza",
};

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
