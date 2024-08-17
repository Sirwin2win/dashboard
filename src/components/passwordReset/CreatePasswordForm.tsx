import React from "react"
import { Link } from "react-router-dom"
import { Button, Form, Input } from "antd"
import reset from "..//../assets/images/reset.png"
// import SubmitButton from "../button/SubmitButton"
import ResetCodeSent from "./ResetCodeSent"

const CreatePasswordForm: React.FC = () => (
  <div className="container mx-auto flex">
    <div className="flex-1 flex-auto">
      <img src={reset} alt="" className="img asu" />
    </div>
    <div className="flex-1 flex-auto p-20 shadow-lg asu">
      <h1 className="ml-40 text-3l font-bold">Welcome Back!</h1>
      <Form
        name="trigger"
        style={{ maxWidth: 600 }}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          hasFeedback
          label="Password"
          name="password"
          validateFirst
          rules={[{ max: 6 }]}
        >
          <Input placeholder="******************" />
        </Form.Item>

        <Form.Item
          hasFeedback
          label="Confirm Password"
          name="password2"
          validateFirst
          rules={[{ max: 6 }]}
        >
          <Input placeholder="Confirm password ***********" />
        </Form.Item>

        <ResetCodeSent />
      </Form>
    </div>
  </div>
)

export default CreatePasswordForm
