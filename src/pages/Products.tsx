import React, { useState } from "react"
import { Button, Input, DatePicker, Image, Badge, Form } from "antd"
import { CloseCircleOutlined } from "@ant-design/icons"
import { Tabs } from "antd"
import type { TabsProps } from "antd"
import { GiSewingMachine } from "react-icons/gi"
import { TbCurrencyNaira } from "react-icons/tb"
import { BiBarChartAlt2 } from "react-icons/bi"
import { RiFilterOffLine } from "react-icons/ri"
import { TfiLayoutGrid3Alt } from "react-icons/tfi"
import { TfiMenuAlt } from "react-icons/tfi"
import ProductTable from "./products/ProductTable"
import ProductGallery from "../components/product/ProductGallery"
import { CiSearch } from "react-icons/ci"
import { FaRegEnvelope } from "react-icons/fa"
import { IoMdSearch } from "react-icons/io" // <IoMdSearch />
import Ellipse from "../assets/images/Ellipse.png"
import { HiChevronDown } from "react-icons/hi" //  <HiChevronDown />
import { FaCalendarAlt } from "react-icons/fa"

const { Search } = Input
const { RangePicker } = DatePicker

const Products: React.FC = () => {
  // const [showEvents, setShowEvents] = useState(true)
  const [gallery, setGallery] = useState(true)
  const [show, setShow] = useState(true)

  // const [productTbl, setProductTbl] = useState(false)
  const [tbl, setTbl] = useState(true)

  const onChange = (key: string) => {
    console.log(key)
  }

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "PRODUCTS",
      children: !gallery && !tbl && <ProductTable />,
    },
    {
      key: "2",
      label: <span className="text-gray-500 ml-3"> DRAFT (8) </span>,
      children: !gallery && !tbl && <ProductTable />,
    },
  ]

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
        {/* AntD Responsive Grid for customer statistics----Start */}
        {/* <Divider orientation="left">Products</Divider> */}
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid md:grid-cols-4 md:gap-4 md:mt-5">
          <div className="flex bg-gray-100 p-3">
            <GiSewingMachine className="size-10 bg-[#586449] text-white p-1" />

            <div className="ml-5">
              <b>24</b>
              <p>Total Products</p>
            </div>
          </div>

          <div className="flex justify-between bg-gray-100 p-3">
            <TbCurrencyNaira className="size-10 bg-[#FAF3DF] p-2" />
            <div className="ml-5">
              <b>127,000</b>

              <p>Total Cost</p>
            </div>
            <p className="size-10"></p>
          </div>

          <div className="flex bg-gray-100 p-3">
            <BiBarChartAlt2 className="size-10 bg-[#EDB88B] p-2 text-white" />
            <div className="ml-5">
              <b>16</b>

              <p> Products</p>
            </div>
            <p className="size-10"></p>
            {/* <p className="bg-brightOrange rounded-full mt-5 text-white justify-self-end text-center w-[100px] h-[20px]">
                  UNPAID
                </p> */}
            <Badge
              count={show ? "PAID" : 0}
              style={{
                backgroundColor: "#586449",
                marginTop: "10px",
                fontFamily: "sora",
              }}
              className="ml-[-10px] md:ml-[100px]"
            />
          </div>

          <div className="flex bg-gray-100 p-3">
            <BiBarChartAlt2 className="size-10 bg-green-500 p-2 text-white" />
            <div className="ml-5">
              <b>8</b>

              <p> Products</p>
            </div>
            <p className="size-10"></p>
            {/* <p className="bg-brightOrange rounded-full mt-5 text-white justify-self-end text-center w-[100px] h-[20px]">
                  UNPAID
                </p> */}
            <Badge
              count={show ? "UNPAID" : 0}
              style={{
                backgroundColor: "#EDB88B",
                marginTop: "10px",
                color: "black",
                fontFamily: "sora",
              }}
              className="ml-[-20px] md:ml-[60px]"
            />
          </div>
        </div>
      </div>

      {/* Search | Filter | Pipe | DatePicker and AddNew Button */}
      <div className="border border-1 md:border border-1">
        <div className="flex justify-between my-5 relative">
          <div className="invisible md:visible md:flex">
            <Form
              className="md:flex m-3"
              name="trigger"
              // style={{ maxWidth: 600 }}
              layout="vertical"
              autoComplete="off"
            >
              <Input
                prefix="Search"
                // prefix={<TiAttachment />}
                suffix={<IoMdSearch />}
                className="rounded-full bg-gray-100"
                // placeholder="Type your message"
              />
            </Form>
            <p>
              <RiFilterOffLine className="size-8 mx-5" />
            </p>
            <span className="mr-5">Filter</span>
            |
            <RangePicker className=" mx-5" />
          </div>
          <Button className="invisible  md:visible rounded-full bg-brightOrange text-white">
            <CloseCircleOutlined />
            Add New
          </Button>
        </div>
        {/* /Mobile Add, Search, Filter Buttons Start */}

        <Form
          className="absolute mt-[-170px] md:invisible"
          name="trigger"
          // style={{ maxWidth: 600 }}
          layout="vertical"
          autoComplete="off"
        >
          <Button className="rounded-full bg-brightOrange text-white w-[210px]">
            <CloseCircleOutlined />
            Add New
          </Button>
          <Input
            prefix="Search"
            // prefix={<TiAttachment />}
            suffix={<IoMdSearch />}
            className="rounded-full bg-gray-100 w-[210px] mt-5"
            // placeholder="Type your message"
          />
          <hr className="my-5 w-[210px]" />
          <Input
            prefix={<RiFilterOffLine />}
            // prefix={<TiAttachment />}
            suffix={<HiChevronDown />}
            className="w-[210px]"
            placeholder="Filter"
          />
          <Input
            prefix={<FaCalendarAlt />}
            // prefix={<TiAttachment />}
            suffix={<HiChevronDown />}
            className="w-[210px] my-5"
            placeholder="01-07-2015 to 02-12-2018"
          />
        </Form>
      </div>
      {/* /Mobile Add, Search, Filter Buttons End */}
      <hr className="mt-5 mb-[30px]" />
      {/* Ant Design Tabs */}
      <div className="flex justify-between">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          className="w-screen ml-[-30px] md:ml-0"
        />
        <div className="flex mt-[15px]">
          <TfiLayoutGrid3Alt
            onClick={() => setGallery(!gallery)}
            className="mr-1"
          />
          <TfiMenuAlt onClick={() => setTbl(!tbl)} className="ml-1" />
        </div>
      </div>
      {/* Icon toggle of Product Gallery and Product Table */}

      {gallery && (
        <div>
          <ProductGallery />
        </div>
      )}

      {tbl && (
        <div>
          <ProductTable />
        </div>
      )}
    </div>
  )
}

export default Products
