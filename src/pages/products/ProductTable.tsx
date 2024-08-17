import React, { useState, useEffect } from "react"
import img from "../../assets/images/img.png"
import img1 from "../../assets/images/img-1.png"
import img2 from "../../assets/images/img-2.png"
import img3 from "../../assets/images/img-3.png"

import { Table, Input, DatePicker, Image } from "antd"
import { MoreOutlined } from "@ant-design/icons"

const { Search } = Input
const { RangePicker } = DatePicker

const ProductTable: React.FC = () => {
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
      name: "Wedding",
      image: <Image src={img} className="size-10" />,
      price: "$145862",
      date: "03/08/20",
      action: <MoreOutlined />,
    },
    {
      id: 2,
      name: "Asoebi",
      image: <Image src={img1} className="size-10" />,
      price: "$2584",
      color: "BROWN",
      date: "03/08/20",
      action: <MoreOutlined />,
    },
    {
      id: 3,
      name: "Wedding",
      image: <Image src={img2} className="size-10" />,
      price: "$15528",
      color: "BLUE",
      date: "03/08/20",
      action: <MoreOutlined />,
    },
    {
      id: 4,
      name: "Asoebi",
      image: <Image src={img3} className="size-10" />,
      price: "$12356",
      color: "BROWN",
      date: "03/08/20",
      action: <MoreOutlined />,
    },
    {
      id: 5,
      name: "Wedding",
      image: <Image src={img} className="size-10" />,
      price: "$145862",
      color: "BLUE",
      date: "03/08/20",
      action: <MoreOutlined />,
    },
    {
      id: 6,
      name: "Asoebi",
      image: <Image src={img1} className="size-10" />,
      price: "$3652",
      color: "BROWN",
      date: "03/08/20",
      action: <MoreOutlined />,
    },
    {
      id: 7,
      name: "Wedding",
      image: <Image src={img} className="size-10" />,
      price: "$145862",
      color: "BLUE",
      date: "03/08/20",
      action: <MoreOutlined />,
    },
  ])

  const columns = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
      render: (_: any, dataIndex: any) => {
        return (
          <div>
            {dataIndex.name == "Wedding" ? (
              dataIndex.name == "Asoebi" ? (
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
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Date",
      dataIndex: "date",
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
        const image = record.image
        const price = record.price
        const date = record.date
        const color = record.color
        const action = record.action
        return (
          <div className="mt-[-150px] w-[200px]">
            <div className="mt-[150px]">
              {/* <span className="flex justify-between border border-1 p-1"> */}
              <div className="flex justify-between border border-1">
                <div>
                  <p className="text-[#94A382] p-2">PRODUCT NAME</p>
                  <div className="flex p-2">
                    <Image
                      src={img}
                      height={30}
                      width={30}
                      className="rounded-md"
                    />
                    <p className="p-1">{name}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[#94A382] p-2">PRICE</p>
                  <p>{price}</p>
                </div>

                <p>
                  <MoreOutlined />
                </p>
              </div>
              <div className="flex justify-between border border-1 p-2">
                <div className="">
                  <p className="text-[#94A382]">DATE</p>
                  <p>{date}</p>
                </div>
                <div>
                  <p className="text-[#94A382]">COLOUR</p>
                  <p>{color}</p>
                </div>
              </div>
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
    <div className="">
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
  )
}

export default ProductTable
