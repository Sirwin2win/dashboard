import React, { useState } from "react"
import gif from "../../assets/images/gif.png"
import { TbCurrencyNaira } from "react-icons/tb"
import { GiSewingMachine } from "react-icons/gi"
import { BiBarChartAlt2 } from "react-icons/bi"
import { Badge, Button } from "antd"

const Customers = () => {
  const [show, setShow] = useState(true)
  return (
    <div>
      <div>
        <b>CUSTOMERS</b>
        <hr className="mt-2" />
        {/* AntD Responsive Grid for product statistics----Start */}
        {/* <Divider orientation="left">Products</Divider> */}
        <div className="grid grid-cols-4 gap-4 mt-5">
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
              <b>0</b>

              <p> Order</p>
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
          <div className="my-5">
            <b className="ml-[110px]">What are you selling?</b>
            <p className="ml-[30px] mt-5">
              You currently don't have any customer to display. Kindly{" "}
            </p>
            <p className="ml-[90px]"> click "Add New Customer" to proceed.</p>
          </div>
          <Button className="bg-brightOrange text-white rounded-full">
            Add New Customer
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Customers
