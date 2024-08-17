import { Outlet } from "react-router-dom"
import Nav from "../components/nav/Nav"
import ProductNav from "../components/nav/ProductNav"

const MainLayout = () => {
  return (
    <div>
      {/* <Nav /> */}
      <ProductNav />
      {/* <Outlet /> */}
    </div>
  )
}

export default MainLayout
