import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Flex, Modal } from "antd"
import { PlusCircleOutlined } from "@ant-design/icons"
import AddCustomer from "../customer/AddCustomer"

const AddCustomerButton: React.FC = () => {
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
      <Button
        className="rounded-full bg-brightOrange text-white ml-[-10px] "
        onClick={showModal}
      >
        <PlusCircleOutlined style={{ marginLeft: "-5px" }} />
        Add New
      </Button>
      <Modal
        title="Add Customers"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {" "}
        <AddCustomer />
      </Modal>
    </>
  )
}

export default AddCustomerButton
