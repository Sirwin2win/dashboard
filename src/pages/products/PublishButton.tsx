import React from "react"
import { Button, Flex } from "antd"

const PublishButton: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button className="bg-brightOrange rounded-full h-15 w-[150px] text-white">
        Publish
      </Button>
    </Flex>
  </Flex>
)

export default PublishButton
