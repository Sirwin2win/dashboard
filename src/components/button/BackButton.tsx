import React from "react"
import { Button, Flex } from "antd"
import "./Button.css"

const BackButton: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button className="back rounded-full h-19">Back</Button>
    </Flex>
  </Flex>
)

export default BackButton
