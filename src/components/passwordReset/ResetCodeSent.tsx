import React, { useState } from "react"
import { Card } from "antd"
import image from "../../assets/images/resetCode.png"
import "./Reset.css"
import { Button, Modal } from "antd"

const ResetCodeSent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Submit
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="container mx-auto max-w-sm space-y-3 justify-center items-center shadow-xl">
          <Card bordered={false} style={{ width: 400 }}>
            <div className="successReset">
              <img src={image} className="rounded-full size-20" alt="" />
            </div>
            <div className="w-400">
              <h1 className="mt-5 ml-20 font-bold">Reset Code Has Been Sent</h1>
              <p className="">
                A password reset code has been sent to your registered email.
                Kindly to go your email to complete this action
              </p>
            </div>
          </Card>
        </div>
      </Modal>
    </>
  )
}
export default ResetCodeSent
