import React from "react"
import { Button, Flex } from "antd"

const NextButton = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button type="primary" className="bg-brightOrange rounded-full h-19">
        Next
      </Button>
    </Flex>
  </Flex>
)

export default NextButton
