import React, { useState } from "react"
import img from "../../assets/images/img.png"
import img1 from "../../assets/images/img-1.png"
import img2 from "../../assets/images/img-2.png"
import img3 from "../../assets/images/img-3.png"

import { Button, Table, Input, DatePicker, Col, Badge, Row, Image } from "antd"
import {
  FilterOutlined,
  CloseCircleOutlined,
  MoreOutlined,
  AppstoreOutlined,
  BarsOutlined,
  HolderOutlined,
} from "@ant-design/icons"

const { Search } = Input
const { RangePicker } = DatePicker

const TransactionTable: React.FC = () => {
  const [show, setShow] = useState(true)
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      items: "Ankara Crop Top",
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
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 10 }}
      />

      <p className="mt-[-50px]">Items per page 10</p>
    </div>
  )
}

export default TransactionTable
