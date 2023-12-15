import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/cards";
import "./App.css";
import sdata from "./Sdata"
import Footer from "./components/footer";




export default function App() {
  return (
    <>
     <Navbar
     className="navbar"
     />
     <h1 className="app-heading">Watch More. Watch Better.</h1>
      <div className="container">
      {sdata.map((item, index) => (
        <Card 
          imgsrc= {item.imgsrc}
          sname={item.sname}
          link={item.links}
          className="card "
        />
        ))}

        <Footer className="footer"/>
      </div>
    </>
  );
}
