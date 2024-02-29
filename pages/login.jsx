import React from "react"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import EPSProvider from "@/src/hooks/EPSProvider"
import Login from "@/components/Login"

const LoginPage = () => {
  return (
    <>
      <EPSProvider />
      <Login />
    </>
  )
}

export default LoginPage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "login"])),
    },
  }
}
