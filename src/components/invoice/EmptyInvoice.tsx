import React, { useState } from "react"
import naira from "../../assets/images/naira.png"
import gif from "../../assets/images/gif.png"
import { Badge, Button, Image } from "antd"
import { TbCurrencyNaira } from "react-icons/tb"
import { GiSewingMachine } from "react-icons/gi"
import { BiBarChartAlt2 } from "react-icons/bi"
import { CiSearch } from "react-icons/ci"
import { FaRegEnvelope } from "react-icons/fa"
import Ellipse from "../../assets/images/Ellipse.png"
import { CloseCircleOutlined, MoreOutlined } from "@ant-design/icons"

const EmptyOrder = () => {
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
        <b>Invoice</b>
        <hr className="mt-2" />
        {/* AntD Responsive Grid for customer statistics----Start */}
        {/* <Divider orientation="left">Products</Divider> */}
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid md:grid-cols-4 md:gap-4 md:mt-5">
          <div className="flex bg-gray-100 p-3">
            <GiSewingMachine className="size-10 bg-[#586449] text-white p-1" />

            <div className="ml-5">
              <b>0</b>
              <p>Total Invoice</p>
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

              <p> Invoice</p>
            </div>
            <p className="size-10"></p>
            {/* <p className="bg-brightOrange rounded-full mt-5 text-white justify-self-end text-center w-[100px] h-[20px]">
                  UNPAID
                </p> */}
            <Badge
              count={show ? "PAID" : 0}
              style={{
                backgroundColor: "#586449",
                marginTop: "20px",
                fontFamily: "sora",
              }}
              className="ml-[-10px] md:ml-[100px]"
            />
          </div>

          <div className="flex bg-gray-100 p-3">
            <BiBarChartAlt2 className="size-10 bg-green-500 p-2 text-white" />
            <div className="ml-5">
              <b>0</b>

              <p> Invoice</p>
            </div>
            <p className="size-10"></p>
            {/* <p className="bg-brightOrange rounded-full mt-5 text-white justify-self-end text-center w-[100px] h-[20px]">
                  UNPAID
                </p> */}
            <Badge
              count={show ? "PENDING" : 0}
              style={{
                backgroundColor: "#F67F00",
                marginTop: "20px",
                marginLeft: "60px",
                color: "WHITE",
                fontFamily: "sora",
              }}
              className="ml-[-80px] md:ml-[10px]"
            />
          </div>
        </div>

        {/* AntD Responsive Grid for product statistics----End */}
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
            <p className="mt-5 ml-[-20px]">
              You currently don't have any invoice
            </p>
            <p className="ml-[-30px]">
              {" "}
              Your Invoice will display here once you
            </p>
            <p className="ml-[10px]"> create an invoice for a user</p>
          </div>
          <Button className="rounded-full bg-brightOrange text-white">
            <CloseCircleOutlined /> Ceate New
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EmptyOrder
