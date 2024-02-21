import React from "react"
import {  Select } from "@mantine/core";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const LoginPage = () => {
  const icon = <img src="/images/down_icon.svg" alt="" />
  const { t } = useTranslation("common", "login")

  return (
    <div className=" login">
      <div
        id="login"
        className="container mx-auto  flex justify-center items-center w-full nin-h-screen"
      >
        <div className="bg-white opacity-100 p-6 w-full md:w-2/5 rounded-lg flex flex-col items-center">
          <p className="md:text-xl text-lg text-costumBlack font-bold text-center mb-6">
            {t("login:loginTitleText")}
          </p>
          <div className="md:w-96 w-full mx-auto mb-6">
            <Select
              label={t("login:loginLabelText")}
              placeholder={t("login:loginInputText")}
              rightSection={icon}
              data={["React", "Angular", "Vue", "Svelte"]}
              size="md"
            />
          </div>

          <button className="bg-costum-blue rounded-full font-medimum mb-6 text-white h-12 w-48 mx-auto">
            {t("login:loginBtnText")}
          </button>
        </div>
      </div>
    </div>
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
