import React, { useState } from "react"
import { Link } from "react-router-dom"
import Camera from "../../assets/images/Camera.png"
import img from "../../assets/images/img.png"
import img1 from "../../assets/images/img-1.png"
import img2 from "../../assets/images/img-2.png"
import img3 from "../../assets/images/img-3.png"
import img4 from "../../assets/images/img-4.png"
import { Button, Form, Input, Select, Tag, ColorPicker, Checkbox } from "antd"
import CancelButton from "./CancelButton"
import SaveAsDraft from "./SaveAsDraft"
import PublishButton from "./PublishButton"
import "./Product.css"
import AddVariationButton from "../../components/button/AddVariationButton"

const EditProduct = () => {
  return (
    <div className="container">
      <p className="font-Sora p-5 font-bold">Edit Product</p>
      <Form
        className="mt-3"
        name="trigger"
        // style={{ maxWidth: 600 }}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          hasFeedback
          label="Product Name"
          name="pname"
          validateFirst
          rules={[{ max: 6 }]}
          className="formInput"
        >
          <Input placeholder="Asoebi Wedding" className="rounded-lg" />
        </Form.Item>
        <Form.Item
          hasFeedback
          label="Tags"
          name="tags"
          validateFirst
          rules={[{ max: 6 }]}
          className="formInput rounded-full"
        >
          <Select
            className="rounded-full formInput"
            placeholder="--Enter/Select--"
            style={{ width: "100%", borderRadius: "20%" }}
            tokenSeparators={[","]}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "dube", label: "dube" },
            ]}
          />
          <Tag>ANKARA</Tag>
          <Tag>WEDDING</Tag>
          <Tag>FASHION</Tag>
        </Form.Item>
        <Form.Item
          hasFeedback
          label="Category"
          name="category"
          validateFirst
          rules={[{ max: 6 }]}
          className="formInput"
        >
          <Select
            className="rounded-full formInput"
            placeholder="--Enter/Select--"
            style={{ width: "100%", borderRadius: "20%" }}
            tokenSeparators={[","]}
            options={[
              { value: "ankara", label: "ankara" },
              { value: "aso", label: "aso" },
              { value: "boba", label: "boba" },
            ]}
          />
        </Form.Item>
        <Form.Item
          hasFeedback
          label="Price"
          name="price"
          validateFirst
          rules={[{ max: 6 }]}
          className="formInput"
        >
          <Input placeholder="₦36,000" className="rounded-lg" />
        </Form.Item>
        <Form.Item
          hasFeedback
          label="Status"
          name="status"
          validateFirst
          rules={[{ max: 6 }]}
          className="formInput"
        >
          <Select
            className="rounded-full formInput"
            placeholder="Active"
            style={{ width: "100%", borderRadius: "20%" }}
            tokenSeparators={[","]}
            options={[
              { value: "available", label: "available" },
              { value: "unavailable", label: "unavailable" },
            ]}
          />
        </Form.Item>
        <Form.Item
          hasFeedback
          label="Description"
          name="description"
          validateFirst
          rules={[{ max: 6 }]}
          className="formInput"
        >
          <Input.TextArea placeholder="--Default--" />
        </Form.Item>
        <p className="ml-[430px]">0/300</p>
        <hr className="m-5" />

        <div className="flex my-5">
          <img src={Camera} className="size-10" />
          <img src={img} className="size-10 mx-2" />
          <img src={img1} className="size-10" />
          <img src={img2} className="size-10 mx-2" />
          <img src={img3} className="size-10" />
          <img src={img4} className="size-10 ml-2" />
        </div>

        <Checkbox className="my-5">Set as trendy product</Checkbox>
        <div className="flex justify-end">
          <Button className="bg-gray-200 rounded-full">Cancel</Button>
          <Button className="bg-brightOrange text-white rounded-full w-[150px] ml-[80px]">
            Save
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default EditProduct
