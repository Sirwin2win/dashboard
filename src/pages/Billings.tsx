import React, { useState, useEffect } from "react"
import img from "../assets/images/img.png"
import img1 from "../assets/images/img-1.png"
import img2 from "../assets/images/img-2.png"
import { RiFilterOffLine } from "react-icons/ri"
import { IoMdSearch } from "react-icons/io" // <IoMdSearch />
import { HiChevronDown } from "react-icons/hi" //  <HiChevronDown />
import { FaCalendarAlt } from "react-icons/fa"

import { Button, Table, Input, DatePicker, Form, Badge, Image } from "antd"
import { CloseCircleOutlined, MoreOutlined } from "@ant-design/icons"

const { Search } = Input
const { RangePicker } = DatePicker

const Billings: React.FC = () => {
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
      items: "Ade Wale",
      email: "adewale@gmail.com",
      amount: "$145862",
      "invoice id": "INV34-9860-3675",
      "billing date": "April 24, 2025",
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
      items: "Lucia Wale",
      email: "adewale@gmail.com",
      amount: "$145862",
      "invoice id": "INV34-9860-3675",
      "billing date": "April 24, 2025",
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
      items: "Musa Emeka",
      email: "adewale@gmail.com",
      amount: "$145862",
      "invoice id": "INV34-9860-3675",
      "billing date": "April 24, 2025",
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
      items: "Ade Wale",
      email: "adewale@gmail.com",
      amount: "$145862",
      "invoice id": "INV34-9860-3675",
      "billing date": "April 24, 2025",
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
      items: "Lucia Wale",
      email: "adewale@gmail.com",
      amount: "$145862",
      "invoice id": "INV34-9860-3675",
      "billing date": "April 24, 2025",
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
      items: "Musa Emeka",
      email: "adewale@gmail.com",
      amount: "$145862",
      "invoice id": "INV34-9860-3675",
      "billing date": "April 24, 2025",
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
      items: "Ade Wale",
      email: "adewale@gmail.com",
      amount: "$145862",
      "invoice id": "INV34-9860-3675",
      "billing date": "April 24, 2025",
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
      title: "CUSTOMERS",
      dataIndex: "customers",
      render: (_: any, dataIndex: any) => {
        return (
          <div>
            {dataIndex.items == "Ankara Crop Top" ? (
              dataIndex.name == "Aso Ebi" ? (
                <p className="relative">
                  <img src={img} className="" />
                  <p className="absolute ml-5">{dataIndex.name}</p>
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
      title: "INVOICE ID",
      dataIndex: "invoice id",
    },
    {
      title: "BILLING DATE",
      dataIndex: "billing date",
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
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
        const email = record.email
        const amount = record.amount
        const date = record["billing date"]
        const status = record.status
        const invoiceId = record["invoice id"]
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
                      <p>{items}</p>
                      <p>{email}</p>
                    </h4>
                  </div>
                </div>

                <MoreOutlined />
              </div>

              <h4 className="border border-1 p-2">
                <p className="text-[#94A382]">INVOICE ID</p>
                <p>{invoiceId}</p>
              </h4>

              <div className="border border-1 p-2">
                <p className="text-[#94A382]">BILLING DATE</p>
                <p>{date}</p>
              </div>

              <div className="border border-1 p-2">
                <p className="text-[#94A382]">AMOUNT</p>
                <div className="flex">
                  <p>₦{amount}</p>
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
    <div className="md:ml-[-150px]">
      {/* AntD Responsive Grid for product statistics----Start */}
      <b>Billing History</b>
      <p>Download previous invoices</p>
      <hr className="mt-5" />

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
          <Button className="invisible  md:visible rounded-full bg-[#586449] text-white">
            {/* <CloseCircleOutlined /> */}
            Download All
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
          <Button className="rounded-full bg-[#586449] text-white w-[210px]">
            {/* <CloseCircleOutlined /> */}
            Download All
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

        {width <= 640 ? (
          <Table
            bordered={false}
            columns={deviceColumns}
            dataSource={dataSource}
            // pagination={{ pageSize: 10 }}
            className="ml-[-10px] mt-[50px]"
          />
        ) : (
          <>
            <div style={{ marginBottom: 16 }}>
              <span style={{ marginLeft: 8 }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
              </span>
            </div>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={dataSource}
              pagination={{ pageSize: 10 }}
            />

            <p className="mt-[-50px]">Items per page 10</p>
          </>
        )}

        <p className="mt-[-50px]">Items per page 10</p>
      </div>
    </div>
  )
}

export default Billings
