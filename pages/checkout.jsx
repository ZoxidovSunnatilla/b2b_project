import React, { useState } from "react"
import { Stepper, Select, Input } from "@mantine/core"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Link from "next/link"
import StepperTwo from "@/src/components/StepperTwo"

const Checkout = () => {
  const icon = <img src="/images/down_icon_select.svg" alt="" />
  const [active, setActive] = useState(0)
  const { t } = useTranslation("common", "checkout")
  return <StepperTwo />
}

export default Checkout
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "checkout"])),
    },
  }
}
