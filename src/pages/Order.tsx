import React, { useState, useEffect } from "react"
import img from "../assets/images/img.png"
import img1 from "../assets/images/img-1.png"
import img2 from "../assets/images/img-2.png"
import { RiFilterOffLine } from "react-icons/ri"
import { GiSewingMachine } from "react-icons/gi"
import { TbCurrencyNaira } from "react-icons/tb"
import { BiBarChartAlt2 } from "react-icons/bi"
import { CiSearch } from "react-icons/ci"
import { FaRegEnvelope } from "react-icons/fa"
import { IoMdSearch } from "react-icons/io" // <IoMdSearch />
import Ellipse from "../assets/images/Ellipse.png"
import { HiChevronDown } from "react-icons/hi" //  <HiChevronDown />
import { FaCalendarAlt } from "react-icons/fa"

import { Button, Table, Input, DatePicker, Badge, Image, Form } from "antd"
import { CloseCircleOutlined, MoreOutlined } from "@ant-design/icons"
import "../components/order/Order.css"

const { Search } = Input
const { RangePicker } = DatePicker

const Order: React.FC = () => {
  const [show, setShow] = useState(true)

  // getting viewport dimenssions
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      items: ["Ankara Crop Top", "23 stock remaining"],
      price: [7000, 4000],
      "order id": 68821238,
      date: "April 24, 2023",
      status: (
        <Badge
          count={show ? "PAID" : 0}
          style={{ backgroundColor: "#586449", marginTop: "20px" }}
        />
      ),
      action: <MoreOutlined />,
    },
    {
      id: 2,
      items: ["Aso Ebi", "10 stock remaining"],
      price: [7000, 4000],
      "order id": 68821238,
      date: "April 24, 2023",
      // price: (
      //   <div className="flex">
      //     <del className="mr-2">₦7,000</del> |{" "}
      //     <p className="text-blue-400 ml-2">₦4,000</p>
      //   </div>
      // ),

      status: (
        <Badge
          count={show ? "UNPAID" : 0}
          style={{
            backgroundColor: "#EDB88B",
            marginTop: "20px",
            // marginLeft: "60px",
            color: "black",
          }}
        />
      ),
      action: <MoreOutlined />,
    },
    {
      id: 3,
      items: ["Ankara Crop Top", "23 stock remaining"],
      price: [7000, 4000],
      "order id": 68821238,
      date: "April 24, 2023",
      status: (
        <Badge
          count={show ? "PAID" : 0}
          style={{ backgroundColor: "#586449", marginTop: "20px" }}
        />
      ),
      action: <MoreOutlined />,
    },
    {
      id: 4,
      items: ["Aso Ebi", "10 stock remaining"],
      price: [7000, 4000],
      "order id": 68821238,
      date: "April 24, 2023",
      status: (
        <Badge
          count={show ? "UNPAID" : 0}
          style={{
            backgroundColor: "#EDB88B",
            marginTop: "20px",
            // marginLeft: "60px",
            color: "black",
          }}
        />
      ),
      action: <MoreOutlined />,
    },
    {
      id: 5,
      items: ["Ankara Crop Top", "23 stock remaining"],
      price: [7000, 4000],
      "order id": 68821238,
      date: "April 24, 2023",
      status: (
        <Badge
          count={show ? "PAID" : 0}
          style={{ backgroundColor: "#586449", marginTop: "20px" }}
        />
      ),
      action: <MoreOutlined />,
    },
    {
      id: 6,
      items: ["Aso Ebi", "10 stock remaining"],
      price: [7000, 4000],
      "order id": 68821238,
      date: "April 24, 2023",
      status: (
        <Badge
          count={show ? "UNPAID" : 0}
          style={{
            backgroundColor: "#EDB88B",
            marginTop: "20px",
            // marginLeft: "60px",
            color: "black",
          }}
        />
      ),
      action: <MoreOutlined />,
    },
    {
      id: 7,
      items: ["Ankara Crop Top", "23 stock remaining"],
      price: [7000, 4000],
      "order id": 68821238,
      date: "April 24, 2023",
      status: (
        <Badge
          count={show ? "UNPAID" : 0}
          style={{
            backgroundColor: "#EDB88B",
            marginTop: "20px",
            // marginLeft: "60px",
            color: "black",
          }}
        />
      ),
      action: <MoreOutlined />,
    },
  ])

  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "ITEMS",
      dataIndex: "items",
      render: (_: any, dataIndex: any) => {
        return (
          <div>
            {dataIndex.items == "Ankara Crop Top" ? (
              dataIndex.items == "Aso Ebi" ? (
                <p className="relative">
                  <img src={img} className="" />
                  <p className="absolute ml-5">{dataIndex.items}</p>
                </p>
              ) : (
                <p>
                  <img src={img1} className="size-10" />
                  <p> {dataIndex.items}</p>
                </p>
              )
            ) : (
              <p>
                <img src={img2} className="size-10" />
                <p> {dataIndex.name}</p>
              </p>
            )}
          </div>
        )
      },
    },
    {
      title: "ORDER ID",
      dataIndex: "order id",
    },
    {
      title: "DATE",
      dataIndex: "date",
    },
    {
      title: "PRICE",
      dataIndex: "price",
    },
    {
      title: "STATUS",
      dataIndex: "status",
    },
    {
      title: "ACTION",
      dataIndex: "action",
    },
  ]

  // Mobile Table Columns
  const deviceColumns = [
    {
      // title: "Student Data",
      render: (record: any) => {
        const items = record.items
        const price = record.price
        const date = record.date
        const status = record.status
        const orderId = record["order id"]
        return (
          <div className="mt-[-130px]">
            <div className="mt-[150px]">
              <div className="flex justify-between border border-1 p-1">
                <div>
                  <p className="text-[#94A382]">ITEMS</p>
                  <div className="flex">
                    <Image
                      src={img}
                      height={30}
                      width={30}
                      className="rounded-md"
                    />
                    <h4>
                      <p>{items[0]}</p>
                      <p>{items[1]}</p>
                    </h4>
                  </div>
                </div>

                <MoreOutlined />
              </div>

              <h4 className="border border-1 p-2">
                <p className="text-[#94A382]">ORDER ID</p>
                <p>{orderId}</p>
              </h4>

              <div className="border border-1 p-2">
                <p className="text-[#94A382]">DATE</p>
                <p>{date}</p>
              </div>

              <div className="border border-1 p-2">
                <p className="text-[#94A382]">PRICE</p>
                <div className="flex">
                  <del>₦{price[0]}</del>
                  <p>| ₦{price[1]}</p>
                </div>
              </div>
            </div>
            <div className="border border-1 p-2">
              <p className="text-[#94A382]">STATUS</p>
              <p>{status}</p>
            </div>
          </div>
        )
      },
    },
  ]

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [loading, setLoading] = useState(false)

  const start = () => {
    setLoading(true)
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([])
      setLoading(false)
    }, 1000)
  }

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys)
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }
  const hasSelected = selectedRowKeys.length > 0
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
        <b>Orders</b>
        <hr className="mt-2" />
        {/* AntD Responsive Grid for customer statistics----Start */}
        {/* <Divider orientation="left">Products</Divider> */}
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid md:grid-cols-4 md:gap-4 md:mt-5">
          <div className="flex bg-gray-100 p-3">
            <GiSewingMachine className="size-10 bg-[#586449] text-white p-1" />

            <div className="ml-5">
              <b>0</b>
              <p>Total Order</p>
            </div>
          </div>

          <div className="flex justify-between bg-gray-100 p-3">
            <TbCurrencyNaira className="size-10 bg-[#FAF3DF] p-2" />
            <div className="ml-5">
              <b>0</b>

              <p>Total Cost</p>
            </div>
            <p className="size-10"></p>
          </div>

          <div className="flex bg-gray-100 p-3">
            <BiBarChartAlt2 className="size-10 bg-[#EDB88B] p-2 text-white" />
            <div className="ml-5">
              <b>0</b>

              <p> Order</p>
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
              <b>0</b>

              <p> Order</p>
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
        {/* /Mobile Add, Search, Filter Buttons End */}
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        {width <= 640 ? (
          <Table
            bordered={false}
            columns={deviceColumns}
            dataSource={dataSource}
            pagination={{ pageSize: 10 }}
            className="ml-[-10px] mt-5"
          />
        ) : (
          <>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={dataSource}
              pagination={{ pageSize: 10 }}
            />

            <p className="mt-[-50px]">Items per page 10</p>
          </>
        )}
      </div>

      <p className="invisible md:visible md:mt-[-50px]">Items per page 10</p>
    </div>
  )
}

export default Order
