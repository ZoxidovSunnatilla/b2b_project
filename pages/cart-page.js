import React from 'react';
import { Breadcrumbs, Table, Select, Image } from '@mantine/core';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next"
import { useSelector, useDispatch } from "react-redux"
import { deleteItem } from "@/src/redux/features/cart";



const FavoritesPage = () => {
    const products = useSelector((state) => state.cart.products);
    const icon = <Image src='/images/down_icon_select.svg' alt='' />
    const { t } = useTranslation("common", "favorites")
    const dispatch = useDispatch();
    console.log(products, "dasd");
    return (
        <div id="favorites">
            <div className="container mx-auto">
                <Breadcrumbs className='mt-8 mb-10 breadcumbs' >
                    <a href="" className="text-costum-silver text-sm">Link </a>
                    <a href="" className="text-costum-silver text-sm">dasdasds</a>
                    <a href="" className="text-costum-silver text-sm">dasdasds</a>
                    <a href="" className="text-costum-silver text-sm">dasdasds</a>
                    <a href="" className="text-costum-silver text-sm">dasdasds</a>
                    <a href="" className="text-costum-silver text-sm">dasdasds</a>
                    <a href="" className="text-costum-text-black text-sm">Link 10</a>
                </Breadcrumbs>
                <Breadcrumbs className='mt-5 mb-6 breadcumbs_mobile'>
                    <a href="" className="text-costum-silver text-sm">Home Page </a>
                    <a href="" className="text-costum-text-black text-sm">Link 10</a>
                </Breadcrumbs>

                <div className="md:flex block justify-between items-center md:mb-10 mb-4">
                    <p className="md:text-4xl mb-4 md:mb-0 text-3xl font-bold">{t("favorites:favoritesTextTitle")}</p>
                    <div className="flex items-center gap-1">
                        <Image src="/images/cart_delete_icon.svg" alt="" />
                        <p className="text-base text-[#434447]">{t("favorites:favoritesTextSubTitle")}</p>
                    </div>
                </div>
                <div className="md:flex block md:mb-10 mb-6 justify-between">
                    <div className="flex items-center gap-1 mb-4 md:mb-0">
                        <Image src="/images/print.svg" alt="" />
                        <p className="text-base text-[#434447]">{t("favorites:favoritesTextPrint")}</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-costum-blue rounded-full w-max-content p-2 h-12 text-white ">
                            {t("favorites:favoritesButtonText")}
                        </button>
                        <img src="/images/social.svg" alt="" />

                    </div>
                </div>
                <div id="table " className='md:block hidden mb-20 favorites_table'>
                    <Table stickyHeader stickyHeaderOffset={60}>
                        <Table.Thead>
                            
                            <Table.Tr>
                                <Table.Th>
                                    <p className="text-costumBlack ml-8">{t("favorites:favoritesTableOne")}</p>

                                </Table.Th>
                                <Table.Th>
                                    <p className="text-costumBlack">{t("favorites:favoritesTableTwo")}</p>

                                </Table.Th>
                                <Table.Th>
                                    <p className="text-costumBlack ">{t("favorites:favoritesTableThree")}</p>

                                </Table.Th>
                                <Table.Th>
                                    <p className="text-costumBlack">{t("favorites:favoritesTableFour")}</p>

                                </Table.Th>
                                <Table.Th>
                                    <p className="text-costumBlack">{t("favorites:favoritesTableFive")}</p>

                                </Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {products ? (products.map((item) => {
                                return <Table.Tr  key={item._id}>
                                    <Table.Td>
                                    <div className=" py-4 flex items-center gap-2">
                                        <Image src="/images/cart_delete_icon.svg" alt="" onClick={() => dispatch(deleteItem(item._id))}/>
                                        <div className="flex items-center gap-2">
                                            <Image src="/images/favorites_img.svg" alt="" />
                                            <p className="text-base font-bold w-40">{item.name}</p>
                                        </div>
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <div className="flex  gap-3 items-center w-max-content ">
                                        <input type="text" name="number" className=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-[#0C0C0C] outline-none w-12 md:w-24 block  rounded-md sm:text-sm " placeholder={item.quantity} />
                                        <Select
                                            placeholder="Item 1"
                                            className=''
                                            data={['React', 'Angular', 'Vue', 'Svelte']}
                                            rightSection={icon}
                                        />
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <div className="  flex flex-col justify-center  ">
                                        {item.in_stock ? ( <div className=" w-24 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                                            <img src="/images/check.svg" alt="" />
                                            <p className="text-costum-green">in stock</p>
                                        </div>) :  <div className=" w-24 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                                            <img src="/images/check.svg" alt="" />
                                            <p className="text-costum-green">no stock</p>
                                        </div>}
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <div className=" flex items-center">
                                    <p className="text-2xl font-bold text-costum-blue">{item.price}</p>

                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <div className=" flex items-center gap-10">
                                        
                                    </div>
                                </Table.Td>
                            </Table.Tr>
                            })) : (<h1>Salom</h1>)}
                           
                            {/* <Table.Tr >
                                <Table.Td>
                                    <div className=" py-4 flex items-center gap-2">
                                        <Image src="/images/cart_delete_icon.svg" alt="" />
                                        <div className="flex items-center gap-2">
                                            <Image src="/images/favorites_img.svg" alt="" />
                                            <p className="text-base font-bold w-40">Sched-Pol Atla pentagonal acrylic shower gray</p>
                                        </div>
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <div className="flex  gap-3 items-center w-max-content ">
                                        <input type="text" name="number" className=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-[#0C0C0C] outline-none w-12 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                                        <Select
                                            placeholder="Item 1"
                                            className=''
                                            data={['React', 'Angular', 'Vue', 'Svelte']}
                                            rightSection={icon}
                                        />
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <div className="  flex flex-col justify-center  ">
                                        <div className=" w-24 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                                            <Image src="/images/check.svg" alt="" />
                                            <p className="text-costum-green">in stock</p>
                                        </div>
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <div className=" flex items-center">
                                        <p className="text-base text-costumBlack">$1100.00</p>
                                    </div>
                                </Table.Td>
                                <Table.Td>
                                    <div className=" flex items-center gap-10">
                                        <p className="text-2xl font-bold text-costum-blue">$1400.00</p>
                                        <button className=" w-48 flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                                        {t("favorites:productMainBtnText")}
                                            <Image src="/images/down-icon.svg" alt="" />
                                        </button>
                                    </div>
                                </Table.Td>
                            </Table.Tr> */}
                        </Table.Tbody>
                    </Table>
                </div>
                <div id="table_mobile" className='md:hidden block favorites_table'>
                    <div className="block w-full py-6 px-4 bg-star mb-2">
                        <div className="flex gap-2 mb-3">
                            <Image src="/images/favorites_img1.svg" alt="" />
                            <div className="block">
                                <p className="text-sm font-bold text-costumBlack mb-2">Sched-Pol Atla pentagonal acrylic shower tray</p>
                                <div className="bg-white w-24  flex flex-col justify-center mb-2 ">
                                    <div className="  flex gap-1  p-1 rounded">
                                        <Image src="/images/check.svg" alt="" />
                                        <p className="text-costum-green">in stock</p>
                                    </div>
                                </div>
                                <p className="text-base text-costumBlack mb-2">$1100.00 net</p>
                                <p className="text-xl text-costum-blue font-bold">$1223.00 gross</p>
                            </div>
                        </div>
                        <div className="flex  gap-3 items-center mb-3 w-full ">
                            <input type="text" name="number" className=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-24 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                            <Select
                                placeholder="Item 1"
                                className=''
                                data={['React', 'Angular', 'Vue', 'Svelte']}
                                rightSection={icon}
                            />
                           
                        </div>
                        <button className=" mb-4 w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-full text-white bg-costum-blue">
                                        {t("favorites:productMainBtnText")}
                                            <Image src="/images/down-icon.svg" alt="" />
                            </button>
                        <div className="flex w-full justify-center">
                            <p className="text-sm font-medium text-costum-silver underline">{t("favorites:favoritesButtonDeleteText")}</p>
                        </div>
                    </div>
                    <div className="block w-full py-6 px-4 bg-star mb-2">
                        <div className="flex gap-2 mb-3">
                            <Image src="/images/favorites_img1.svg" alt="" />
                            <div className="block">
                                <p className="text-sm font-bold text-costumBlack mb-2">Sched-Pol Atla pentagonal acrylic shower tray</p>
                                <div className="bg-white w-24  flex flex-col justify-center mb-2 ">
                                    <div className="  flex gap-1  p-1 rounded">
                                        <Image src="/images/check.svg" alt="" />
                                        <p className="text-costum-green">in stock</p>
                                    </div>
                                </div>
                                <p className="text-base text-costumBlack mb-2">$1100.00 net</p>
                                <p className="text-xl text-costum-blue font-bold">$1223.00 gross</p>
                            </div>
                        </div>
                        <div className="flex  gap-3 items-center mb-4 w-full ">
                            <input type="text" name="number" className=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-24 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                            <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-52 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                                <option value="value1" selected>items</option>
                                <option value="value2" >Значение 2</option>
                                <option value="value3">Значение 3</option>
                            </select>
                        </div>
                        <button className=" mb-4 w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-full text-white bg-costum-blue">
                                        {t("favorites:productMainBtnText")}
                                            <Image src="/images/down-icon.svg" alt="" />
                            </button>
                        <div className="flex w-full justify-center">
                            <p className="text-sm font-medium text-costum-silver underline">{t("favorites:favoritesButtonDeleteText")}</p>
                        </div>
                    </div>
                    <div className="block w-full py-6 px-4 bg-star mb-2">
                        <div className="flex gap-2 mb-3">
                            <Image src="/images/favorites_img1.svg" alt="" />
                            <div className="block">
                                <p className="text-sm font-bold text-costumBlack mb-2">Sched-Pol Atla pentagonal acrylic shower tray</p>
                                <div className="bg-white w-24  flex flex-col justify-center mb-2 ">
                                    <div className="  flex gap-1  p-1 rounded">
                                        <Image src="/images/check.svg" alt="" />
                                        <p className="text-costum-green">in stock</p>
                                    </div>
                                </div>
                                <p className="text-base text-costumBlack mb-2">$1100.00 net</p>
                                <p className="text-xl text-costum-blue font-bold">$1223.00 gross</p>
                            </div>
                        </div>
                        <div className="flex  gap-3 items-center mb-4 w-full ">
                            <input type="text" name="number" className=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-24 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                            <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-52 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                                <option value="value1" selected>items</option>
                                <option value="value2" >Значение 2</option>
                                <option value="value3">Значение 3</option>
                            </select>
                        </div>
                        <button className=" mb-4 w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-full text-white bg-costum-blue">
                                        {t("favorites:productMainBtnText")}
                                            <Image src="/images/down-icon.svg" alt="" />
                            </button>
                        <div className="flex w-full justify-center">
                            <p className="text-sm font-medium text-costum-silver underline">{t("favorites:favoritesButtonDeleteText")}</p>
                        </div>
                    </div>
                    <div className="block w-full py-6 px-4 bg-star">
                        <div className="flex gap-2 mb-3">
                            <Image src="/images/favorites_img1.svg" alt="" />
                            <div className="block">
                                <p className="text-sm font-bold text-costumBlack mb-2">Sched-Pol Atla pentagonal acrylic shower tray</p>
                                <div className="bg-white w-24  flex flex-col justify-center mb-2 ">
                                    <div className="  flex gap-1  p-1 rounded">
                                        <Image src="/images/check.svg" alt="" />
                                        <p className="text-costum-green">in stock</p>
                                    </div>
                                </div>
                                <p className="text-base text-costumBlack mb-2">$1100.00 net</p>
                                <p className="text-xl text-costum-blue font-bold">$1223.00 gross</p>
                            </div>
                        </div>
                        <div className="flex  gap-3 items-center mb-4 w-full ">
                            <input type="text" name="number" className=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-24 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                            <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-52 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                                <option value="value1" selected>items</option>
                                <option value="value2" >Значение 2</option>
                                <option value="value3">Значение 3</option>
                            </select>
                        </div>
                        <button className=" mb-4 w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-full text-white bg-costum-blue">
                                        {t("favorites:productMainBtnText")}
                                            <img src="/images/down-icon.svg" alt="" />
                            </button>
                        <div className="flex w-full justify-center">
                            <p className="text-sm font-medium text-costum-silver underline">{t("favorites:favoritesButtonDeleteText")}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FavoritesPage

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common", "favorites"])),
      },
    }
  }
  