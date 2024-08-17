import React from "react"
import { Button, Form, Input } from "antd"

const Password = () => {
  return (
    <div className="px-[56px] py-[24px] ml-[-10px] md:ml-[-150px]">
      <b className="ml-[-10px] md:ml-0">Change Password</b>
      <div className="ml-[-10px] md:ml-0 md:flex justify-between">
        <div>
          <p>To continue, first verify it's you</p>
          <b className="text-blue-600">LAST CHANGED SEP 6, 2022</b>
        </div>
        <div className="">
          <Button className="rounded-full opacity-0 md:opacity-100">
            Cancel
          </Button>
          <Button className="rounded-full ml-5 bg-gray-200 opacity-0 md:opacity-100">
            Save Changes
          </Button>
        </div>
      </div>
      <hr className="md:my-5" />
      <div className="mt-5 ">
        <Form
          className="w-full md:grid md:grid-cols-3 md:gap-6 md:w-full"
          name="trigger"
          // style={{ maxWidth: 600 }}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            hasFeedback
            label="Old Password"
            name="oldPassword"
            validateFirst
            rules={[{ max: 6 }]}
            className=""
          >
            <Input placeholder="--Enter--" className="rounded-full" />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="New Password"
            name="password"
            validateFirst
            rules={[{ max: 6 }]}
          >
            <Input placeholder="--Enter--" className="rounded-full" />
          </Form.Item>
          <Form.Item
            hasFeedback
            label="Confirm New Password"
            name="password2"
            validateFirst
            rules={[{ max: 6 }]}
          >
            <Input placeholder="--Enter--" className="rounded-full" />
          </Form.Item>
        </Form>
      </div>
      <hr className="md:my-5" />
      <b className="mt-5">Deactivate My Account</b>
      <p className="px-[30px] ml-[-30px]">
        This will shutdown your account. Your account will be reactivated when
        you sign in again
      </p>
      <div className="md:flex">
        <p>
          <Button className="rounded-full bg-[#586449] w-full text-white md:w-[200px]">
            Learn More
          </Button>
        </p>
        <p>
          {" "}
          <Button className="rounded-full w-full mt-5 md:w-[200px] md:ml-5 md:mt-0">
            Deactivate Account
          </Button>
        </p>
      </div>
      <hr className="my-5" />
      <b className="mt-5">Delete Account</b>
      <p>
        When you delete your account, you np longer have access to our account
        services,
      </p>
      <p>
        and your personal data is permanently deleted. You have 14 days to
        cancel.
      </p>
      <div className="md:flex mt-5">
        <p>
          {" "}
          <Button className="rounded-full bg-[#586449] w-full text-white md:w-[200px]">
            Learn More
          </Button>{" "}
        </p>
        <p>
          {" "}
          <Button className="rounded-full w-full mt-5 md:w-[200px] md:ml-5 md:mt-0">
            Delete Account
          </Button>{" "}
        </p>
      </div>
      <div className=" mt-[100px]">
        <Button className="rounded-full opacity-100 md:opacity-0">
          Cancel
        </Button>
        <Button className="rounded-full ml-5 bg-gray-200 opacity-100 md:opacity-0">
          Save Changes
        </Button>
      </div>
    </div>
  )
}

export default Password
