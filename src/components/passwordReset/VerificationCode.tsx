import React from "react"
import { Flex, Input, Typography } from "antd"
import type { GetProp } from "antd"
import type { OTPProps } from "antd/es/input/OTP"
import image from "../../assets/images/verify.png"
import { Link } from "react-router-dom"

const { Title } = Typography

const VerificationCode: React.FC = () => {
  const onChange: GetProp<typeof Input.OTP, "onChange"> = text => {
    console.log("onChange:", text)
  }

  const sharedProps: OTPProps = {
    onChange,
  }
  return (
    <div className="container mx-auto max-w-sm space-y-3 justify-center items-center verify shadow-lg">
      <div className="successReset">
        <img src={image} className="rounded-full size-20" alt="" />
      </div>
      <div>
        <p className="font-bold ml-10">Enter your Verification Code</p>
        <p className="">
          A password reset code has been sent to your registered email. Kndly go
          to your email to complete this action
        </p>
      </div>
      <Flex gap="middle" align="flex-start" vertical>
        <Title level={5} className="mx-auto"></Title>
        <Input.OTP {...sharedProps} />
      </Flex>
      <p>
        {" "}
        <Link to={"#"} className="text-lightGreen font-bold">
          {" "}
          RESEND CODE
        </Link>
      </p>
    </div>
  )
}

export default VerificationCode
