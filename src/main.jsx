import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as ReactDOM from "react-dom/client";
import './index.css'
import * as React from "react";

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-screen mx-auto '>
      <RouterProvider router={router} />
      </div>
    
  </React.StrictMode>
);
