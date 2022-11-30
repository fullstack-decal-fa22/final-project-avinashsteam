import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Sather from "./Sather";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import { ChakraProvider } from "@chakra-ui/react";
import {Routes, Route} from 'react-router-dom'

function App() {
  const [expressCheck, setExpressCheck] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:9000/testAPI`)
      .then((res) => {
        setExpressCheck(res.data);
        console.log(res.data);
      })
      .catch(() => setExpressCheck("Currently down."));
  }, []);

  return (
    <ChakraProvider>
    <Routes>
      <Route path='/' element={<Sather/>}></Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} /> 
    </Routes>
    </ChakraProvider>
  );
}

export default App;