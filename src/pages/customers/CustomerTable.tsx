import React, { useState, useEffect } from "react"
import Av1 from "../../assets/images/Av1.png"
import Av2 from "../../assets/images/Av3.png"
import Av3 from "../../assets/images/Av3.png"
import img from "../../assets/images/img-1.png"
import { CiSearch } from "react-icons/ci"
import { FaRegEnvelope } from "react-icons/fa"
import Ellipse from "../../assets/images/Ellipse.png"
import { TbCurrencyNaira } from "react-icons/tb"
import { BiBarChartAlt2 } from "react-icons/bi"
import { RiFilterOffLine } from "react-icons/ri"
import { GiSewingMachine } from "react-icons/gi"
import { IoMdSearch } from "react-icons/io" // <IoMdSearch />
import { HiChevronDown } from "react-icons/hi" //  <HiChevronDown />

import { Badge, Table, Input, DatePicker, Image, Button, Form } from "antd"
import {
  FilterOutlined,
  CloseCircleOutlined,
  MoreOutlined,
  AppstoreOutlined,
  BarsOutlined,
  HolderOutlined,
} from "@ant-design/icons"
import "./Customer.css"

const { Search } = Input
const { RangePicker } = DatePicker

const CustomerTable: React.FC = () => {
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
      name: ["ALBERT FLORES", "ID5636256"],
      email: "rela@yahoo.com",
      phone: "568556656565",
      location: "Lagos, Nigeria",
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
      name: ["Eleanor Pena", "ID5636256"],
      email: "tush@yahoo.com",
      phone: "568556656565",
      location: "Abuja, Nigeria",
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
      name: ["ALBERT FLORES", "ID5636256"],
      email: "prex@yahoo.com",
      phone: "568556656565",
      location: "Lagos, Nigeria",
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
      name: ["Cameron Williams", "ID5636256"],
      email: "leja@yahoo.com",
      phone: "568556656565",
      location: "Accra, Ghana",
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
      name: ["ALBERT FLORES", "ID5636256"],
      email: "mina@yahoo.com",
      phone: "568556656565",
      location: "Abuja, Nigeria",
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
      name: ["Cameron Williams", "ID5636256"],
      email: "prex@yahoo.com",
      phone: "568556656565",
      location: "Kumasi, Ghana",
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
      name: ["ALBERT FLORES", "ID5636256"],
      email: "prex@yahoo.com",
      phone: "568556656565",
      location: "Lagos, Nigeria",
      status: (
        <Badge
          count={show ? "PAID" : 0}
          style={{ backgroundColor: "#586449", marginTop: "20px" }}
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
      title: "NAME / CUSTOMER ID",
      dataIndex: "name",
      render: (_: any, dataIndex: any) => {
        return (
          <div>
            {dataIndex.id == "1" ? (
              dataIndex.id == "2" ? (
                <p className="relative">
                  <img src={Av1} className="" />
                  <p className="absolute ml-5">{dataIndex.name}</p>
                </p>
              ) : (
                <p>
                  <img src={Av2} className="size-10" />
                  <p> {dataIndex.name}</p>
                </p>
              )
            ) : (
              <p>
                <img src={Av3} className="size-10" />
                <p> {dataIndex.name}</p>
              </p>
            )}
          </div>
        )
      },
    },
    {
      title: "EMAIL",
      dataIndex: "email",
    },
    {
      title: "PHONE",
      dataIndex: "phone",
    },
    {
      title: "LOCATION",
      dataIndex: "location",
    },
    {
      title: "STATUS",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
    },
  ]
  // Mobile Table Columns
  const deviceColumns = [
    {
      // title: "Student Data",
      render: (record: any) => {
        const name = record.name
        const email = record.email
        const phone = record.phone
        const status = record.status
        const location = record.location
        return (
          <div className="mt-[-130px] ml-[-40px] px-5">
            <div className="mt-[150px]">
              <span className="flex justify-between border border-1 p-2">
                <div>
                  <p className="text-[#94A382]">NAME</p>
                  <div className="flex">
                    <Image
                      src={img}
                      height={30}
                      width={30}
                      className="rounded-md"
                    />
                    <h4>
                      <p>{name[0]}</p>
                      <p>{name[1]}</p>
                    </h4>
                  </div>
                </div>
                <h4>
                  <p className="text-[#94A382]">EMAIL</p>
                  <p>{email}</p>
                </h4>
                <p>
                  <MoreOutlined />
                </p>
              </span>
              <div className="flex justify-between border border-1 p-2">
                <div>
                  <p className="text-[#94A382]">PHONE</p>
                  <p>{phone}</p>
                </div>
                <div>
                  <p className="text-[#94A382]">LOCATION</p>
                  <p>{location}</p>
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
        <b>Customers</b>
        <hr className="mt-2" />

        {/* AntD Responsive Grid for customer statistics----Start */}
        {/* <Divider orientation="left">Products</Divider> */}
        <div className="grid grid-cols-1 gap-5 mt-3 md:grid md:grid-cols-4 md:gap-4 md:mt-5">
          <div className="flex bg-gray-100 p-3">
            <GiSewingMachine className="size-10 bg-[#586449] text-white p-1" />

            <div className="ml-5">
              <b>0</b>
              <p>Total Customers</p>
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
            <Badge
              count={show ? "PAID" : 0}
              style={{
                backgroundColor: "#586449",
                marginTop: "20px",
                fontFamily: "sora",
              }}
              className="ml-[30px] md:ml-[50px]"
            />
          </div>

          <div className="flex bg-gray-100 p-2">
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
                marginTop: "20px",
                marginLeft: "60px",
                color: "black",
                fontFamily: "sora",
              }}
              className="ml-[-35px] md:ml-[0px]"
            />
          </div>
        </div>
      </div>

      {/* AntD Responsive Grid for product statistics----End */}

      {/* Search | Filter | Pipe | DatePicker and AddNew Button */}
      <div className="md:border border-1">
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
          <DatePicker.RangePicker className="w-[210px] my-5" />
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
    </div>
  )
}

export default CustomerTable
