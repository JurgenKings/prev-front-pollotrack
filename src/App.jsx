import React from "react"
import { ThemeProvider } from "@emotion/react"
import { PolloTrackProvider } from "./context"
import { theme } from "./components/Theme"
import { useLocation } from "react-router-dom"
import { AppRoutes } from "./routes/AppRoutes"
import { Header } from "./components/Header"
import "./App.css"

function App() {
  const location = useLocation()
  const currentPath = location.pathname

  const shouldShowHeader = currentPath !== "/"

  return (
    <ThemeProvider theme={theme}>
      <PolloTrackProvider>
        {shouldShowHeader && <Header />}
        <AppRoutes />
      </PolloTrackProvider>
    </ThemeProvider>
  )
}

export { App }