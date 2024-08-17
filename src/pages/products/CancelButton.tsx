import React from "react"
import { Button, Flex } from "antd"

const CancelButton: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button className="rounded-full h-19 bg-gray-100">Cancel</Button>
    </Flex>
  </Flex>
)

export default CancelButton
