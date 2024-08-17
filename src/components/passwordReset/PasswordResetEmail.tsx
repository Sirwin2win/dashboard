import React from "react"
import { Link } from "react-router-dom"
// import "../style/Components.css"
import { Button, Form, Input } from "antd"
import reset from "../../assets/images/reset.png"
import logo2 from "../../assets/images/logo2.png"
import logo from "../../assets/images/logo.png"

const PasswordResetEmail: React.FC = () => (
  <div className="md:flex md:justify-between md:h-screen">
    {/* Left Div */}
    <div className="invisible md:visible md:bg-[#FAF3DF] md:w-[852px]">
      <img
        src={reset}
        className="h-[250px] w-[250px] mt-[150px] ml-[70px] md:mt-[50px]"
      />
      <div>
        <p className="welcomeMessage ml-[50px] mt-[20px]">
          Lost Password Reset
        </p>
        <p className="welcomeMessage2 ml-[50px] mt-[20px]">
          Forgotten your password? Enter your email
        </p>
        <p className="welcomeMessage2 ml-[50px] mt-[-5px]">
          {" "}
          address below to begin the reset process.
        </p>
      </div>
    </div>
    {/* Right Div */}
    <div className="p-[20px] md:p-[80px] md:h-screen md:w-[852px]">
      <div className="invisible md:visible ">
        <img src={logo2} className="size-30" />
        {/* <img src={logo} className="md:invisible size-100 p-[100px]" /> */}
      </div>
      <div className="mt-[-500px]">
        <div className="visible  md:invisible">
          <img src={logo} className="" />
        </div>
        <div className="visible p-[70px] md:invisible">
          <img src={reset} className="" />
        </div>
      </div>
      <div className="mt-[-30px]">
        <p className="font-[700] text-[20px] leading-[27.2px] text-[#1E1E1E] ml-[60px] md:ml-[0px]">
          Lost Password Reset
        </p>
        <p className="font-[400] text-[14px] leading-[21.84px] text-[#4B4B4B] ml-5 my-5 md:ml-[0px]">
          Forgotten your password? Enter your email address below to begin the
          reset process.
        </p>

        <Form
          className="md:w-[600px]"
          name="trigger"
          // style={{ maxWidth: 600 }}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            hasFeedback
            label="Email"
            name="email"
            validateFirst
            rules={[{ max: 6 }]}
            className="mt-8"
          >
            <Input
              placeholder="adaclare22@gmail.com"
              className="rounded-full"
            />
          </Form.Item>
          <Button className="bg-brightOrange text-white rounded-full w-[330.8px] mt-3 md:ml-[520px] md:size-auto">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  </div>
)

export default PasswordResetEmail
