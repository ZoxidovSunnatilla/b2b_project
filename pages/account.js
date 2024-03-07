import React from "react"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Breadcrumbs, Table, Tabs, Accordion } from "@mantine/core"
import Order from "@/components/Account/OrderHistory/Order"
import AccountData from "@/components/Account/OrderHistory/Accountdata"

const AccountPage = () => {
  const { t } = useTranslation("common", "account")

  return (
    <div>
      <div className="container mx-auto">
        <Breadcrumbs className="mt-8 mb-10 breadcumbs">
          <a href="" className="text-costum-silver text-sm">
            Link 1
          </a>
          <a href="" className="text-costum-silver text-sm">
            dasdasds
          </a>
          <a href="" className="text-costum-silver text-sm">
            dasdasds
          </a>
          <a href="" className="text-costum-silver text-sm">
            dasdasds
          </a>
          <a href="" className="text-costum-silver text-sm">
            dasdasds
          </a>
          <a href="" className="text-costum-silver text-sm">
            dasdasds
          </a>
          <a href="" className="text-costum-text-black text-sm">
            Link 10
          </a>
        </Breadcrumbs>
        <Breadcrumbs className="mt-5 mb-6 breadcumbs_mobile">
          <a href="" className="text-costum-silver text-sm">
            link 1{" "}
          </a>
          <a href="" className="text-costum-text-black text-sm">
            Link 10
          </a>
        </Breadcrumbs>
        <p className="text-4xl font-bold mb-8">Order History</p>
        <div
          className="w-full flex gap-5 mb-[50px] md:block hidden"
          id="account"
        >
          <Tabs
            color="gray"
            className=""
            variant="pills"
            radius="xs"
            orientation="vertical"
            defaultValue="order"
          >
            <Tabs.List>
              <div className="siderbar w-[408px] py-10 px-4 rounded-lg bg-[#F6F8FB]">
                <Tabs.Tab value="Dashboard">
                  <p className="text-xl text-[#0C0C0C]">Dashboard</p>
                </Tabs.Tab>
                <div className=" h-0.5 bg-[#CFD2D5] w-full my-10"></div>
                <Tabs.Tab value="quotes">
                  <p className="text-xl text-[#0C0C0C] mb-4">Quotes</p>
                </Tabs.Tab>
                <Tabs.Tab value="order">
                  <p className="text-xl text-[#0C0C0C] mb-4">Order History</p>
                </Tabs.Tab>
                <Tabs.Tab value="most">
                  <p className="text-xl text-[#0C0C0C] mb-4">
                    Most Frequently Bought
                  </p>
                </Tabs.Tab>
                <Tabs.Tab value="returns">
                  <p className="text-xl text-[#0C0C0C] ">
                    Returns and Complaints
                  </p>
                </Tabs.Tab>
                <div className=" h-0.5 bg-[#CFD2D5] w-full my-10"></div>
                <Tabs.Tab value="account">
                  <p className="text-xl text-[#0C0C0C] mb-4">Account Data</p>
                </Tabs.Tab>
                <Tabs.Tab value="data">
                  <p className="text-xl text-[#0C0C0C] mb-4">Company Data</p>
                </Tabs.Tab>
                <Tabs.Tab value="shipping">
                  <p className="text-xl text-[#0C0C0C] mb-4">
                    Shipping Addresses
                  </p>
                </Tabs.Tab>
                <Tabs.Tab value="credit">
                  <p className="text-xl text-[#0C0C0C] mb-4">Store Credit</p>
                </Tabs.Tab>
                <Tabs.Tab value="roles">
                  <p className="text-xl text-[#0C0C0C] mb-4">
                    Roles and Permissions
                  </p>
                </Tabs.Tab>
                <Tabs.Tab value="users">
                  <p className="text-xl text-[#0C0C0C] mb-4">Users</p>
                </Tabs.Tab>
                <Tabs.Tab value="privacy">
                  <p className="text-xl text-[#0C0C0C] ">
                    Subscriptions and Privacy
                  </p>
                </Tabs.Tab>
              </div>
            </Tabs.List>

            <Tabs.Panel value="order">
              <Order />
            </Tabs.Panel>

            <Tabs.Panel value="account">
              <AccountData />
            </Tabs.Panel>

            <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
          </Tabs>
        </div>
        <div id="tabs_mobile2" className="md:hidden block">
          <Accordion defaultValue="Apple" className="mb-5 md:hidden block">
            <Accordion.Item value="1_1">
              <Accordion.Control>
                <p className="text-sm text-costum-text-black font-normal ml-2 bg-transparent outline-none">
                  {t("account:accountTabOne")}
                </p>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="bg-white w-full "></div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="1_2">
              <Accordion.Control>
                <p className="text-sm text-costum-text-black font-normal ml-2 bg-transparent outline-none">
                  {t("account:accountTabTwo")}
                </p>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="bg-white w-full "></div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="1_3">
              <Accordion.Control>
                <p className="text-sm text-costum-text-black font-normal ml-2 bg-transparent outline-none">
                  {t("account:accountTabThree")}
                </p>
              </Accordion.Control>
              <Accordion.Panel>
                <Order />
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="1_4">
              <Accordion.Control>
                <p className="text-sm text-costum-text-black font-normal ml-2 bg-transparent outline-none">
                  {t("account:accountTabFour")}
                </p>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="bg-white w-full "></div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="1_5">
              <Accordion.Control>
                <p className="text-sm text-costum-text-black font-normal ml-2 bg-transparent outline-none">
                  {t("account:accountTabFive")}
                </p>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="bg-white w-full "></div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="1_6">
              <Accordion.Control>
                <p className="text-sm text-costum-text-black font-normal ml-2 bg-transparent outline-none">
                  {t("account:accountTabSix")}
                </p>
              </Accordion.Control>
              <Accordion.Panel>
                <AccountData />
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="1_7">
              <Accordion.Control>
                <p className="text-sm text-costum-text-black font-normal ml-2 bg-transparent outline-none">
                  {t("account:accountTabSeven")}
                </p>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="bg-white w-full "></div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="1_8">
              <Accordion.Control>
                <p className="text-sm text-costum-text-black font-normal ml-2 bg-transparent outline-none">
                  {t("account:accountTabAge")}
                </p>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="bg-white w-full "></div>
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="1_9">
              <Accordion.Control>
                <p className="text-sm text-costum-text-black font-normal ml-2 bg-transparent outline-none">
                  {t("account:accountTabNine")}
                </p>
              </Accordion.Control>
              <Accordion.Panel></Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="1_10">
              <Accordion.Control>
                <p className="text-sm text-costum-text-black font-normal ml-2 bg-transparent outline-none">
                  {t("account:accountTabTen")}
                </p>
              </Accordion.Control>
              <Accordion.Panel></Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="1_11">
              <Accordion.Control>
                <p className="text-sm text-costum-text-black font-normal ml-2 bg-transparent outline-none">
                  {t("account:accountTabEleven")}
                </p>
              </Accordion.Control>
              <Accordion.Panel></Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="1_12">
              <Accordion.Control>
                <p className="text-sm text-costum-text-black font-normal ml-2 bg-transparent outline-none">
                  {t("account:accountTabTwelve")}
                </p>
              </Accordion.Control>
              <Accordion.Panel></Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default AccountPage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "account"])),
    },
  }
}
