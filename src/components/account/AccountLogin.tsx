import React from "react"
import { Link } from "react-router-dom"
import "./Account.css"
import { Button, Form, Input } from "antd"
import register from "../../assets/images/register.png"
import logo from "../../assets/images/logo.png"

const Login: React.FC = () => (
  <div className="md:flex md:justify-between">
    {/* Left Div */}
    <div className="invisible md:visible md:mt-0 md:bg-[#FBF1E8] md:p-[50px] md:h-screen">
      <img
        src={register}
        alt=""
        className="h-[250px] w-[250px] mt-[150px] ml-[90px]"
      />
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
      className="mt-[-500px] px-[56px] py-[24px] md:w-screen md:h-screen md:p-[100px]
      md:mt-2"
    >
      <div>
        <img src={logo} className="gap-[2px]" />
      </div>
      <div className="mt-5">
        <h1 className="font-[700] text-[20px] leading-[27.2px] text-[#1E1E1E]">
          Hi, Welcome back!
        </h1>
        <h1 className="font-[400] text-[14px] leading-[21.84px] text-[#4B4B4B] my-5">
          Continue where you left off
        </h1>

        <Form
          className="formContainer relative"
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
          >
            <Input
              placeholder="adaclare22@gmail.com"
              className="rounded-full"
            />
          </Form.Item>
          <p className="absolute ml-[150px] z-10 md:ml-[380px]">
            <Link to={"/password-reset"} className="text-blue-500">
              Forgot password?
            </Link>
          </p>
          <Form.Item
            hasFeedback
            label="Password"
            name="password"
            validateFirst
            rules={[{ max: 6 }]}
          >
            <Input placeholder="--Enter--" className="rounded-full" />
          </Form.Item>
          <Button className="bg-gray-200 rounded-full text-gray-500 w-full">
            <Link to={"/"}>Create account</Link>
          </Button>

          <p className="ml-[100px] mt-5">
            Don't have an account?
            <Link to={"/sign-up"} className="ml-1 text-blue-500">
              Sign Up Here
            </Link>
          </p>
        </Form>
      </div>
    </div>
  </div>
)
export default Login
