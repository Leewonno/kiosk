import { Outlet } from "react-router-dom"
import { Footer } from "../widgets/Footer"
import { Header } from "../widgets/Header"

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
