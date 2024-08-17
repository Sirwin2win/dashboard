import React from "react"
import { Button, Form, Input } from "antd"
import { CloseCircleFilled } from "@ant-design/icons"

const AddVariation = () => {
  return (
    <div className="container">
      <Form
        className="mt-3"
        name="trigger"
        // style={{ maxWidth: 600 }}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          hasFeedback
          label="Item"
          name="pname"
          validateFirst
          rules={[{ max: 6 }]}
          className="formInput"
        >
          <Input placeholder="--Enter--" className="rounded-lg" />
        </Form.Item>
        <Form.Item
          hasFeedback
          label="Options"
          name="pname"
          validateFirst
          rules={[{ max: 6 }]}
          className="formInput"
        >
          <Input placeholder="--Enter--" className="rounded-lg" />
        </Form.Item>
        <p className="my-5">
          ---------------------------------------------------------------------------------
          <CloseCircleFilled className="text-brightOrange" />
        </p>
        <div className="flex justify-end my-5">
          <Button className="outline-brightOrange text-brightOrange rounded-full mx-3">
            Cancel
          </Button>
          <Button className="bg-brightOrange text-white rounded-full">
            Save
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AddVariation
