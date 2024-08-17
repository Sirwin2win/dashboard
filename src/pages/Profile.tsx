import React from "react"
import { Button, Form, Image, Input, Upload } from "antd"
import { InboxOutlined } from "@ant-design/icons"
import { EditorState, ContentState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import "../App.css"
import img from "../assets/images/img.png"

const Profile: React.FC = () => (
  <div className="ml-5 md:ml-[-150px] md:object-cover h-fit">
    <b>Personal Info</b>
    <div className="md:flex md:justify-between opacity-0 md:opacity-100">
      <p>Update your photo and personal details here</p>
      <p className="">
        <Button className="rounded-full border border-brightOrange">
          Cancel
        </Button>
        <Button className="bg-brightOrange rounded-full text-white ml-5">
          Save Changes
        </Button>
      </p>
    </div>
    <p className="visible md:invisible mt-[-40px]">
      Update your photo and personal details here
    </p>
    <hr className="my-5" />
    <div>
      <Form
        name="complex-form"
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 2000 }}
        className=""
      >
        <div className="md:flex justify-between">
          <Form.Item
            hasFeedback
            label="First Name"
            name="fname"
            validateFirst
            rules={[{ max: 6 }]}
          >
            <Input placeholder="--Enter--" className="rounded-full w-[300px]" />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Last Name"
            name="lname"
            validateFirst
            rules={[{ max: 6 }]}
          >
            <Input placeholder="--Enter--" className="rounded-full w-[300px]" />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Email"
            name="email"
            validateFirst
            rules={[{ max: 6 }]}
          >
            <Input placeholder="--Enter--" className="rounded-full w-[300px]" />
          </Form.Item>
        </div>
        <div className="md:flex justify-between">
          <Form.Item
            hasFeedback
            label="Phone"
            name="phone"
            validateFirst
            rules={[{ max: 6 }]}
          >
            <Input placeholder="--Enter--" className="rounded-full w-[300px]" />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Gender"
            name="gender"
            validateFirst
            rules={[{ max: 6 }]}
            className="rounded-full w-[300px]"
          >
            <Input placeholder="--Enter--" className="rounded-full w-[300px]" />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="City"
            name="city"
            validateFirst
            rules={[{ max: 6 }]}
            className="rounded-full w-[300px]"
          >
            <Input placeholder="--Enter--" className="rounded-full w-[300px]" />
          </Form.Item>
        </div>
        <hr />
        <div className="md:flex mt-5">
          <div>
            <b>Your Photo</b>
            <p>This will be displayed on your profile</p>
          </div>
          <div className="flex">
            <Image src={img} className="rounded-full md:ml-[100px]" />
            <div className="md:ml-[200px] w-[500px]">
              <Form.Item label="Dragger">
                <Form.Item name="dragger" valuePropName="fileList" noStyle>
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      <span className="text-blue-500">Click to upload </span>or
                      drag and drop
                    </p>
                    <p className="ant-upload-hint">
                      svg, png, jpg, or gif(max 400x400px)
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-5">
          <b>Location/Timezone</b>
          <p>Select your location and timezone here</p>
        </div>
        <div className="md:flex gap-5 mt-5">
          <Form.Item
            hasFeedback
            label="Country/Region"
            name="country"
            validateFirst
            rules={[{ max: 6 }]}
            className="rounded-full w-[300px]"
          >
            <Input placeholder="--Enter--" className="rounded-full w-[300px]" />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Timezone"
            name="timezone"
            validateFirst
            rules={[{ max: 6 }]}
            className="rounded-full w-[300px]"
          >
            <Input placeholder="--Enter--" className="rounded-full w-[300px]" />
          </Form.Item>
        </div>
        <div>
          <b>Bio</b>
          <p>write a short introduction about your store</p>
        </div>
        <Form.Item name="editor" className="border border-2">
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
          />
        </Form.Item>
        <hr />
        {/* <div className="flex"> */}

        <b>Store Name</b>
        <div className="md:flex">
          <p>You can change or share store name anytime</p>

          <Form.Item
            hasFeedback
            // label="Timezone"
            name="timezone"
            validateFirst
            rules={[{ max: 6 }]}
            className="rounded-full w-[300px] ml-[30px]"
          >
            <Input placeholder="--Enter--" className="rounded-full w-[300px]" />
          </Form.Item>
        </div>
        <hr className="mt-5" />
        <b>Social Profile</b>
        <div className="md:flex">
          <p>You can change or share store name anytime</p>

          <Form.Item
            hasFeedback
            // label="Timezone"
            name="timezone"
            validateFirst
            rules={[{ max: 6 }]}
            className="rounded-full w-[300px] ml-[30px]"
          >
            <Input placeholder="--Enter--" className="rounded-full w-[300px]" />
          </Form.Item>
          <Form.Item
            hasFeedback
            // label="Timezone"
            name="timezone"
            validateFirst
            rules={[{ max: 6 }]}
            className="rounded-full w-[300px] ml-[30px]"
          >
            <Input placeholder="--Enter--" className="rounded-full w-[300px]" />
          </Form.Item>
        </div>
        <Form.Item
          hasFeedback
          // label="Timezone"
          name="timezone"
          validateFirst
          rules={[{ max: 6 }]}
          className="rounded-full ml-[27px] w-[300px] md:ml-[310px]"
        >
          <Input placeholder="--Enter--" className="rounded-full w-[300px]" />
        </Form.Item>
      </Form>
    </div>
    <p className="visible ml-[30px] md:invisible">
      <Button className="rounded-full border border-brightOrange">
        Cancel
      </Button>
      <Button className="bg-brightOrange rounded-full text-white ml-5">
        Save Changes
      </Button>
    </p>
  </div>
)

export default Profile
