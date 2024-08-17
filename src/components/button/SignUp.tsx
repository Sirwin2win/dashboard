import React from "react"
import { Link } from "react-router-dom"
import { Button, Flex } from "antd"

const SignUp: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button type="primary" className="bg-brightOrange rounded-full h-19">
        <Link to={"/dashboard-layout"}>Sign Up</Link>
      </Button>
    </Flex>
  </Flex>
)

export default SignUp
