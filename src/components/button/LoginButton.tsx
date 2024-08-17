import React from "react"
import { Button, Flex } from "antd"
import "./Button.css"

const LoginButton: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button className="bg-brightOrange rounded-full text-white h-19 w-80">
        Login
      </Button>
    </Flex>
  </Flex>
)

export default LoginButton
