import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Breadcrumbs = () => {
  {
    /* Breadcrumbs configuration */
  }
  const location = useLocation()

  const pathnames = location.pathname.split("/").filter(x => x)

  return (
    <nav>
      <ul className="flex">
        <li>
          <Link to={"/"}></Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1
          const to = `${pathnames.slice(0, index + 1).join("/")}`
          const title = value
          return (
            <li key={to}>
              {last ? (
                <span>{title}</span>
              ) : (
                <Link to={to}>
                  {title} <span>{" > "}</span>
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
