import React, { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { GetProp, MenuProps, Menu, Col, Row, Divider, Tabs } from "antd"
import type { TabsProps } from "antd"
import "./Nav.css"
import Profile from "../../pages/Profile"
import Password from "../../pages/Password"
import Appearance from "../../pages/Appearance"
import Billings from "../../pages/Billings"
import { CgArrowLeft } from "react-icons/cg"
import Notifictions from "../../pages/Notifictions"

type MenuItem = GetProp<MenuProps, "items">[number]

const items: MenuItem[] = [
  {
    key: "1",
    label: <Link to={"my-profile"}>MY PROFILE</Link>,
  },
  {
    key: "2",
    label: <Link to={"security"}>PASSWORD</Link>,
  },
  {
    key: "3",
    label: <Link to={"appearance"}>APPEARANCE</Link>,
  },
  {
    key: "4",
    // label: <Link to={"billing"}>BILLING</Link>,
  },
  {
    key: "5",
    // label: <Link to={"notification"}>NOTIFICATIONS</Link>,
  },
]

// Settings mobile view Tabs
const sett: TabsProps["items"] = [
  {
    key: "1",
    label: <p className="p-1 small ml-[-5px]">profile</p>,
    children: <Profile />,
  },
  {
    key: "2",
    label: <p className="small ml-[-25px]">password</p>,
    children: <Password />,
  },
  {
    key: "3",
    label: <p className="small ml-[-25px]">appearance</p>,
    children: <Appearance />,
  },
  // {
  //   key: "4",
  //   label: <p className="small ml-[-25px]">billing</p>,
  //   children: <Billings />,
  // },
  // {
  //   key: "5",
  //   label: <p className="small ml-[-25px]">Notofications</p>,
  //   children: <Notifictions />,
  // },
]

const SettingsNav = () => {
  const location = useLocation()
  const locationArray = location.pathname.split("/")
  const [mode, setMode] = useState<"vertical" | "inline">("inline")

  const changeMode = (value: boolean) => {
    setMode(value ? "vertical" : "inline")
  }

  const onChange = (key: string) => {
    console.log(key)
  }

  return (
    <div className="ml-[-5px] md:w-full md:mt-[-140px]">
      {/* Mobile header start */}
      <div className="flex justify-between bg-[#586449] mb-5 h-[100px] md:invisible">
        <div className="flex ml-5">
          <CgArrowLeft className="text-white mt-[55px]" />
          <p className="text-white mt-[50px] ml-1 text-white">Back</p>
        </div>
      </div>
      {/* Mobile header end */}
      {locationArray && <b className="uppercase">{locationArray[2]}</b>}
      <hr />

      <Tabs
        defaultActiveKey="1"
        items={sett}
        onChange={onChange}
        className="w-[375px] md:invisible md:absolute"
      />

      <div className="invisible md:visible">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div>
              <Divider type="vertical" />

              <Menu
                style={{ width: 150, marginLeft: "-30px" }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode={mode}
                items={items}
                className="h-screen"
              />
            </div>
          </Col>
          <Col className="gutter-row" span={18}>
            <Outlet />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default SettingsNav
