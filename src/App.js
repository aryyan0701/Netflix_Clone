import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/footer";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { AuthContextProvider } from "./contex/AuthContext";

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar className="navbar" />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <protectedRouter>
                <Account />
              </protectedRouter>
            }
          />
        </Routes>
      </AuthContextProvider>

      <Footer className="footer" />
    </>
  );
}
