import React, { useState } from "react"
import gif from "../../assets/images/gif.png"
import { TbCurrencyNaira } from "react-icons/tb"
import { GiSewingMachine } from "react-icons/gi"
import { BiBarChartAlt2 } from "react-icons/bi"
import { Badge, Button, Image } from "antd"
import { CiSearch } from "react-icons/ci"
import { FaRegEnvelope } from "react-icons/fa"
import Ellipse from "../../assets/images/Ellipse.png"

const Customers = () => {
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
        <b className="ml-5">CUSTOMERS</b>
        <hr className="my-2 px-5" />
        {/* AntD Responsive Grid for customer statistics----Start */}
        {/* <Divider orientation="left">Products</Divider> */}
        <div className="grid grid-cols-1 gap-5 p-5 md:grid md:grid-cols-4 md:gap-4 md:mt-5">
          <div className="flex bg-gray-100 p-3">
            <GiSewingMachine className="size-10 bg-[#586449] text-white p-1" />

            <div className="ml-5">
              <b>0</b>
              <p>Total Customer</p>
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
                marginTop: "20px",
                fontFamily: "sora",
              }}
              className="ml-[80px] md:ml-[100px]"
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
                marginTop: "20px",
                marginLeft: "60px",
                color: "black",
                fontFamily: "sora",
              }}
              className="ml-[0px] md:ml-[60px]"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <img src={gif} className="size-[100px]" />
          <div className="p-[25px]">
            <p className="ml-[30px] mt-5 indent-5 md:px-[100px]">
              You currently don't have any customer to display. Kindly click
              "Add New Customer" to proceed.
            </p>
          </div>
          <Button className="bg-brightOrange text-white rounded-full w-[250px]">
            Add New Customer
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Customers
