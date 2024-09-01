import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/MainContent"
import "./App.css"

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  )
}