import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Flex, Modal } from "antd"
import { PlusCircleOutlined } from "@ant-design/icons"
import AddProducts from "../../pages/products/AddProducts"

const AddNew: React.FC = () => {
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
        title="Add Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <AddProducts />
      </Modal>
    </>
  )
}

export default AddNew
