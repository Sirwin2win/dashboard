import React from "react"
import { Link } from "react-router-dom"
import { Button, Flex } from "antd"
import { PlusCircleOutlined } from "@ant-design/icons"

const AddProductButton: React.FC = () => (
  <Link to={"add-products"}>
    <Flex gap="small" wrap>
      <Button className="rounded-full bg-brightOrange text-white ml-[-10px]">
        <Link to={"add-products"}>
          <PlusCircleOutlined style={{ marginLeft: "-5px" }} />
          Add Products
        </Link>
      </Button>
    </Flex>
  </Link>
)

export default AddProductButton
