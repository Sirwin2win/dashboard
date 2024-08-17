import React, { useState } from "react"
import { GiSewingMachine } from "react-icons/gi"
import { BiBarChartAlt2 } from "react-icons/bi"
import { RiFilterOffLine } from "react-icons/ri"
import { TfiAngleRight } from "react-icons/tfi"
import img from "../../assets/images/img.png"
import img1 from "../../assets/images/img-1.png"
import img2 from "../../assets/images/img-2.png"
import img3 from "../../assets/images/img-3.png"
import img4 from "../../assets/images/img-4.png"
import { TiMediaPlay } from "react-icons/ti"
import { FaRegTrashCan } from "react-icons/fa6"
import { Button, Table, Input, DatePicker, Form, Badge, Image } from "antd"
import { MoreOutlined } from "@ant-design/icons"
import { TiAttachment } from "react-icons/ti"
import { TiMicrophoneOutline } from "react-icons/ti"
import { FaCheckDouble } from "react-icons/fa6"
import { FaRegFaceSmile } from "react-icons/fa6"

const { Search } = Input
const { RangePicker } = DatePicker

const Request = () => {
  const [show, setShow] = useState(true)
  const [dataSource, setDataSource] = useState([
    {
      items: "Ankara Crop Top",
      price: (
        <div className="flex">
          <del className="mr-2">₦7,000</del> |{" "}
          <p className="text-blue-400 ml-2">₦4,000</p>
        </div>
      ),

      status: (
        <Badge
          count={show ? "PAID" : 0}
          style={{ backgroundColor: "#586449", marginTop: "20px" }}
        />
      ),
      action: <TfiAngleRight />,
    },
    {
      items: "Aso Ebi",

      price: (
        <div className="flex">
          <del className="mr-2">₦7,000</del> |{" "}
          <p className="text-blue-400 ml-2">₦4,000</p>
        </div>
      ),

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
      action: <TfiAngleRight />,
    },
    {
      items: "Ankara Crop Top",
      price: (
        <div className="flex">
          <del className="mr-2">₦7,000</del> |{" "}
          <p className="text-blue-400 ml-2">₦4,000</p>
        </div>
      ),
      status: (
        <Badge
          count={show ? "PAID" : 0}
          style={{ backgroundColor: "#586449", marginTop: "20px" }}
        />
      ),
      action: <TfiAngleRight />,
    },
    {
      items: "Aso Ebi",
      price: (
        <div className="flex">
          <del className="mr-2">₦7,000</del> |{" "}
          <p className="text-blue-400 ml-2">₦4,000</p>
        </div>
      ),
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
      action: <TfiAngleRight />,
    },
    {
      items: "Ankara Crop Top",
      price: (
        <div className="flex">
          <del className="mr-2">₦7,000</del> |{" "}
          <p className="text-blue-400 ml-2">₦4,000</p>
        </div>
      ),
      status: (
        <Badge
          count={show ? "PAID" : 0}
          style={{ backgroundColor: "#586449", marginTop: "20px" }}
        />
      ),
      action: <TfiAngleRight />,
    },
    {
      items: "Aso Ebi",
      price: (
        <div className="flex">
          <del className="mr-2">₦7,000</del> |{" "}
          <p className="text-blue-400 ml-2">₦4,000</p>
        </div>
      ),
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
      action: <TfiAngleRight />,
    },
    {
      items: "Ankara Crop Top",
      price: (
        <div className="flex">
          <del className="mr-2">₦7,000</del> |{" "}
          <p className="text-blue-400 ml-2">₦4,000</p>
        </div>
      ),
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
      action: <TfiAngleRight />,
    },
  ])

  const columns = [
    {
      title: <p className="bg-[#586449] text-white">SELECT ALL</p>,
      dataIndex: "items",
      render: (_: any, dataIndex: any) => {
        return (
          <div>
            {dataIndex.items == "Ankara Crop Top" ? (
              dataIndex.items == "Aso Ebi" ? (
                <p className="relative">
                  <img src={img} className="rounded-full" />
                  <p className="absolute ml-5">{dataIndex.items}</p>
                </p>
              ) : (
                <p>
                  <img src={img1} className="size-10 rounded-full" />
                  <p> {dataIndex.items}</p>
                </p>
              )
            ) : (
              <p>
                <img src={img2} className="size-10 rounded-full" />
                <p> {dataIndex.name}</p>
              </p>
            )}
          </div>
        )
      },
    },

    {
      title: "",
      dataIndex: "status",
    },
    {
      title: (
        <p className="flex text-red-500">
          <FaRegTrashCan />
          <p className="ml-3 mt-[-5px] text-red-500">Delete</p>
        </p>
      ),
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
    <div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        <div className="flex bg-gray-100 p-3">
          <GiSewingMachine className="size-10 bg-[#586449] text-white p-1" />

          <div className="ml-5">
            <b>24</b>
            <p>Total Request</p>
          </div>
        </div>

        <div className="flex justify-between bg-gray-100 p-3">
          <BiBarChartAlt2 className="size-10 bg-burlywood p-2 text-white" />
          <div className="ml-5">
            <b>16</b>

            <p> Request</p>
          </div>
          <p className="size-10"></p>
          <Badge
            count={show ? "CLOSED" : 0}
            style={{
              backgroundColor: "#586449",
              marginTop: "20px",
              fontFamily: "sora",
            }}
          />
        </div>

        <div className="flex bg-gray-100 p-3">
          <BiBarChartAlt2 className="size-10 bg-green-500 p-2 text-white" />
          <div className="ml-5">
            <b>8</b>

            <p> Request</p>
          </div>
          <p className="size-10"></p>
          {/* <p className="bg-brightOrange rounded-full mt-5 text-white justify-self-end text-center w-[100px] h-[20px]">
                  UNPAID
                </p> */}
          <Badge
            count={show ? "PENDING" : 0}
            style={{
              backgroundColor: "hsl(31, 100%, 48%)",
              marginTop: "20px",
              marginLeft: "60px",
              color: "white",
              fontFamily: "sora",
            }}
          />
        </div>

        <div className="flex bg-gray-100 p-3">
          <BiBarChartAlt2 className="size-10 bg-green-500 p-2 text-white" />
          <div className="ml-5">
            <b>8</b>

            <p> Request</p>
          </div>
          <p className="size-10"></p>
          {/* <p className="bg-brightOrange rounded-full mt-5 text-white justify-self-end text-center w-[100px] h-[20px]">
                  UNPAID
                </p> */}
          <Badge
            count={show ? "OPENED" : 0}
            style={{
              backgroundColor: "#EDB88B",
              marginTop: "20px",
              marginLeft: "60px",
              color: "black",
              fontFamily: "sora",
            }}
          />
        </div>
      </div>
      {/* Search | Filter | Pipe | DatePicker and AddNew Button */}
      <div className="flex justify-between mt-[50px]">
        <div className="flex">
          <Search
            placeholder="input search text"
            className="w-[150px] bg-gray-100"
          />
          <p>
            <RiFilterOffLine className="size-8 mx-5" />
          </p>
          <span className="mr-5">Filter</span>|
        </div>
        <Button className="rounded-full bg-brightOrange text-white">
          New Request
        </Button>
      </div>
      <hr className="mt-3" />
      <div className="grid grid-cols-2 gap-4 mt-5">
        <div>
          {" "}
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
            pagination={{ pageSize: 10 }}
          />
        </div>
        <div className="mx-5 bg-gray-200">
          {/* Image, name and email */}
          <div className="flex justify-between bg-white h-25 rounded-lg mt-2 mx-2 p-2">
            <div className="flex">
              <Image src={img} className="rounded-full" />
              <div className="ml-2">
                <p>Ameh Preye</p>
                <p>@preyecusmetics</p>
              </div>
            </div>
            {/* Pipe and dots */}
            <div>
              <p>
                |<MoreOutlined />{" "}
              </p>
            </div>
          </div>
          <div className="my-2 bg-white mx-2 h-screen rounded-lg">
            <div className="flex p-5">
              <Image
                src={img}
                className="rounded-full"
                height={30}
                width={30}
              />
              <p className="mr-5 bg-gray-200 h-10">
                Lorem ipsum dolor set amite{" "}
              </p>
              10:55 pm
            </div>
            <div className="flex justify-end mt-5">
              11:56 pm
              <p className="ml-5 bg-pink-200 h-10">
                Lorem ipsum dolor set amite
              </p>
              <Image
                src={img1}
                className="rounded-full"
                height={30}
                width={30}
              />
            </div>
            <div className="flex my-5">
              <Image
                src={img}
                className="rounded-full mr-[50px]"
                height={30}
                width={30}
              />
              <p className="mx-5 flex">
                {" "}
                <Image src={img2} className="rounded-lg" />
                <Image src={img3} className="rounded-lg" />
                <Image src={img4} className="rounded-lg" />{" "}
              </p>
              10:55 pm
            </div>
            <div className="flex justify-end mt-5">
              11:56 pm
              <p className="ml-5 bg-pink-200 h-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                efficitur gravida condimentum. Mauris vitae metus purus. Morbi
                maximus a velit
              </p>
              <Image src={img1} className="rounded-full" />
            </div>
            <div className="flex my-5">
              <Image
                src={img}
                className="rounded-full mr-[50px]"
                height={30}
                width={30}
              />
              <p className="mx-5 flex bg-gray-200">
                <TiMediaPlay className="size-6" />
                <p>hjkhjhj</p>
              </p>
              10:55 pm
            </div>
            <div className="flex justify-end mt-5">
              11:56 pm
              <p className="flex ml-5 bg-pink-200 h-auto">
                <h5>Okay </h5>
                <h5> &#129309;</h5>
              </p>
              <Image
                src={img1}
                className="rounded-full"
                height={30}
                width={30}
              />
            </div>
          </div>
          <div className="flex justify-bewteen ">
            <Form>
              <Input
                prefix={<FaRegFaceSmile />}
                // prefix={<TiAttachment />}
                suffix={<TiMicrophoneOutline />}
                className="rounded-full"
                placeholder="Type your message"
              />
            </Form>
            <p className="flex bg-brightOrange text-white w-15 ml-[80px] rounded-full p-2">
              <p> send </p>
              <FaCheckDouble className="ml-3 mt-1" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Request
