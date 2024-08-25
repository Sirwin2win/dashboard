import React from "react"
import ProductTable from "./products/ProductTable"
//https://dash-nu-blush.vercel.app/
const Messages = () => {
  return (
    <div className="h-full">
      <h1>
        Messages Page
        <ProductTable />
      </h1>
    </div>
  )
}

export default Messages
