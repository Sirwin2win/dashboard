import React from "react"
import { Card } from "antd"
import image from "../../assets/images/sewing.png"
import LoginButton from "../button/LoginButton"
import "./Reset.css"

const SuccessReset: React.FC = () => (
  <div className="container mx-auto max-w-sm space-y-3 justify-center items-center shadow-xl">
    <Card bordered={false} style={{ width: 350 }}>
      <div className="successReset">
        <img src={image} className="rounded-full size-20" alt="" />
      </div>
      <div>
        <h1 className="mt-5 ml-20">Successful Password Reset</h1>
        <p className="my-5 text-md">
          You have Successfully changed your password
        </p>
        <LoginButton />
      </div>
    </Card>
  </div>
)

export default SuccessReset
