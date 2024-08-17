import React from "react"
import { Button, Flex } from "antd"

const SubmitButton: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button
        type="primary"
        className="bg-brightOrange rounded-full h-7 ml-[360px] mt-[-15px]"
      >
        Submit
      </Button>
    </Flex>
  </Flex>
)

export default SubmitButton
