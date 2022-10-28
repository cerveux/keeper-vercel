import React from "react";
import CreateRoot from 'react-dom/client';
import App from "./components/App";




const contenedor = document.getElementById('root');
const root = CreateRoot.createRoot(contenedor);
root.render(<App tab="home" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
