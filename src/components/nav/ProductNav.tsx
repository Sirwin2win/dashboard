import React, { useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import "./Nav.css"
// import AddProductButton from "../button/AddProductButton"
import Ellipse from "../../assets/images/Ellipse.png"
import { Breadcrumb, Layout, Dropdown, Space, Button } from "antd"
import type { MenuProps } from "antd"
const { Header, Content, Footer } = Layout
import {
  SearchOutlined,
  BellOutlined,
  DownOutlined,
  MenuOutlined,
  CloseOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons"
import Breadcrumbs from "./Breadcrumbs"

const items: MenuProps["items"] = [
  {
    label: <Link to={"settings/my-profile"}>Profile</Link>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"settings/security"}>password</Link>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"settings/appearance"}>Appearance</Link>,
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"settings/billing"}>Billings</Link>,
    key: "3",
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"settings/notification"}>Notifications</Link>,
    key: "4",
  },
]

const ProductNav = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false)

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav)
  }

  // Array containing navigation items
  const navItems = [
    { id: 1, to: "dashboard", txt: "Dashboard" },
    { id: 2, to: "orders", txt: "Orders" },
    { id: 3, to: "products", txt: "Products" },
    { id: 4, to: "requests", txt: "Requests" },
    { id: 5, to: "customers", txt: "Customers" },
    { id: 6, to: "messages", txt: "Messages" },
  ]

  return (
    <Layout className="h-fit bg-[#FAF3DF] pb-[120px]">
      <Header className="bg-white flex justify-evenly items-center h-24">
        {/* Flex container  */}
        {/* Logo  */}
        <div className="flex">
          <b className="text-brightOrange as">AS |</b>
          <div className="mt-[-10px]">
            <b>Ankara Store</b>
            <p className="mt-[-45px]">Allen Ikeja Branch</p>
          </div>
          <i>
            <DownOutlined />
          </i>
        </div>
        {/* Menu Items */}
        {/* <div className="space-x-6 md:flex"> */}
        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map(item => (
            <li
              key={item.id}
              className="p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <Link to={item.to}>{item.txt}</Link>
            </li>
          ))}
          <li className="p-2 rounded-full mt-3">
            <Button className="hover:text-blue rounded-full bg-brightOrange text-white">
              <PlusCircleOutlined className="mr-1" />
              <p>Add Products</p>
            </Button>
          </li>
        </ul>
        |
        <SearchOutlined />
        <BellOutlined />
        <img src={Ellipse} className="size-50 rounded-full" />
        <div className="">
          <b>Ene Obi</b>
          <p className="mt-[-45px]">Manager</p>
        </div>
        {/* Settings */}
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={e => e.preventDefault()}>
            <Space>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <CloseOutlined size={20} /> : <MenuOutlined size={20} />}
        </div>
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 overflow-auto"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <div className="flex">
            <b className="text-brightOrange as">AS |</b>
            <div className="mt-[-10px]">
              <b>Ankara Store</b>
              <p className="mt-[-45px]">Allen Ikeja Branch</p>
            </div>
            <i>
              <DownOutlined />
            </i>
          </div>
          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <li
              key={item.id}
              className="p-2 border-b rounded-xl duration-300 hover:text-black cursor-pointer border-gray-600"
            >
              <Link to={item.to}>{item.txt}</Link>
            </li>
          ))}
          <li className="p-4 rounded-full mt-3">
            <Button className="rounded-full bg-brightOrange">
              <PlusCircleOutlined className="mr-1 text-white" />
              <p className="text-white">Add Products</p>
            </Button>
          </li>
        </ul>
      </Header>
      {/* <div className="mb-[20px]"> */}
      <Content className="py-[0px] px-[48px]">
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>
            <Breadcrumbs />
          </Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: "white",
            padding: 34,
            borderRadius: "20px",
          }}
          // className="h-fit"
        >
          <Outlet />
        </div>
      </Content>
    </Layout>
  )
}

export default ProductNav
