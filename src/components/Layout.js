import React from "react"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  console.log("props layout", children)
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
