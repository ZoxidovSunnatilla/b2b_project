import React from 'react'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Breadcrumbs, Table, Tabs } from '@mantine/core';

const Details = () => {
    const { t } = useTranslation("common", "cart")

    return (
        <div className='container mx-auto my-8' id="account">
            <div className="bg-[#E6EFFB] rounded-lg w-full p-[24px]">
                <div className="w-3/5 flex justify-between mb-8">
                    <div className="text">
                        <p className="text-xl font-bold mb-4">Shipping address</p>
                        <p className="text-base mb-8">
                            JKT Company
                            <br />
                            177 Kent St
                            <br />
                            Brooklyn, NY 11222
                            <br />
                            United States
                        </p>
                        <p className="text-xl font-bold mb-4">Shipping method and cost</p>
                        <p className="text-base ">
                            DHL <span className='text-[#FF7E27] font-semibold'>59,99</span>
                        </p>
                    </div>
                    <div className="text">
                        <p className="text-xl font-bold mb-4">Billing address</p>
                        <p className="text-base mb-8">
                            JKT Company
                            <br />
                            177 Kent St
                            <br />
                            Brooklyn, NY 11222
                            <br />
                            United States
                        </p>
                        <p className="text-xl font-bold mb-4">Payment method</p>
                        <p className="text-base ">
                            Bank Transfer
                        </p>
                    </div>
                </div>
                <p className="text-xl font-bold mb-4">List of products:</p>
                <Table stickyHeader>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">Lp.</p>

                            </Table.Th>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">Product Name</p>

                            </Table.Th>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">Quantity</p>

                            </Table.Th>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">Price (net)</p>

                            </Table.Th>
                            <Table.Th>
                                <p className="text-costumBlack text-sm">Price (gross)</p>

                            </Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <Table.Tr >
                            <Table.Td>
                                <p className="text-sm ">1.</p>
                            </Table.Td>
                            <Table.Td>
                                <div className="flex gap-2">
                                    <img src="/images/account_details.svg" alt="" />
                                    <p className="text-base font-bold w-[156px]">AMBER DECOR Small Lamp 60W, E27 590</p>
                                </div>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base font-normal ">100 items </p>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base font-normal ">$70.00 </p>

                            </Table.Td>
                            <Table.Td>
                               <p className="text-2xl text-[#1071FF] font-semibold">$120.00</p>
                            </Table.Td>
                        </Table.Tr>
                        <Table.Tr >
                            <Table.Td>
                                <p className="text-sm ">2.</p>
                            </Table.Td>
                            <Table.Td>
                                <div className="flex gap-2">
                                    <img src="/images/account_details.svg" alt="" />
                                    <p className="text-base font-bold w-[156px]">AMBER DECOR Small Lamp 60W, E27 590</p>
                                </div>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base font-normal ">100 items </p>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base font-normal ">$70.00 </p>

                            </Table.Td>
                            <Table.Td>
                               <p className="text-2xl text-[#1071FF] font-semibold">$120.00</p>
                            </Table.Td>
                        </Table.Tr>
                        <Table.Tr >
                            <Table.Td>
                                <p className="text-sm ">3.</p>
                            </Table.Td>
                            <Table.Td>
                                <div className="flex gap-2">
                                    <img src="/images/account_details.svg" alt="" />
                                    <p className="text-base font-bold w-[156px]">AMBER DECOR Small Lamp 60W, E27 590</p>
                                </div>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base font-normal ">100 items </p>

                            </Table.Td>
                            <Table.Td>
                                <p className="text-base font-normal ">$70.00 </p>

                            </Table.Td>
                            <Table.Td>
                               <p className="text-2xl text-[#1071FF] font-semibold">$120.00</p>
                            </Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
            </div>
        </div>
    )
}

export default Details

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    }
}
