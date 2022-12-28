import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import React from "react";
import Custom_Navbar from "./components/Custom_Navbar";

function App() {
    return (
        <div>
            <Custom_Navbar />
            <Homepage />
        </div>
    );
}

export default App;
