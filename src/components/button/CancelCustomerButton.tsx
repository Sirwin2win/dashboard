import React from "react"
import { Button, Flex } from "antd"

const CancelCustomerButton = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button type="primary" className="bg-gray-300 rounded-full h-19">
        Cancel
      </Button>
    </Flex>
  </Flex>
)

export default CancelCustomerButton
