import React from 'react'
import { useTranslation } from "next-i18next";
import { Breadcrumbs, Table, Tabs, Menu,Image } from '@mantine/core';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ShippingAdress = () => {
    const { t } = useTranslation("common", "account")

    return (
        <div className=''>
            <div className="md:flex md:mb-6 mb-4 justify-between block md:ml-5 ml-0 ">
                <button className="text-costum-blue bg-transparent border-2 md:w-[280px] w-full mb-2 md:mb-0 border-costum-blue rounded-full h-12">{t("account:accountTabAgeBtnTextOne")}</button>
                <button className="text-white bg-costum-blue  md:w-[261px] w-full mb-2 md:mb-0  rounded-full h-12">{t("account:accountTabAgeBtnTextTwo")}</button>
            </div>
            <div className="table w-full md:ml-5 ml-0 md:block hidden">
                <Table stickyHeader stickyHeaderOffset={60}>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">{t("account:accountTabAgeTextOne")}</p>

                            </Table.Th>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">{t("account:accountTabAgeTextTwo")}</p>

                            </Table.Th>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">{t("account:accountTabAgeTextThree")}</p>

                            </Table.Th>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">{t("account:accountTabAgeTextFour")}</p>

                            </Table.Th>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">{t("account:accountTabAgeTextFive")}</p>

                            </Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <Table.Tr >
                            <Table.Td>
                                <p className="text-base">Department NY</p>
                            </Table.Td>
                            <Table.Td>
                                <p className="text-base">177 Kent St</p>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base">New York</p>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base">11222</p>

                            </Table.Td>
                            <Table.Td>
                                <div className=" flex items-center gap-[35px]">
                                    <p className="text-base">United States</p>
                                    <Menu>
                                        <Menu.Target>
                                            <Image src="/images/more_horiz.svg" alt="" />

                                        </Menu.Target>

                                        <Menu.Dropdown>
                                            <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                                <Image src="/images/swap_horiz.svg" alt="" />
                                                <p className="text-sm font-normal">{t("account:setDefault")}</p>
                                            </div>
                                            <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                                <Image src="/images/edit_address.svg" alt="" />
                                                <p className="text-sm font-normal">{t("account:edit")}</p>
                                            </div>
                                            <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                                <Image src="/images/delete_address.svg" alt="" />

                                                <p className="text-sm font-normal ">{t("account:delete")}</p>
                                            </div>
                                        </Menu.Dropdown>
                                    </Menu>
                                </div>
                            </Table.Td>
                        </Table.Tr>
                        <Table.Tr >
                            <Table.Td>
                                <p className="text-base">Department NY</p>
                            </Table.Td>
                            <Table.Td>
                                <p className="text-base">177 Kent St</p>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base">New York</p>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base">11222</p>

                            </Table.Td>
                            <Table.Td>
                                <div className=" flex items-center gap-[35px]">
                                    <p className="text-base">United States</p>
                                    <Menu>
                                        <Menu.Target>
                                            <Image src="/images/more_horiz.svg" alt="" />

                                        </Menu.Target>

                                        <Menu.Dropdown>
                                            <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                                <Image src="/images/swap_horiz.svg" alt="" />
                                                <p className="text-sm font-normal">{t("account:setDefault")}</p>
                                            </div>
                                            <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                                <Image src="/images/edit_address.svg" alt="" />
                                                <p className="text-sm font-normal">{t("account:edit")}</p>
                                            </div>
                                            <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                                <Image src="/images/delete_address.svg" alt="" />

                                                <p className="text-sm font-normal ">{t("account:delete")}</p>
                                            </div>
                                        </Menu.Dropdown>
                                    </Menu>
                                </div>
                            </Table.Td>
                        </Table.Tr>
                        <Table.Tr >
                            <Table.Td>
                                <p className="text-base">Department NY</p>
                            </Table.Td>
                            <Table.Td>
                                <p className="text-base">177 Kent St</p>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base">New York</p>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base">11222</p>

                            </Table.Td>
                            <Table.Td>
                                <div className=" flex items-center gap-[35px]">
                                    <p className="text-base">United States</p>
                                    <Menu>
                                        <Menu.Target>
                                            <Image src="/images/more_horiz.svg" alt="" />

                                        </Menu.Target>

                                        <Menu.Dropdown>
                                            <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                                <Image src="/images/swap_horiz.svg" alt="" />
                                                <p className="text-sm font-normal">{t("account:setDefault")}</p>
                                            </div>
                                            <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                                <Image src="/images/edit_address.svg" alt="" />
                                                <p className="text-sm font-normal">{t("account:edit")}</p>
                                            </div>
                                            <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                                <Image src="/images/delete_address.svg" alt="" />

                                                <p className="text-sm font-normal ">{t("account:delete")}</p>
                                            </div>
                                        </Menu.Dropdown>
                                    </Menu>
                                </div>
                            </Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
            </div>
            <div className="table_mobile md:hidden block">
                <div className="table w-full px-5 pb-3 mb-3 border-b border-solid border-[#EAECEE]">
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextOne")} </span> Department NY </p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextTwo")} </span> 17 Kent St</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextThree")} </span> New York</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextFour")} </span> 11222</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextFive")} </span> United States</p>

                    <div className="flex w-full justify-center">
                        <Menu>
                            <Menu.Target>
                                <div className="flex gap-1 items-center justifu-between">
                                    <Image src="/images/more_horiz_mobile.svg" alt="" />
                                    <p className="text-sm font-medium">{t("account:moreActions")}</p>
                                </div>

                            </Menu.Target>

                            <Menu.Dropdown>
                                <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                    <Image src="/images/swap_horiz.svg" alt="" />
                                    <p className="text-sm font-normal">{t("account:setDefault")}</p>
                                </div>
                                <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                    <Image src="/images/edit_address.svg" alt="" />
                                    <p className="text-sm font-normal">{t("account:edit")}</p>
                                </div>
                                <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                    <Image src="/images/delete_address.svg" alt="" />

                                    <p className="text-sm font-normal ">{t("account:delete")}</p>
                                </div>
                            </Menu.Dropdown>
                        </Menu>
                    </div>
                </div>

                <div className="table w-full px-5 pb-3 mb-3 border-b border-solid border-[#EAECEE]">
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextOne")} </span> Department NY </p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextTwo")} </span> 17 Kent St</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextThree")} </span> New York</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextFour")} </span> 11222</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextFive")} </span> United States</p>

                    <div className="flex w-full justify-center">
                        <Menu>
                            <Menu.Target>
                                <div className="flex gap-1 items-center justifu-between">
                                    <Image src="/images/more_horiz_mobile.svg" alt="" />
                                    <p className="text-sm font-medium">{t("account:moreActions")}</p>
                                </div>

                            </Menu.Target>

                            <Menu.Dropdown>
                                <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                    <Image src="/images/swap_horiz.svg" alt="" />
                                    <p className="text-sm font-normal">{t("account:setDefault")}</p>
                                </div>
                                <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                    <Image src="/images/edit_address.svg" alt="" />
                                    <p className="text-sm font-normal">{t("account:edit")}</p>
                                </div>
                                <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                    <Image src="/images/delete_address.svg" alt="" />

                                    <p className="text-sm font-normal ">{t("account:delete")}</p>
                                </div>
                            </Menu.Dropdown>
                        </Menu>
                    </div>
                </div>
                <div className="table w-full px-5 pb-3 mb-3 border-b border-solid border-[#EAECEE]">
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextOne")} </span> Department NY </p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextTwo")} </span> 17 Kent St</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextThree")} </span> New York</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextFour")} </span> 11222</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabAgeTextFive")} </span> United States</p>

                    <div className="flex w-full justify-center">
                        <Menu>
                            <Menu.Target>
                                <div className="flex gap-1 items-center justifu-between">
                                    <Image src="/images/more_horiz_mobile.svg" alt="" />
                                    <p className="text-sm font-medium">{t("account:moreActions")}</p>
                                </div>

                            </Menu.Target>

                            <Menu.Dropdown>
                                <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                    <Image src="/images/swap_horiz.svg" alt="" />
                                    <p className="text-sm font-normal">{t("account:setDefault")}</p>
                                </div>
                                <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                    <Image src="/images/edit_address.svg" alt="" />
                                    <p className="text-sm font-normal">{t("account:edit")}</p>
                                </div>
                                <div className="flex gap-1 p-2 items-center cursor-pointer hover:bg-star hover:text-costum-blue">
                                    <Image src="/images/delete_address.svg" alt="" />

                                    <p className="text-sm font-normal ">{t("account:delete")}</p>
                                </div>
                            </Menu.Dropdown>
                        </Menu>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShippingAdress
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "account"])),
        },
    }
}
