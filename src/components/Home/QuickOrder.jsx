import React, { useState, useRef } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { useParams } from 'react-router-dom';
import { Input, Modal, Table, Select, Image } from '@mantine/core';
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux"
import { addCard, deleteCard,editCard } from '@/src/redux/features/card-list';
import { v4 as uuidv4 } from 'uuid';



const QuickOrder = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const [opened, { open, close }] = useDisclosure(false);
    const { t } = useTranslation()
    const [item, setItem] = useState()
    const [qty, setQty] = useState()
    const [unit, setUnit] = useState()
    const [itemEdit, setItemEdit] = useState()
    const [qtyEdit, setQtyEdit] = useState()
    const [unitEdit, setUnitEdit] = useState()
    const icon = <Image src="/images/down_icon_select.svg" alt="" />

  
    const handleRemoveCard = (id) => {
      dispatch(deleteCard({ id }));
    }

    const handleAdd = () => {
        const user = {
            id: uuidv4(),
            item: item,
            qty: qty,
            unit: unit,
        }
        
        dispatch(addCard(user))
        // setOrder(prev => [...prev, user]);
    }
    const handleEditCard = () => {
        const editCards = {
            id: params.id,
            item: itemEdit,
            qty: qtyEdit,
            unit: unitEdit,
        }
        dispatch(editCard(editCards));
    }
    const handleAdd2 = () => {
        const user = {
            id: uuidv4(),
            item: item,
            qty: qty,
            unit: unit,
        }
        
        dispatch(addCard(user))

    }
    const card = useSelector((state) => state.cardList)
    console.log(card);
    
    
    return (
        <div>
            <Modal opened={opened} onClose={close} title="Quick order form" size="100%">
                <div className="w-full flex md:flex-nowrap flex-wrap justify-between">
                    <div className="w-3/5 md:block hidden">
                        <Table withRowBorders={false}>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>{t("quickOrderOne")}</Table.Th>
                                    <Table.Th>{t("quickOrderTwo")}</Table.Th>
                                    <Table.Th>{t("quickOrderThree")}</Table.Th>
                                    <Table.Th>{t("quickOrderFour")}</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            <Table.Tbody>
                                <Table.Tr >
                                    <Table.Td id="input1">
                                        <Input
                                            placeholder={t("quickOrderFive")}
                                            onChange={(e) => setItem(e.target.value)}
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input2">
                                        <Input
                                            placeholder={t("quickOrderSix")}
                                            onChange={(e) => setQty(e.target.value)}
                                            size="md"
                                            radius="md"
                                        />
                                    </Table.Td>
                                    <Table.Td id="input3">
                                        <Select
                                            placeholder={t("quickOrderSeven")}
                                            className="Select_product"
                                            data={["React", "Angular", "Vue", "Svelte"]}
                                            rightSection={icon}
                                            onChange={setUnit}
                                        />
                                    </Table.Td>
                                    <Table.Td id="input4">
                                        <p className="text-price">$45.00</p>

                                    </Table.Td>
                                </Table.Tr>

                                {card?.length > 0 ? (card?.map((items) => {
                                    return (<Table.Tr key={items?.id}>
                                        <Table.Td id="input1">
                                            <Input
                                                placeholder={items?.item}
                                                size="md"
                                                radius="md"
                                                onChange={(e) => setItemEdit(e.target.value)}

                                            />
                                        </Table.Td>
                                        <Table.Td id="input2">
                                            <Input
                                                placeholder={items?.qty}
                                                size="md"
                                                radius="md"
                                                onChange={(e) => setItemEdit(e.target.value)}


                                            />

                                        </Table.Td>
                                        <Table.Td id="input3">
                                            <Select
                                                placeholder={items?.unit}
                                                className="Select_product"
                                                data={["React", "Angular", "Vue", "Svelte"]}
                                                onChange={setItemEdit}



                                                rightSection={icon}
                                            />

                                        </Table.Td>
                                        <Table.Td id="input4">
                                            <p className="text-price">$45.00</p>

                                        </Table.Td>
                                        <Table.Td>
                                            <div className="flex gap-2">
                                            <button className='w-8 h-8 flex rounded flex items-center justify-center bg-red-500 ' onClick={() => handleRemoveCard(items?.id)}><img src='/images/deleteWhite.svg' /></button>
                                            <button className='w-8 h-8 flex rounded flex items-center justify-center bg-yellow-500 ' onClick={handleEditCard}><img src='/images/editWhite.svg' /></button>
                                            </div>
                                        </Table.Td>
                                    </Table.Tr>
                                    )
                                })) : (<h1>error</h1>)}
                            </Table.Tbody>
                            <button onClick={handleAdd} className='md:w-[176px] mt-4 w-full mb-2 flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-full text-white bg-costum-blue'>Add item</button>

                        </Table>
                        <div className="flex gap-4 mt-10">
                            <button className="md:w-[240px] w-full mb-2 flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-full text-white bg-costum-blue">
                                {t("cardBtnText")}
                                <Image src="/images/down-icon.svg" alt="" />
                            </button>
                            <button className="md:w-[176px] w-full mb-2 flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-full text-costum-blue bg-white">
                                {t("cardGetQuoteBtnText")}
                            </button>
                            <button onClick={() => setSlowTransitionOpened(true)} variant="default" className="md:w-[190px] w-full mb-2 flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-full text-white bg-[#FF4E00]">
                                {t("cardCreateOrderBtnText")}
                            </button>
                        </div>
                    </div>
                    <div className="w-full block md:hidden mb-4">
                        <div className="block  mb-4 ">
                            <div id="input1" className='mb-2'>
                                <p className="text-sm text-[#434447] mb-1">{t("quickOrderOne")}</p>
                                <Input
                                    placeholder={t("quickOrderFive")}
                                    size="md"
                                    radius="md"
                                    onChange={(e) => setItem(e.target.value)}


                                />
                            </div>
                            <div id="input2" className='mb-2'>
                                <p className="text-sm text-[#434447] mb-1">{t("quickOrderTwo")}</p>
                                <Input
                                    placeholder={t("quickOrderSix")}
                                    size="md"
                                    radius="md"
                                    onChange={(e) => setQty(e.target.value)}


                                />
                            </div>
                            <div id="input3" className='mb-4'>
                                <p className="text-sm text-[#434447] mb-1">{t("quickOrderThree")}</p>
                                <Select
                                    placeholder={t("quickOrderSeven")}
                                    className="Select_product"
                                    data={["React", "Angular", "Vue", "Svelte"]}
                                    rightSection={icon}
                                    onChange={setUnit}

                                />
                            </div>
                            <div id="input4" className='mb-4'>
                                <p className="text-sm text-[#434447] mb-1">{t("quickOrderFour")}</p>
                                <p className="text-price">$45.00</p>

                            </div>
                        </div>
                        <button onClick={handleAdd2} className='w-full mb-4 w-full mb-2 flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-full text-white bg-costum-blue'>Add item</button>
                        {
                            card?.length > 0 ? (card?.map((items) => {
                                return (
                                    <div className="block border-b mb-6 border-solid border-[#FFFFFF]" key={items?.id}>
                                        <div id="input1" className='mb-2'>
                                            <p className="text-sm text-[#434447] mb-1">{t("quickOrderOne")}</p>
                                            <Input
                                                placeholder={items?.item}
                                                size="md"
                                                radius="md"
                                                onChange={(e) => setItem(e.target.value)}


                                            />

                                        </div>
                                        <div id="input2" className='mb-2'>
                                            <p className="text-sm text-[#434447] mb-1">{t("quickOrderTwo")}</p>
                                            <Input
                                                placeholder={items?.qty}
                                                size="md"
                                                radius="md"
                                                onChange={(e) => setQty(e.target.value)}

                                            />

                                        </div>
                                        <div id="input3" className='mb-4'>
                                            <p className="text-sm text-[#434447] mb-1">{t("quickOrderThree")}</p>
                                            <Select
                                                placeholder={items?.unit}
                                                className="Select_product"
                                                data={["React", "Angular", "Vue", "Svelte"]}
                                                rightSection={icon}
                                                onChange={setUnit}
                                            />

                                        </div>
                                        <div id="input4" className='mb-4'>
                                            <p className="text-sm text-[#434447] mb-1">{t("quickOrderFour")}</p>
                                            <p className="text-price">$45.00</p>
                                        </div>
                                    </div>
                                )
                            })) : (<h1>error</h1>)
                        }

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
                        <p className="text-center mb-2 text-xl font-bold">{t("quickOrderNine")}</p>
                        <p className="text-center text-base mb-4">{t("quickOrderTen")}</p>
                        <button className="rounded-full bg-costum-blue mb-4 text-white font-medium h-12 py-4 px-8 text-center flex justify-center items-center mx-auto">{t("quickOrderEleven")}</button>
                        <div className="flex gap-2 items-center mx-auto">
                            <Image src="/images/download.svg" alt="" />
                            <p className="text-costum-blue font-medium">{t("quickOrderTwelvy")}</p>
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