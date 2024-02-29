import React from "react"
import { Select } from "@mantine/core"
import useLocalStorageState from "use-local-storage-state"
import { useTranslation } from "next-i18next"
function Login() {
  const icon = <img src="/images/down_icon.svg" alt="" />
  const { t } = useTranslation("common", "login")

  const [ecpKeys, setEcpKeys] = useLocalStorageState("ecpKeys", {
    defaultValue: [],
  })
  return (
    <div className=" login">
      <div
        id="login"
        className="container mx-auto  flex justify-center items-center w-full nin-h-screen"
      >
        <div className="bg-white opacity-100 p-6 w-full md:w-2/5 rounded-lg flex flex-col items-center">
          <p className="md:text-3xl text-lg text-costumBlack font-bold text-center mb-6">
            Авторизоваться
          </p>
          <div className=" w-full mx-auto mb-6">
            <Select
              label={"Выберите ЭЦП ключ"}
              placeholder={t("login:loginInputText")}
              size="xl"
              rightSection={icon}
              data={ecpKeys?.map((item) => ({
                label: item.O,
                value: item.TIN,
              }))}
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

export default Login
