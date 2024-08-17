import React, { useState } from "react"
import naira from "../../assets/images/naira.png"
import gif from "../../assets/images/gif.png"
import { Badge, Button, Image, Tabs } from "antd"
import { TbCurrencyNaira } from "react-icons/tb"
import { GiSewingMachine } from "react-icons/gi"
import { BiBarChartAlt2 } from "react-icons/bi"
import { CiSearch } from "react-icons/ci"
import { FaRegEnvelope } from "react-icons/fa"
import Ellipse from "../../assets/images/Ellipse.png"
import { CloseCircleOutlined, MoreOutlined } from "@ant-design/icons"
import type { TabsProps } from "antd"

// Tabs set up

const onChange = (key: string) => {
  console.log(key)
}

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "PRODUCTS",
    children: "Products",
  },
  {
    key: "2",
    label: <span className="text-gray-500 ml-3"> DRAFT (8) </span>,
    children: "Products",
  },
]

const EmptyProduct = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="md:mt-[-100px]">
      <div className="flex justify-between bg-[#586449] mb-5 h-[100px] md:invisible">
        <p className="text-white mt-[50px] ml-2">Tailor Space</p>
        <div className="flex mt-[40px] mr-2">
          <CiSearch className="bg-white size-8 rounded-full p-1" />
          <FaRegEnvelope className="bg-white size-8 rounded-full p-1 mx-3" />
          <Image src={Ellipse} />
        </div>
      </div>
      <div>
        {/* AntD Responsive Grid for product statistics----Start */}
        <b>Products</b>
        <hr className="mt-2" />

        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          className="w-screen"
        />
        {/* Icon toggle of Product Gallery and Product Table */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <img src={gif} className="size-[100px]" />
          <div className="my-5">
            <b className="ml-[30px] mt-5">What are you selling? </b>
            <p className="ml-[-35px]">
              You don't currently have any product to
            </p>
            <p className="ml-[-20px]">display. Kindly click "Add product" to</p>
            <p className="ml-[70px]">proceed</p>
          </div>
          <Button className="rounded-full bg-brightOrange text-white">
            <CloseCircleOutlined /> Add New
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EmptyProduct
