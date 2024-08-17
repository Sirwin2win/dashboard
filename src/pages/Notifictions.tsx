import React from "react"
import { Button, Switch, Select } from "antd"

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`)
}

const Notifictions = () => {
  return (
    <div className="px-5 md:px-0 md:ml-[-170px] mt-5">
      <b>Notifications</b>
      <div className="flex justify-between invisible md:visible">
        <div className="">
          <p>Select the kind of notifications you get about</p>
          <p>activities and recommendations</p>
        </div>
        <div className="">
          <Button className="rounded-full">Cancel</Button>
          <Button className="rounded-full ml-5 bg-gray-200">
            Save Changes
          </Button>
        </div>
      </div>
      <div className="visible md:invisible">
        <p className="mt-[-100px] md:mt-0">
          Select the kind of notifications you get about
        </p>
        <p>activities and recommendations</p>
      </div>
      <hr className="mb-5" />
      <div className="flex justify-between">
        <div>
          <b>Enable Desktop Notification</b>
          <p>Receive notification on all messages, contacts, documents</p>
        </div>
        <div>
          <Switch
            defaultChecked
            className="bg-brightOrange text-brightOrange"
            onChange={onChange}
          />
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex justify-between">
        <div>
          <b>Enable Unread Notification Badge</b>
          <p>shows a red badge on the app icon when you have unread message</p>
        </div>
        <div>
          <Switch
            defaultChecked
            className="bg-brightOrange text-brightOrange"
            onChange={onChange}
          />
        </div>
      </div>
      <hr className="my-5" />
      <div>
        <div>
          <b>Push Notification Time-out</b>
          <p>Get push notifications in-app to find out what's</p>
          <p>going on when you're online</p>
          <Select
            defaultValue="lucy"
            style={{ width: 200, marginTop: 20, borderRadius: 500 }}
            // onChange={handleChange}
            options={[
              {
                label: <span>manager</span>,
                title: "manager",
                options: [
                  { label: <span>Jack</span>, value: "Jack" },
                  { label: <span>Lucy</span>, value: "Lucy" },
                ],
              },
              {
                label: <span>engineer</span>,
                title: "engineer",
                options: [
                  { label: <span>Chloe</span>, value: "Chloe" },
                  { label: <span>Lucas</span>, value: "Lucas" },
                ],
              },
            ]}
          />
        </div>
      </div>
      <hr className="my-5" />
      <b>EMAIL NOTIFICATION</b>
      <div className="flex justify-between mt-5">
        <div>
          <b>Communication Emails</b>
          <p>Receive email for messages, contacts, documents </p>
        </div>
        <div>
          <Switch
            defaultChecked
            className="bg-brightOrange text-brightOrange"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div>
          <b>Announcements & updates</b>
          <p>Receive email about product updates, improvements etc</p>
        </div>
        <div>
          <Switch
            // defaultChecked
            className="bg-gray-100 text-brightOrange mt-[30px]"
            onChange={onChange}
          />
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex justify-between mt-5">
        <div>
          <b>SOUNDS</b>
          <div>
            <b>Disable All Notification Sounds</b>
            <p>Mute all notification of the messages, contacts, documents</p>
          </div>
        </div>
        <div>
          <Switch
            // defaultChecked
            className="bg-gray-100 text-brightOrange mt-[50px]"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="visible mt-5 md:invisible">
        <Button className="rounded-full">Cancel</Button>
        <Button className="rounded-full ml-5 bg-gray-200">Save Changes</Button>
      </div>
    </div>
  )
}

export default Notifictions
