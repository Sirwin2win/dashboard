import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Flex, Modal } from "antd"
import { PlusCircleOutlined } from "@ant-design/icons"
import AddVariation from "../../pages/products/AddVariation"

const AddVariationButton: React.FC = () => {
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
        className="rounded-none outline-none text-brightOrange ml-[-10px] "
        onClick={showModal}
      >
        + Add Variation
      </Button>
      <Modal
        title="Add Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <AddVariation />
      </Modal>
    </>
  )
}

export default AddVariationButton
