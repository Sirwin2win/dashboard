import React from "react"
import { Button, Flex } from "antd"

const SaveAsDraft: React.FC = () => (
  <Flex gap="small" align="flex-start" vertical>
    <Flex gap="small">
      <Button className="back rounded-full h-15 w-[150px]">
        Save As Draft
      </Button>
    </Flex>
  </Flex>
)

export default SaveAsDraft
