import React from "react"
import { Link } from "react-router-dom"
import "./Account.css"
import { Button, Form, Input } from "antd"
import register from "../../assets/images/register.png"
import logo from "../../assets/images/logo.png"

const AccountSignUp: React.FC = () => (
  <div className="md:flex md:justify-between md:h-screen">
    {/* Left Div */}
    <div className="invisible mt-[-500px] md:visible md:mt-0 md:bg-[#FBF1E8] md:p-[50px] md:h-screen">
      <img src={register} alt="" className="px-[50px]" />
      <div>
        <p className="welcomeMessage ml-[50px] mt-[20px]">
          Grow your business here
        </p>
        <p className="welcomeMessage2 ml-[50px] mt-[20px]">
          Build your business with Trada to sell anywhere and
        </p>
        <p className="welcomeMessage2 ml-[80px] mt-[-5px]">
          {" "}
          everywhere, including online and offline.
        </p>
      </div>
    </div>
    {/* Right Div */}
    <div
      className="px-[25px] py-[56px] mt-[44px] gap-[36px]
     w-[375px] h-[768px] md:w-[600px] md:h-screen md:p-[10px]
      md:mt-2"
    >
      <img src={logo} className="mb-5 md:mb-2" />
      <div className="">
        <h1 className="font-[700] text-[20px] leading-[27.2px] text-[#1E1E1E]">
          Let's sign you up. Which of these best describes you?
        </h1>
        <h1 className="w-[327px] h-[44px] font-[400] text-[14px] leading-[21.84px] text-[#4B4B4B] mt-5 md:mt-2">
          We'll assist you in getting set up based on your business
          requirements.
        </h1>
        {/* Sign In Form */}
        <Form
          className="h-[50px] mt-5 md:mt-2 md:h-[10px] md:pr-[80px]"
          name="trigger"
          // style={{ maxWidth: 600 }}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            hasFeedback
            label="First Name"
            name="fname"
            validateFirst
            rules={[{ max: 6 }]}
            className="h-[38px]"
          >
            <Input
              placeholder="Enter your First Name"
              className="rounded-full"
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Last Name"
            name="lname"
            validateFirst
            rules={[{ max: 6 }]}
            className="h-[38px]"
          >
            <Input placeholder="Enter your Surname" className="rounded-full" />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Business Name"
            name="bname"
            validateFirst
            rules={[{ max: 6 }]}
            className="h-[38px]"
          >
            <Input
              placeholder="Enter your Business Name"
              className="rounded-full"
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Phone"
            name="phone"
            validateFirst
            rules={[{ max: 6 }]}
            className="h-[38px]"
          >
            <Input placeholder="+234 ......" className="rounded-full" />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Email"
            name="email"
            validateFirst
            rules={[{ max: 6 }]}
            className="h-[38px]"
          >
            <Input
              placeholder="adaclare22@gmail.com"
              className="rounded-full"
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Password"
            name="password"
            validateFirst
            rules={[{ max: 6 }]}
            className="h-[38px]"
          >
            <Input placeholder="--Enter--" className="rounded-full" />
          </Form.Item>

          <Button className="bg-gray-200 rounded-full text-gray-500 w-full mt-5 md:mt-4">
            <Link to={"/"}>Create account</Link>
          </Button>

          <p className="mt-3 md:ml-[100px]">
            Already Have An Account?
            <Link to={"/sign-in"} className="ml-1 text-blue-500">
              Login Here
            </Link>
          </p>
        </Form>
      </div>
    </div>
  </div>
)
export default AccountSignUp
