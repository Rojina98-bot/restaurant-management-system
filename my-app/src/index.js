import React, { StrictMode } from "react";
import {createRoot} from 'react-dom/client';
import App from "./app";
/*import {render} from 'react-dom';*/
/*import ReactDOM from 'react-dom'*/
const root = createRoot(document.getElementById("root"));
root.render
(
  <StrictMode>
    <App/>
  </StrictMode>
  
  );
