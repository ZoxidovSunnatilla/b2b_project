import React, { useEffect, useState } from "react"
import {
  Badge,
  Menu,
  Input,
  Drawer,
  Accordion,
  Select,
  Modal,
  Image,
  Combobox,
  useCombobox,
  InputBase,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import MenuHeader from "./Menu"
import SearchMenu from "./SearchMenu"
import Link from "next/link"
import { requests } from "@/src/services/request"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import QuickOrder from "./Home/QuickOrder"
import { useSelector } from "react-redux"

const Header = () => {
  const products = useSelector((state) => state.cart.products)
  const favorites = useSelector((state) => state.favorites.favoritProd)
  const compare = useSelector((state) => state.compare.compareProd)


  const [opened, { open, close }] = useDisclosure(false)
  const search_icon = <Image src="/images/search.svg" />
  const icon = <Image src="/images/down_icon_select.svg" alt="" />
  const [country, setCounty] = useState([])
  const [language, setLanguage] = useState([])
  const [currency, setCurrency] = useState([])
  const [category, setCategory] = useState([])
  const { t } = useTranslation()
  const router = useRouter()
  const languages = [{ code: "en" }, { code: "ru" }, { code: "uz" }]
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

  const [value, setValue] = useState(null)
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    // const res = await requests.Country.getList(1, 10)
    // const res2 = await requests.Language.getList(1, 10)
    // const res3 = await requests.Currency.getList(1, 10)
    // const res4 = await requests.Category.getList(1, 10)
    // setCurrency(res3?.data)
    // setLanguage(res2?.data)
    // setCounty(res?.data)
    // setCategory(res4?.data)
  }
  const handleChangeCountry = (value) => {
    setCounty(value)
  }
  const handleChangeLanguage = (value) => {
    setLanguage(value)
  }
  const handleChangeCurrency = (value) => {
    setCurrency(value)
  }
  const changeLanguage = (lang) => {
    router.push(router.asPath, router.asPath, { locale: lang })
  }

  return (
    <div className="  ">
      <div className=" bg-costum-gray hidden md:flex">
        <div
          id="header"
          className=" container mx-auto h-12 flex justify-between  items-center "
        >
          <div className="w-auto flex  items-center gap-4 ">
            <div className="flex items-center">
              <h1 className="text-sm text-costumBlack font-normal">
                {t("countryText")}:
              </h1>

              <Select
                placeholder="Uzbekistan"
                onChange={(e) => handleChangeCountry(country)}
                rightSection={icon}
                data={country?.map((item) => ({
                  value: String(item.id),
                  label: String(item.name),
                }))}
              />
            </div>
            <div className="flex items-center">
              <h1 className="text-sm text-costumBlack font-normal">
                {t("languageText")}:
              </h1>
              <Select
                onChange={(e) => changeLanguage(e)}
                placeholder={router?.locale}
                rightSection={icon}
                className="!w-12"
                data={languages?.map((item) => ({
                  value: String(item.code),
                  label: String(item.code),
                }))}
              />
            </div>
            <div className="flex items-center">
              <h1 className="text-sm text-costumBlack font-normal">
                {t("currencyText")}:
              </h1>
              <Select
                placeholder="Dollar"
                onChange={(e) => handleChangeCurrency(currency)}
                className="!w-[75px]"
                rightSection={icon}
                data={currency?.map((item) => ({
                  value: String(item.id),
                  label: String(item.name),
                }))}
              />
            </div>
          </div>
          <div className="w-auto flex relative space-between gap-4 items-center ">
            <div className="flex items-center gap-2">
              <Image src="/images/phone.svg" alt="" />
              <Link
                href="tel:"
                className=" text-sm text-costum-blue font-normal "
              >
                +998 71 200 00 00
              </Link>
            </div>
            <div className="rotate-60 h-7 bg-costumBlack w-0.5"></div>
            <div className="flex relative gap-2 items-center">
              <div className="relative">
                <Image src="/images/envelope.svg" alt="" />

                <Badge
                  size="sm"
                  color="orange"
                  className="absolute -top-2.5 -right-2.5"
                  circle
                >
                  12
                </Badge>
              </div>
              <a href="" className=" text-sm text-costumBlack font-normal ">
                {t("messageText")}
              </a>
            </div>
            <div className="rotate-60 h-7 bg-costumBlack w-0.5"></div>

            <div className="flex gap-1 items-center" id="combobox">
              <Image src="/images/user.svg" alt="" />
              <h1 className="text-sm text-costumBlack font-normal">
                {t("userNameText")}:
              </h1>
              {/* <Select
                placeholder="Surname"
                rightSection={icon}
                data={["Login", "Account", "SurName"]}
              /> */}
              <Combobox
                store={combobox}
                onOptionSubmit={(val) => {
                  setValue(val)
                  combobox.closeDropdown()
                }}
              >
                <Combobox.Target>
                  <InputBase
                    component="button"
                    type="button"
                    pointer
                    rightSection={icon}
                    rightSectionPointerEvents="none"
                    onClick={() => combobox.toggleDropdown()}
                  >
                    {value || <Input.Placeholder>Surname</Input.Placeholder>}
                  </InputBase>
                </Combobox.Target>

                <Combobox.Dropdown>
                  <Combobox.Options>
                    <Link href="/login">
                      <Combobox.Option>
                        <p className="text-base">Login</p>
                      </Combobox.Option>
                    </Link>
                    <Link href="">
                      <Combobox.Option>
                        <p className="text-base">Surname</p>
                      </Combobox.Option>
                    </Link>
                    <Link href="">
                      <Combobox.Option>
                        <p className="text-base">Name</p>
                      </Combobox.Option>
                    </Link>
                  </Combobox.Options>
                </Combobox.Dropdown>
              </Combobox>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-5 md:hidden flex justify-between">
        <Link href="/">
          <div className="nav" onClick={open}>
            <Image src="/images/navbar.svg" alt="" />
          </div>
        </Link>
        <Image src="/images/logo_mobile.svg" alt="" />
        <div className="relative">
          <Image src="/images/cart.svg" alt="" className="mr-2" />

         
          {products?.length > 0 && (
            <Badge
              size="sm"
              color="orange"
              className="absolute -top-2 right-0.5"
              circle
            >
              {products?.length}
            </Badge>
          )}
        </div>
      </div>
      <div className="container px-4 md:px-0 mx-auto bg-costum-gray md:bg-white">
        <div className="h-20 flex justify-between  items-center">
          <Link href="/">
            <Image
              src="/images/ABUsell.svg"
              alt=""
              className="hidden md:flex"
            />
          </Link>
          <label className="relative block w-full md:w-1/3 menu">
            <Menu classNames=" w-full ">
              <Menu.Target>
                <Input
                  placeholder={t("headerInputText")}
                  leftSection={search_icon}
                  size="md"
                  radius="md"
                />
              </Menu.Target>
              <Menu.Dropdown>
                <SearchMenu />
              </Menu.Dropdown>
            </Menu>
          </label>
          <QuickOrder />
        </div>
      </div>
      <div className="bg-costum-gray hidden md:flex h-20 ">
        <div className="container mx-auto ">
          <div className="flex items-center h-20  justify-between">
            <div className="flex gap-16 menu">
              {category ? (
                category.map((item) => (
                  <Menu key={item.id}>
                    <Menu.Target>
                      <p className="text-custum--text-black uppercase cursor-pointer flex">
                        {item.name}
                        <span>
                          <Image src="/images/down_icon.svg" alt="" />
                        </span>
                      </p>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <MenuHeader item={item} />
                    </Menu.Dropdown>
                  </Menu>
                ))
              ) : (
                <></>
              )}
            </div>
            <div className="flex gap-8">
              <Link href="/compare">
                <div className="w-max-content flex flex-col item-center">
                  <div className="relative mx-auto">
                    <Image src="/images/compare_icon.svg" alt="" />

                    {compare?.length > 0 && (
                      <Badge
                        size="sm"
                        color="orange"
                        className="absolute -top-2.5 -right-2.5"
                        circle
                      >
                        {compare?.length}
                      </Badge>
                    )}
                  </div>
                  <p className="text-costum-blue text-sm font-bold uppercase mt-2">
                    {t("headerCompareText")}
                  </p>
                </div>
              </Link>
              <Link href="/favorites">
                <div className="w-max-content flex flex-col item-center">
                  <div className="relative mx-auto">
                    <Image src="/images/star_icon.svg" alt="" />

                    {favorites?.length > 0 && (
                      <Badge
                        size="sm"
                        color="orange"
                        className="absolute -top-2.5 -right-2.5"
                        circle
                      >
                        {favorites?.length}
                      </Badge>
                    )}
                  </div>
                  <p className="text-costum-blue text-sm font-bold uppercase mt-2">
                    {t("headerFavoritesText")}
                  </p>
                </div>
              </Link>
              <Link href="/cart">
                <div className="w-max-content flex flex-col item-center">
                  <div className="relative mx-auto">
                    <Image src="/images/cart_icon.svg" alt="" />

                    {products?.length > 0 && (
                      <Badge
                        size="sm"
                        color="orange"
                        className="absolute -top-2.5 -right-2.5"
                        circle
                      >
                        {products?.length}
                      </Badge>
                    )}
                  </div>
                  <p className="text-costum-blue text-sm font-bold uppercase mt-2">
                    {t("headerCartText")}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Drawer opened={opened} onClose={close}>
        <div className="bg-white" id="mobile">
          <Accordion defaultValue="Apples" className="mb-2">
            {category ? (
              category.map((item) => (
                <Accordion.Item value={item.name} key={item.id}>
                  <Accordion.Control>
                    <p className="text-custum--text-black uppercase cursor-pointer flex">
                      {item.name}
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Accordion>
                      {item?.children.map((items) => (
                        <Accordion.Item value={items.name} key={items.id}>
                          <Accordion.Control>
                            <div className="flex gap-2 items-center mb-2">
                              <Image src="/images/menu_img1.svg" alt="" />
                              <p className="text-base text-costum-blue font-medium">
                                {items.name}
                              </p>
                            </div>
                          </Accordion.Control>
                          <Accordion.Panel>
                            <div className="flex flex-col ">
                              {items?.children.map((itemm) => (
                                <a
                                  href=""
                                  key={itemm.id}
                                  className="text-base text-costumBlack mb-3"
                                >
                                  {itemm.name}
                                </a>
                              ))}
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </Accordion.Panel>
                </Accordion.Item>
              ))
            ) : (
              <h1>Hello</h1>
            )}
          </Accordion>
          <a
            href=""
            className="text-base text-costum-blue font-medium py-3 px-4 w-full "
          >
            {t("headerViewAll")}
          </a>

          <div className="border border-t border-b-0  border-costum-gray-500   mt-5">
            <Link
              href="/compare"
              className="flex  gap-2 items-center  py-3 px-4 border-t-1 border-indigo-500"
            >
              <Image src="/images/menu_img1.svg" alt="" />
              <p className="text-base text-costum-blue font-medium">
                {t("headerCompareText")}
              </p>
            </Link>
          </div>
          <div className="border border-t border-b-0 border-costum-gray-500   ">
            <Link
              href="/favorites"
              className="flex  gap-2 items-center  py-3 px-4 border-t-1 border-indigo-500"
            >
              <Image src="/images/menu_img1.svg" alt="" />
              <p className="text-base text-costum-blue font-medium">
                {t("headerFavoritesText")}
              </p>
            </Link>
          </div>
          <div className="border border-t border-b-0 border-costum-gray-500 ">
            <Link
              href=""
              className="flex  gap-2 items-center  py-3 px-4 border-t-1 border-indigo-500"
            >
              <Image src="/images/menu_img1.svg" alt="" />

              <p className="text-base text-costum-blue font-medium">
                {t("messageText")}
              </p>
            </Link>
          </div>
          <div className="border border-t border-b-0 border-costum-gray-500 mb-5 ">
            <a
              href=""
              className="flex  gap-2 items-center  py-3 px-4 border-t-1 border-indigo-500"
            >
              <Image src="/images/menu_img1.svg" alt="" />
              <Link
                href="tel:"
                className="text-base text-costum-blue font-medium"
              >
                +32 (0) 15 28 76 67
              </Link>
            </a>
          </div>
          <div className="flex items-center w-full pl-[16px] border-b border-solid py-[12px]">
            <h1 className="text-sm text-costumBlack font-normal">
              {t("countryText")}:
            </h1>
            <Select
              placeholder="Uzbekistan"
              onChange={(e) => handleChangeCountry(country)}
              rightSection={icon}
              data={country?.map((item) => ({
                value: String(item.id),
                label: String(item.name),
              }))}
            />
          </div>

          <div className="flex items-center w-full pl-[16px] border-b border-solid py-[12px]">
            <h1 className="text-sm text-costumBlack font-normal">
              {t("languageText")}:
            </h1>
            <Select
              onChange={(e) => changeLanguage(e)}
              placeholder={router?.locale}
              rightSection={icon}
              data={languages?.map((item) => ({
                value: String(item.code),
                label: String(item.code),
              }))}
            />
          </div>

          <div className="flex items-center w-full pl-[16px] border-b border-solid py-[12px]">
            <h1 className="text-sm text-costumBlack font-normal">
              {t("currencyText")}:
            </h1>
            <Select
              placeholder="Dollar"
              onChange={(e) => handleChangeCurrency(currency)}
              rightSection={icon}
              data={currency?.map((item) => ({
                value: String(item.id),
                label: String(item.name),
              }))}
            />
          </div>

          <button className="bg-costum-blue w-full rounded-3xl text-white h-12 mb-5">
            {t("headerButtonText")}
          </button>
        </div>
      </Drawer>
    </div>
  )
}

export default Header
