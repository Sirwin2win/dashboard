import { Outlet } from "react-router-dom"
import ProductNav from "../components/nav/ProductNav"

const ProductLayout = () => {
  return (
    <div>
      <ProductNav />
      {/* <Outlet /> */}
    </div>
  )
}

export default ProductLayout
