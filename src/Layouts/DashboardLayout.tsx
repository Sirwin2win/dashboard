import { Outlet } from "react-router-dom"
import ProductNav from "../components/nav/ProductNav"

const DashboardLayout = () => {
  return (
    <div>
      <ProductNav />
      <Outlet />
    </div>
  )
}

export default DashboardLayout
