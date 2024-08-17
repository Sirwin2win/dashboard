import React from "react"
import { Button, Flex } from "antd"
import "./Button.css"

const DefaultBack = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button className="bg-slate-300 rounded-full h-19">Back</Button>
    </Flex>
  </Flex>
)

export default DefaultBack
