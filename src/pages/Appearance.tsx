import React from "react"
import { Button, Form, Image, ColorPicker, Upload, Input } from "antd"
import { BiLogoVk } from "react-icons/bi"
import { InboxOutlined } from "@ant-design/icons"
import banner from "../assets/images/banner.png"

const normFile = (e: any) => {
  console.log("Upload event:", e)
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}

const Appearance = () => {
  return (
    <div className="px-[10px] md:ml-[-150px] my-5">
      <b>Company Logo</b>
      <div className="flex justify-between">
        <p>Update your company logo</p>
        <div className="invisible md:visible">
          <Button className="rounded-full border border-brightOrange">
            Cancel
          </Button>
          <Button className="rounded-full ml-5 bg-gray-200">
            Save Changes
          </Button>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex">
        <BiLogoVk className="bg-gray-200" size="50px" />
        <div className="ml-[20px] w-[300px]">
          <Form>
            <Form.Item>
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
          </Form>
        </div>
      </div>
      <hr />
      <div className="mt-5">
        <b>Header image</b>
        <p>Upload your header image here</p>
        <div className="md:flex mt-5">
          <Image src={banner} />
          <div className="ml-[20px] w-[300px]">
            <Form>
              <Form.Item>
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
            </Form>
          </div>
        </div>
      </div>
      <hr className="my-5" />
      <b>Brand colour</b>
      <p>Select or customize your brand colour</p>
      <div className="md:flex justify-between">
        <div className="mt-5">
          <ColorPicker>
            <Button
              type="primary"
              className="rounded-full size-8 bg-red-500"
            ></Button>
          </ColorPicker>
          <ColorPicker>
            <Button
              type="primary"
              className="rounded-full size-8 mx-2"
            ></Button>
          </ColorPicker>
          <ColorPicker>
            <Button
              type="primary"
              className="rounded-full size-8 bg-yellow-500"
            ></Button>
          </ColorPicker>
          <ColorPicker>
            <Button
              type="primary"
              className="rounded-full size-8 bg-green-500 ml-2"
            ></Button>
          </ColorPicker>
        </div>
        <div className="flex justify-between">
          <Form
            className="mt-3"
            name="trigger"
            // style={{ maxWidth: 600 }}
            // layout="vertical"
            autoComplete="off"
          >
            <Form.Item
              hasFeedback
              label="Customize colour"
              name="pname"
              validateFirst
              rules={[{ max: 6 }]}
              className="formInput"
            >
              <Input
                placeholder="#546738"
                className="rounded-full"
                value="#546738"
              />
            </Form.Item>
          </Form>
          <ColorPicker>
            <Button
              type="primary"
              className="rounded-full size-8 bg-brightOrange ml-2 mt-[50px] md:mt-0"
            ></Button>
          </ColorPicker>
        </div>
      </div>
      <hr className="my-5" />
      <b>Interface theme</b>
      <p>Select or customize your UI theme</p>
      <div className="mt-5 md:flex md:justify-between">
        <div>
          <div className="flex rounded-lg border border-brightOrange">
            <div className="h-[150px] w-[250px] bg-white border border-gray-300 bg-white rounded-lg"></div>
            <div className="h-[150px] w-[250px] bg-black border border-gray-100 bg-black rounded-lg"></div>
          </div>
          <b>System Preferences</b>
        </div>

        <div className="md:flex">
          <div>
            <div className="h-[150px] w-[250px] bg-white border border-gray-200 bg-white rounded-lg"></div>
            <b>Light</b>
          </div>
          <div>
            <div className="h-[150px] w-[250px] bg-black border border-gray-100 bg-black rounded-lg"></div>
            <b>Dark</b>
          </div>
        </div>
      </div>
      <div className="visible md:invisible">
        <Button className="rounded-full border border-brightOrange mt-5">
          Cancel
        </Button>
        <Button className="rounded-full ml-5 bg-gray-200">Save Changes</Button>
      </div>
    </div>
  )
}

export default Appearance
