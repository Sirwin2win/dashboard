import React, { useState, useEffect } from "react"
import img from "../../assets/images/img.png"
import img1 from "../../assets/images/img-1.png"
import img2 from "../../assets/images/img-2.png"
import { TbCurrencyNaira } from "react-icons/tb"
import { RiFilterOffLine } from "react-icons/ri"
import { CiSearch } from "react-icons/ci"
import { FaRegEnvelope } from "react-icons/fa"
import Ellipse from "../../assets/images/Ellipse.png"
import { IoMdSearch } from "react-icons/io" // <IoMdSearch />
import { HiChevronDown } from "react-icons/hi" //  <HiChevronDown />

import { Button, Table, Input, Badge, Form, Image, DatePicker } from "antd"
import { CloseCircleOutlined, MoreOutlined } from "@ant-design/icons"
import "./Transaction.css"

const { Search } = Input
const { RangePicker } = DatePicker

const History: React.FC = () => {
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
      items: ["Ankra Crop Top", "23 stocks remaining"],
      amount: "$145862",
      date: "03/08/20",
      shipping: "Shipping | Delivered",
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
      items: "Aso Ebi",
      amount: "$145862",
      date: "03/08/20",
      shipping: "Shipping | Delivered",
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
      items: "Ankara Crop Top",
      amount: "$145862",
      date: "03/08/20",
      shipping: "Shipping | Pickup",
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
      items: "Aso Ebi",
      amount: "$145862",
      date: "03/08/20",
      shipping: "Shipping | Delivered",
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
      items: "Ankra Crop Top",
      amount: "$145862",
      date: "03/08/20",
      shipping: "Shipping | Pickup",
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
      items: "Aso Ebi",
      amount: "$145862",
      date: "03/08/20",
      shipping: "Shipping | Delivered",
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
      items: "Akara Crop Top",
      amount: "$145862",
      date: "03/08/20",
      shipping: "Shipping | Pickup",
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
          <div className="text-brightOrange">
            {dataIndex.items[0] == "Ankara Crop Top" ? (
              dataIndex.name == "Aso Ebi" ? (
                <p className="relative">
                  <img src={img} className="" />
                  <p className="absolute ml-5">{dataIndex.items[0]}</p>
                </p>
              ) : (
                <p>
                  <img src={img1} className="size-10" />
                  <p> {dataIndex.name}</p>
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
      title: "AMOUNT",
      dataIndex: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "SHIPPING",
      dataIndex: "shipping",
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

  // const isWebDevice = useMediaQuery('(min-width:700px)');
  const deviceColumns = [
    {
      // title: "Student Data",
      render: (record: any) => {
        const status = record.status
        const shipping = record.shipping
        const amount = record.amount
        const date = record.date
        return (
          <div className="mt-[-130px]">
            <div className="border border-2 mt-[150px]">
              <span className="flex justify-between ">
                <h4>ITEMS</h4>
                <MoreOutlined />
              </span>
              <div className="flex">
                <Image
                  src={img}
                  height={30}
                  width={30}
                  className="rounded-md"
                />
                <div className="mt-5">
                  <b>Ankra Crop Top</b>
                  <p className="text-gray-300">23 stocks remaining</p>
                </div>
              </div>
            </div>

            <div className="border border-2">
              <h4>AMOUNT</h4>
              <h4>{amount}</h4>
            </div>

            <div className="border border-2">
              <h4>DATE</h4>
              <h4>{date}</h4>
            </div>

            <div className="border border-2">
              <h4>SHIPPING</h4>
              <h4>{shipping}</h4>
            </div>

            <div className="border border-2">
              <h4>STATUS</h4>
              <h4>{status}</h4>
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
        <b>Transaction History</b>
        <hr className="mt-2" />

        {/* AntD Responsive Grid for customer statistics----Start */}
        {/* <Divider orientation="left">Products</Divider> */}
        <div className="grid grid-cols-1 gap-5 p-5 md:grid md:grid-cols-4 md:gap-4 md:mt-5">
          <div className="flex bg-gray-100 p-3">
            <TbCurrencyNaira className="size-10 bg-[#586449] text-white p-1" />

            <div className="ml-5">
              <b>0</b>
              <p>Total Transaction</p>
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
            <TbCurrencyNaira className="size-10 bg-[#EDB88B] p-2" />
            <div className="ml-5">
              <b>0</b>

              <p> Transaction</p>
            </div>
            <p className="size-10"></p>
            <Badge
              count={show ? "PAID" : 0}
              style={{
                backgroundColor: "#586449",
                marginTop: "20px",
                fontFamily: "sora",
              }}
              className="ml-[50px] md:ml-[50px]"
            />
          </div>

          <div className="flex bg-gray-100 p-2">
            <TbCurrencyNaira className="size-10 bg-green-500 p-2 text-white" />
            <div className="ml-5">
              <b>0</b>

              <p> Transaction</p>
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
              className="md:ml-[0px]"
            />
          </div>
        </div>

        {/* AntD Responsive Grid for product statistics----End */}

        {/* Search | Filter | Pipe | DatePicker and AddNew Button */}
        <div className="md:flex md:justify-between md:my-5">
          <div className="px-5 md:flex">
            {/* <Search
              placeholder="input search text"
              className="md:w-[150px] bg-gray-100 "
            /> */}
            {/* Filter Button */}
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
              <hr className="mt-5" />

              <Input
                prefix={<RiFilterOffLine />}
                // prefix={<TiAttachment />}
                suffix={<HiChevronDown />}
                className="rounded-full my-5"
                placeholder="Filter"
              />

              <DatePicker.RangePicker />

              {/* <RiFilterOffLine className="size-8 mx-5" />

              <RiFilterOffLine className="size-8 mx-5" /> */}
            </Form>
            <span className="invisible md:visible md:mr-5">Filter |</span>
          </div>
          <Button className="invisible md:visible rounded-full bg-brightOrange text-white">
            <CloseCircleOutlined /> Add New
          </Button>
        </div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <Table
          bordered={false}
          rowSelection={rowSelection}
          columns={width <= 640 ? deviceColumns : columns}
          dataSource={dataSource}
          pagination={{ pageSize: 10 }}
        />

        <p className="mt-[-50px]">Items per page 10</p>
      </div>
    </div>
  )
}

export default History
