import React, { useState } from "react"
import Camera from "../../assets/images/Camera.png"
import { Button, Form, Input, Image } from "antd"
import CancelCustomerButton from "../button/CancelCustomerButton"
import { CgArrowLeft } from "react-icons/cg"

const AddCustomer = () => {
  const [image, setImage] = useState(false)
  return (
    <div>
      {/* Mobile header start */}
      <div className="flex justify-between bg-[#586449] mb-5 h-[100px] md:invisible">
        <div className="flex ml-5">
          <CgArrowLeft className="text-white mt-[55px]" />
          <p className="text-white mt-[50px] ml-1 text-white">Back</p>
        </div>
      </div>
      {/* Mobile header end */}

      <b className="mt-5 md:invisible">Add Customers</b>
      <hr className="mt-2 md:invisible" />
      <Form
        className="px-5"
        name="trigger"
        // style={{ maxWidth: 600 }}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          hasFeedback
          label="Image"
          name="name"
          validateFirst
          rules={[{ max: 6 }]}
          className="formInput"
        >
          {/* <img src={image ? URL.createObjectURL(image) : Camera} alt="" /> */}
          <Input
            className="border-0"
            type="file"
            // hidden
            required
          />
        </Form.Item>
        <Form.Item
          hasFeedback
          label="Name"
          name="name"
          validateFirst
          rules={[{ max: 6 }]}
          className="formInput"
        >
          <Input placeholder="--Enter--" className="rounded-full" />
        </Form.Item>
        <Form.Item
          hasFeedback
          label="Email"
          name="email"
          validateFirst
          rules={[{ max: 6 }]}
          className="formInput"
        >
          <Input placeholder="--Enter--" className="rounded-full" />
        </Form.Item>
        <Form.Item
          hasFeedback
          label="Phone"
          name="phone"
          validateFirst
          rules={[{ max: 6 }]}
          className="formInput"
        >
          <Input placeholder="--Enter--" className="rounded-full" />
        </Form.Item>
        <Form.Item
          hasFeedback
          label="Location"
          name="location"
          validateFirst
          rules={[{ max: 6 }]}
          className="formInput"
        >
          <Input placeholder="--Enter--" className="rounded-full" />
        </Form.Item>
        <div className="flex justify-between mt-5">
          <CancelCustomerButton />
          <Button type="primary" className="bg-brightOrange rounded-full">
            Add
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default AddCustomer
