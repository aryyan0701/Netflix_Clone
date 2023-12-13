import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/cards";
import "./App.css"

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Card title="A Nerflix Original series." sname="Stranger Things" link ="https://www.netflix.com/in/title/80057281"/>
        <Card title="A Nerflix Original series." sname="Money Heist" link="https://www.netflix.com/in/title/80192098" />
        <Card title="A Nerflix Original series." sname="Guns & Gulaab" link="https://www.netflix.com/in/title/81313531" />
        <Card title="A Nerflix Original series." sname="Secread Games" link="https://www.netflix.com/in/title/80115328" />
      </div>
    </>
  );
}
