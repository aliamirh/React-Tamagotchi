import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>Tamagotchi</h1>
      <Link to="/">Home</Link> |{" "}
      <Link to="/newTamagotchi">Create Tamagotchi</Link>
    </div>
  );
}
