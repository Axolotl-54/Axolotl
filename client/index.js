import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./components/app";
import { createRoot } from 'react-dom/client';

// Nu?

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App tab="home"/>);