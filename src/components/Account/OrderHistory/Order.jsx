import React from 'react'
import { useTranslation } from "next-i18next";
import { Breadcrumbs, Table, Tabs } from '@mantine/core';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from 'next/link';

const Order = () => {
    const { t } = useTranslation("common", "account")

    return (
        <>
            <div className="table w-full md:ml-5 ml-0 md:block hidden">
                <Table stickyHeader stickyHeaderOffset={60}>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">{t("account:accountTabThreeTextOne")}</p>

                            </Table.Th>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">{t("account:accountTabThreeTextTwo")}</p>

                            </Table.Th>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">{t("account:accountTabThreeTextThree")}</p>

                            </Table.Th>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">{t("account:accountTabThreeTextFour")}</p>

                            </Table.Th>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">{t("account:accountTabThreeTextFive")}</p>

                            </Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <Table.Tr >
                            <Table.Td>
                                <p className="text-base font-medium ">1235 2345 345605</p>
                            </Table.Td>
                            <Table.Td>
                                <p className="text-base font-normal ">15.08.2021</p>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base font-normal ">Mark Venice </p>

                            </Table.Td>
                            <Table.Td>
                                <div className=" flex items-center gap-2">
                                    <img src="/images/error_outline.svg" alt="" />
                                    <p className="text-base font-semibold text-[#7B61FF] ">TO AUTHORIZE </p>
                                </div>
                            </Table.Td>
                            <Table.Td>
                                <div className=" flex items-center gap-[35px]">
                                    <p className="text-2xl font-bold text-costum-blue">$1400.00</p>
                                    <Link href="/account/details">
                                        <img src="/images/more_horiz.svg" alt="" />

                                    </Link>
                                </div>
                            </Table.Td>
                        </Table.Tr>
                        <Table.Tr >
                            <Table.Td>
                                <p className="text-base font-medium ">1235 2345 345605</p>
                            </Table.Td>
                            <Table.Td>
                                <p className="text-base font-normal ">15.08.2021</p>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base font-normal ">Mark Venice </p>

                            </Table.Td>
                            <Table.Td>
                                <div className=" flex items-center gap-2">
                                    <img src="/images/error_outline.svg" alt="" />
                                    <p className="text-base font-semibold text-[#7B61FF] ">TO AUTHORIZE </p>
                                </div>
                            </Table.Td>
                            <Table.Td>
                                <div className=" flex items-center gap-[35px]">
                                    <p className="text-2xl font-bold text-costum-blue">$1400.00</p>
                                    <Link href="/account/details">
                                        <img src="/images/more_horiz.svg" alt="" />

                                    </Link>
                                </div>
                            </Table.Td>
                        </Table.Tr>
                        <Table.Tr >
                            <Table.Td>
                                <p className="text-base font-medium ">1235 2345 345605</p>
                            </Table.Td>
                            <Table.Td>
                                <p className="text-base font-normal ">15.08.2021</p>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base font-normal ">Mark Venice </p>

                            </Table.Td>
                            <Table.Td>
                                <div className=" flex items-center gap-2">
                                    <img src="/images/error_outline.svg" alt="" />
                                    <p className="text-base font-semibold text-[#7B61FF] ">TO AUTHORIZE </p>
                                </div>
                            </Table.Td>
                            <Table.Td>
                                <div className=" flex items-center gap-[35px]">
                                    <p className="text-2xl font-bold text-costum-blue">$1400.00</p>
                                    <Link href="/account/details">
                                        <img src="/images/more_horiz.svg" alt="" />

                                    </Link>
                                </div>
                            </Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
            </div>
            <div className="table_mobile md:hidden block">
                <div className="table w-full px-5 pb-3 mb-3 border-b border-solid border-[#EAECEE]">
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabThreeTextOne")} </span> 123456789</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabThreeTextTwo")} </span> 24.08.2021</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabThreeTextThree")} </span> Mark Venice</p>
                    <div className='flex gap-1.5 mb-2'>
                        <p className="text-sm   font-bold">
                            {t("account:accountTabThreeTextFour")}
                        </p>
                        <div className=" flex items-center gap-1">
                            <img src="/images/error_outline_mobile.svg" alt="" />
                            <p className="text-sm font-semibold text-[#7B61FF] ">TO AUTHORIZE </p>
                        </div>
                    </div>
                    <p className="text-sm mb-2 text-[#1071FF] text-xl font-semibold"> <span className='font-bold text-black text-sm'>{t("account:accountTabThreeTextFive")} </span> $120.00</p>
                    <div className="flex w-full justify-between">
                        <div className="flex gap-1 items-center justifu-between">
                            <img src="/images/more_horiz_mobile.svg" alt="" />
                            <p className="text-sm font-medium">{t("account:moreActions")}</p>
                        </div>
                        <Link href="/account/details" className="flex gap-1 items-center">
                            <p className="text-sm font-medium">{t("account:moreDetails")}</p>
                            <img src="/images/down_icon_mobile.svg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="table w-full px-5 pb-3 mb-3 border-b border-solid border-[#EAECEE]">
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabThreeTextOne")} </span> 123456789</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabThreeTextTwo")} </span> 24.08.2021</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabThreeTextThree")} </span> Mark Venice</p>
                    <div className='flex gap-1.5 mb-2'>
                        <p className="text-sm   font-bold">
                            {t("account:accountTabThreeTextFour")}
                        </p>
                        <div className=" flex items-center gap-1">
                            <img src="/images/error_outline_mobile.svg" alt="" />
                            <p className="text-sm font-semibold text-[#7B61FF] ">TO AUTHORIZE </p>
                        </div>
                    </div>
                    <p className="text-sm mb-2 text-[#1071FF] text-xl font-semibold"> <span className='font-bold text-black text-sm'>{t("account:accountTabThreeTextFive")} </span> $120.00</p>
                    <div className="flex w-full justify-between">
                        <div className="flex gap-1 items-center justifu-between">
                            <img src="/images/more_horiz_mobile.svg" alt="" />
                            <p className="text-sm font-medium">{t("account:moreActions")}</p>
                        </div>
                        <Link href="/account/details" className="flex gap-1 items-center">
                            <p className="text-sm font-medium">{t("account:moreDetails")}</p>
                            <img src="/images/down_icon_mobile.svg" alt="" />
                        </Link>
                    </div>
                </div>
                <div className="table w-full px-5 pb-3 mb-3 border-b border-solid border-[#EAECEE]">
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabThreeTextOne")} </span> 123456789</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabThreeTextTwo")} </span> 24.08.2021</p>
                    <p className="text-sm mb-2"> <span className='font-bold'>{t("account:accountTabThreeTextThree")} </span> Mark Venice</p>
                    <div className='flex gap-1.5 mb-2'>
                        <p className="text-sm   font-bold">
                            {t("account:accountTabThreeTextFour")}
                        </p>
                        <div className=" flex items-center gap-1">
                            <img src="/images/error_outline_mobile.svg" alt="" />
                            <p className="text-sm font-semibold text-[#7B61FF] ">TO AUTHORIZE </p>
                        </div>
                    </div>
                    <p className="text-sm mb-2 text-[#1071FF] text-xl font-semibold"> <span className='font-bold text-black text-sm'>{t("account:accountTabThreeTextFive")} </span> $120.00</p>
                    <div className="flex w-full justify-between">
                        <div className="flex gap-1 items-center justifu-between">
                            <img src="/images/more_horiz_mobile.svg" alt="" />
                            <p className="text-sm font-medium">{t("account:moreActions")}</p>
                        </div>
                        <Link href="/account/details" className="flex gap-1 items-center">
                            <p className="text-sm font-medium">{t("account:moreDetails")}</p>
                            <img src="/images/down_icon_mobile.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "account"])),
        },
    }
}
