import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.jsx"
import { CssBaseline } from "@mui/material"
import { BrowserRouter } from "react-router-dom"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)