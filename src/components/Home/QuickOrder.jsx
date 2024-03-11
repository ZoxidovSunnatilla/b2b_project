import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Input, Modal, Table, Select , Image } from '@mantine/core';
import { useTranslation } from "next-i18next"


const QuickOrder = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const { t } = useTranslation()
    const icon = <Image src="/images/down_icon_select.svg" alt="" />

    return (
        <div>
            <Modal opened={opened} onClose={close} title="Quick order form" size="80%">
                <div className="w-full flex md:flex-nowrap flex-wrap justify-between">
                    <div className="w-3/5 md:block hidden">
                        <Table withRowBorders={false}>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>Item #</Table.Th>
                                    <Table.Th>Qty</Table.Th>
                                    <Table.Th>Unit</Table.Th>
                                    <Table.Th>Price</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                <Table.Tr >
                                    <Table.Td id="input1">
                                        <Input
                                            placeholder="138539817498217349127"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input2">
                                        <Input
                                            placeholder="1"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input3">
                                        <Select
                                            placeholder="Item 1"
                                            className="Select_product"
                                            data={["React", "Angular", "Vue", "Svelte"]}
                                            rightSection={icon}
                                        />
                                    </Table.Td>
                                    <Table.Td id="input4">
                                        <p className="text-price">$45.00 net</p>
                                    </Table.Td>
                                </Table.Tr>
                                <Table.Tr >
                                    <Table.Td id="input1">
                                        <Input
                                            placeholder="138539817498217349127"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input2">
                                        <Input
                                            placeholder="1"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input3">
                                        <Select
                                            placeholder="Item 1"
                                            className="Select_product"
                                            data={["React", "Angular", "Vue", "Svelte"]}
                                            rightSection={icon}
                                        />
                                    </Table.Td>
                                    <Table.Td id="input4">
                                        <p className="text-price">$45.00 net</p>
                                    </Table.Td>
                                </Table.Tr>
                                <Table.Tr >
                                    <Table.Td id="input1">
                                        <Input
                                            placeholder="138539817498217349127"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input2">
                                        <Input
                                            placeholder="1"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input3">
                                        <Select
                                            placeholder="Item 1"
                                            className="Select_product"
                                            data={["React", "Angular", "Vue", "Svelte"]}
                                            rightSection={icon}
                                        />
                                    </Table.Td>
                                    <Table.Td id="input4">
                                        <p className="text-price2">unavailable</p>
                                    </Table.Td>
                                </Table.Tr>
                                <Table.Tr >
                                    <Table.Td id="input1">
                                        <Input
                                            placeholder="138539817498217349127"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input2">
                                        <Input
                                            placeholder="1"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input3">
                                        <Select
                                            placeholder="Item 1"
                                            className="Select_product"
                                            data={["React", "Angular", "Vue", "Svelte"]}
                                            rightSection={icon}
                                        />
                                    </Table.Td>
                                    <Table.Td id="input4">
                                        <p className="text-price2">unavailable</p>
                                    </Table.Td>
                                </Table.Tr>
                                <Table.Tr >
                                    <Table.Td id="input1">
                                        <Input
                                            placeholder="138539817498217349127"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input2">
                                        <Input
                                            placeholder="1"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input3">
                                        <Select
                                            placeholder="Item 1"
                                            className="Select_product"
                                            data={["React", "Angular", "Vue", "Svelte"]}
                                            rightSection={icon}
                                        />
                                    </Table.Td>
                                    <Table.Td id="input4">
                                        <p className="text-price2">unavailable</p>
                                    </Table.Td>
                                </Table.Tr>
                                <Table.Tr >
                                    <Table.Td id="input1">
                                        <Input
                                            placeholder="138539817498217349127"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input2">
                                        <Input
                                            placeholder="1"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input3">
                                        <Select
                                            placeholder="Item 1"
                                            className="Select_product"
                                            data={["React", "Angular", "Vue", "Svelte"]}
                                            rightSection={icon}
                                        />
                                    </Table.Td>
                                    <Table.Td id="input4">
                                        <p className="text-price2">unavailable</p>
                                    </Table.Td>
                                </Table.Tr>
                                <Table.Tr >
                                    <Table.Td id="input1">
                                        <Input
                                            placeholder="138539817498217349127"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input2">
                                        <Input
                                            placeholder="1"
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input3">
                                        <Select
                                            placeholder="Item 1"
                                            className="Select_product"
                                            data={["React", "Angular", "Vue", "Svelte"]}
                                            rightSection={icon}
                                        />
                                    </Table.Td>
                                    <Table.Td id="input4">
                                        <p className="text-price2">unavailable</p>
                                    </Table.Td>
                                </Table.Tr>
                            </Table.Tbody>
                        </Table>
                    </div>
                    <div className="w-full block md:hidden mb-4">
                        <div className="block border-b mb-6 border-solid border-[#FFFFFF]">
                            <div id="input1" className='mb-2'>
                                <p className="text-sm text-[#434447] mb-1">Item#</p>
                                <Input
                                    placeholder="138539817498217349127"
                                    size="md"
                                    radius="md"
                                />
                            </div>
                            <div id="input2" className='mb-2'>
                                <p className="text-sm text-[#434447] mb-1">Qty</p>
                                <Input
                                    placeholder="1"
                                    size="md"
                                    radius="md"
                                />
                            </div>
                            <div id="input3" className='mb-4'>
                                <p className="text-sm text-[#434447] mb-1">Unit</p>
                                <Select
                                    placeholder="Item 1"
                                    className="Select_product"
                                    data={["React", "Angular", "Vue", "Svelte"]}
                                    rightSection={icon}
                                />
                            </div>
                            <div id="input4" className='mb-4'>
                                <p className="text-sm text-[#434447] mb-1">Price</p>
                                <p className="text-price">$45.00 net</p>
                            </div>
                        </div>
                        <div className="block border-b mb-6 border-solid border-[#FFFFFF]">
                            <div id="input1" className='mb-2'>
                                <p className="text-sm text-[#434447] mb-1">Item#</p>
                                <Input
                                    placeholder="138539817498217349127"
                                    size="md"
                                    radius="md"
                                />
                            </div>
                            <div id="input2" className='mb-2'>
                                <p className="text-sm text-[#434447] mb-1">Qty</p>
                                <Input
                                    placeholder="1"
                                    size="md"
                                    radius="md"
                                />
                            </div>
                            <div id="input3" className='mb-4'>
                                <p className="text-sm text-[#434447] mb-1">Unit</p>
                                <Select
                                    placeholder="Item 1"
                                    className="Select_product"
                                    data={["React", "Angular", "Vue", "Svelte"]}
                                    rightSection={icon}
                                />
                            </div>
                            <div id="input4" className='mb-4'>
                                <p className="text-sm text-[#434447] mb-1">Price</p>
                                <p className="text-price">$45.00 net</p>
                            </div>
                        </div>
                        <div className="block border-b mb-6 border-solid border-[#FFFFFF]">
                            <div id="input1" className='mb-2'>
                                <p className="text-sm text-[#434447] mb-1">Item#</p>
                                <Input
                                    placeholder="138539817498217349127"
                                    size="md"
                                    radius="md"
                                />
                            </div>
                            <div id="input2" className='mb-2'>
                                <p className="text-sm text-[#434447] mb-1">Qty</p>
                                <Input
                                    placeholder="1"
                                    size="md"
                                    radius="md"
                                />
                            </div>
                            <div id="input3" className='mb-4'>
                                <p className="text-sm text-[#434447] mb-1">Unit</p>
                                <Select
                                    placeholder="Item 1"
                                    className="Select_product"
                                    data={["React", "Angular", "Vue", "Svelte"]}
                                    rightSection={icon}
                                />
                            </div>
                            <div id="input4" className='mb-4'>
                                <p className="text-sm text-[#434447] mb-1">Price</p>
                                <p className="text-price">$45.00 net</p>
                            </div>
                        </div>
                        <div className="block border-b mb-6 border-solid border-[#FFFFFF]">
                            <div id="input1" className='mb-2'>
                                <p className="text-sm text-[#434447] mb-1">Item#</p>
                                <Input
                                    placeholder="138539817498217349127"
                                    size="md"
                                    radius="md"
                                />
                            </div>
                            <div id="input2" className='mb-2'>
                                <p className="text-sm text-[#434447] mb-1">Qty</p>
                                <Input
                                    placeholder="1"
                                    size="md"
                                    radius="md"
                                />
                            </div>
                            <div id="input3" className='mb-4'>
                                <p className="text-sm text-[#434447] mb-1">Unit</p>
                                <Select
                                    placeholder="Item 1"
                                    className="Select_product"
                                    data={["React", "Angular", "Vue", "Svelte"]}
                                    rightSection={icon}
                                />
                            </div>
                            <div id="input4" className='mb-4'>
                                <p className="text-sm text-[#434447] mb-1">Price</p>
                                <p className="text-price2 text-[#737B7D]">unavailable</p>
                            </div>
                        </div>
                        <button className="md:w-[176px] w-full mb-2 flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-full text-white bg-costum-blue">
                            {t("cardBtnText")}
                            <Image src="/images/down-icon.svg" alt="" />
                        </button>
                        <button className="md:w-[176px] w-full mb-2 flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-full text-costum-blue bg-white">
                            {t("cardGetQuoteBtnText")}
                        </button>
                        <button className="md:w-[176px] w-full mb-2 flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-full text-white bg-[#FF4E00]">
                            {t("cardCreateOrderBtnText")}
                        </button>
                    </div>
                    <div className="md:w-2/5 w-full bg-white rounded-lg py-8 md:px-6 px-4 flex flex-col justify-center">
                        <p className="text-center mb-2 text-xl font-bold">Upload your order</p>
                        <p className="text-center text-base mb-4">Here you can upload your own file XLS, XLSX or CSV and add products to cart.</p>
                        <button className="rounded-full bg-costum-blue mb-4 text-white font-medium h-12 py-4 px-8 text-center flex justify-center items-center mx-auto">Upload your file</button>
                        <div className="flex gap-2 items-center mx-auto">
                            <Image src="/images/download.svg" alt="" />
                            <p className="text-costum-blue font-medium">Download your sample file</p>
                        </div>
                    </div>
                </div>
            </Modal>

            <button onClick={open} className="h-12 w-[198px] bg-costum-blue rounded-full text-white text-base hidden md:block">
                {t("headerButtonText")}
            </button>
        </div>
    )
}

export default QuickOrder