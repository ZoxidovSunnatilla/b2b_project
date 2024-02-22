import React, { useState } from 'react'
import { Breadcrumbs, Checkbox, Accordion, RangeSlider, Drawer, Rating, ColorSwatch, Tabs, Select, Pagination, Menu } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const ListingPage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { t } = useTranslation("common", "listing")



  return (
    <div className='container mx-auto'>
      <Breadcrumbs className='mt-8 mb-8' >
        <a href="" className="text-costum-silver text-sm">Home page </a>
        <a href="" className="text-costum-text-black text-sm">Home & Garden</a>
      </Breadcrumbs>
      <div id="listing">
        <div className="flex  gap-5">
          <div className="md:w-1/5 md:block hidden" id="filter">
            <div className="py-10 px-6 bg-costum-gray mb-6" >
              <p className="text-2xl text-costum-text-black mb-2">{t("listing:listingSubcategoryText")}</p>
              <p className="text-sm font-semibold mb-4">{t("listing:listingSubcategoryOneTwoText")} <span className='text-costum-blue'>{t("listing:listingSubcategoryTwoTwoText")}</span></p>
              <div className="flex justify-between mb-2">
                <div className="flex gap-2 items-center">
                  <Checkbox
                    defaultChecked
                  />
                  <p className="text-costum-text-black">{t("listing:subcategoryOneText")}</p>
                </div>
                <p className="text-costum-silver text-right" >139</p>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex gap-2 items-center">
                  <Checkbox
                    defaultChecked
                  />
                  <p className="text-costum-text-black">{t("listing:subcategoryTwoText")}</p>
                </div>
                <p className="text-costum-silver text-right" >139</p>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex gap-2 items-center">
                  <Checkbox
                    defaultChecked
                  />
                  <p className="text-costum-text-black">{t("listing:subcategoryThreeText")}</p>
                </div>
                <p className="text-costum-silver text-right" >139</p>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex gap-2 items-center">
                  <Checkbox
                    defaultChecked
                  />
                  <p className="text-costum-text-black">{t("listing:subcategoryFourText")}</p>
                </div>
                <p className="text-costum-silver text-right" >139</p>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex gap-2 items-center">
                  <Checkbox
                    defaultChecked
                  />
                  <p className="text-costum-text-black">{t("listing:subcategoryFiveText")}</p>
                </div>
                <p className="text-costum-silver text-right" >139</p>
              </div>

            </div>
            <div className="py-10 px-6 bg-costum-gray">
              <p className="text-2xl font-bold text-costumBlack">{t("listing:listingFiltersText")}</p>
              <p className="text-costum-blue my-3 font-medium">{t("listing:listingClearText")}</p>
              <label className="relative block w-full mb-6 ">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <img src="/images/search.svg" alt="" />
                </span>
                <input
                  className=" block bg-white w-full border  rounded-md h-12 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm"
                  placeholder={t("listing:listingSearchText")}
                  type="text"
                  name="search"
                />
              </label>
              <Accordion defaultValue='1_1' className='mb-5 p-0 w-full '>
                <Accordion.Item value='1_1'>
                  <Accordion.Control>
                    <p className="text-base text-[rgba(67, 68, 71, 1)] font-bold  bg-transparent outline-none">
                      {t("listing:listingFilterGroupOne")}
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterOneText")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterTwoText")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterThreeText")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterFourText")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterFiveText")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>

                    <a href='' className="text-costum-blue font-semibold">{t("listing:filterShowMoreText")}</a>

                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1_2'>
                  <Accordion.Control>
                    <p className="text-base text-[rgba(67, 68, 71, 1)] font-bold  bg-transparent outline-none">
                      {t("listing:listingFilterGroupRange")}
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>

                    <div className="flex justify-between items-center mb-4">
                      <input
                        class=" block bg-white w-2/5 border pl-3  rounded-md h-12  shadow-sm focus:outline-none sm:text-sm"
                        placeholder={t("listing:listingFilterInputOne")}
                        type="text"
                        name="search"
                      />
                      <p className="border border-rgba(207, 210, 213, 1) w-3"></p>
                      <input
                        class=" block bg-white w-2/5 border pl-3  rounded-md h-12  shadow-sm focus:outline-none sm:text-sm"
                        placeholder={t("listing:listingFilterInputTwo")}
                        type="text"
                        name="search"
                      />
                    </div>

                    <RangeSlider minRange={0.2} min={0} max={1} step={0.0005} defaultValue={[0.1245, 0.5535]} />
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1_3'>
                  <Accordion.Control>
                    <p className="text-base text-[rgba(67, 68, 71, 1)] font-bold  bg-transparent outline-none">
                      {t("listing:listingFilterGroupTwo")}
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterTwoSubcategoryTextOne")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterTwoSubcategoryTextTwo")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterTwoSubcategoryTextThree")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterTwoSubcategoryTextFour")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterTwoSubcategoryTextFive")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                 
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1_4'>
                  <Accordion.Control>
                    <p className="text-base text-[rgba(67, 68, 71, 1)] font-bold  bg-transparent outline-none">
                    {t("listing:listingFilterGroupThree")}
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <label className="relative block w-full mb-6 ">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <img src="/images/search.svg" alt="" />
                      </span>
                      <input
                        className=" block bg-white w-full border  rounded-md h-12 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm"
                        placeholder={t("listing:listingSearchText")}
                        type="text"
                        name="search"
                      />
                    </label>

                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterThreeSubcategoryTextOne")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterThreeSubcategoryTextTwo")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterThreeSubcategoryTextThree")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <p className="text-costum-text-black">{t("listing:filterThreeSubcategoryTextFour")}</p>
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>

                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1_5'>
                  <Accordion.Control>
                    <p className="text-base text-[rgba(67, 68, 71, 1)] font-bold  bg-transparent outline-none">
                    {t("listing:listingFilterGroupRating")}
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <Rating defaultValue={5} />
                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <Rating defaultValue={4} />

                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <Rating defaultValue={3} />

                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <Rating defaultValue={2} />

                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>
                    <div className="flex justify-between mb-2">
                      <div className="flex gap-2 items-center">
                        <Checkbox

                        />
                        <Rating defaultValue={1} />

                      </div>
                      <p className="text-costum-silver text-right" >139</p>
                    </div>


                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1_6'>
                  <Accordion.Control>
                    <p className="text-base text-[rgba(67, 68, 71, 1)] font-bold  bg-transparent outline-none">
                    {t("listing:listingFilterGroupColor")}
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="flex flex-wrap gap-2">

                      <ColorSwatch color="white" />
                      <ColorSwatch color="silver" />
                      <ColorSwatch color="black" />
                      <ColorSwatch color="gray" />
                      <ColorSwatch color="red" />
                      <ColorSwatch color="pink" />
                      <ColorSwatch color="green" />
                      <ColorSwatch color="yellow" />
                      <ColorSwatch color="blue" />
                      <ColorSwatch color="green" />
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="md:w-4/5 w-full">
            <p className="text-4xl text-costum-text-black font-bold mb-4">{t("listing:listigtTitleText")}</p>
            <p className=" mb-10 md:mb-16">{t("listing:listingSubTitleText")}</p>
            <div className="bg-costum-blue hidden md:block py-4 px-8 my-10">
              <div className=" flex md:justify-between justify-center flex-col md:flex-row flex-wrap items-center">
                <div className="flex gap-4 items-center flex-col md:flex-row flex-wrap items-center justify-center">
                  <img src="/images/advertising.svg" alt="" />
                  <h1 className="text-white md:text-7xl text-5xl font-bold">-20%</h1>
                  <p className="text-white text-center text-4xl mb-4 md:mb-0 md:text-5xl">{t("listing:listingBannerText")}</p>
                </div>
                <button className='text-costum-blue text-base h-12 w-40 bg-white rounded-3xl'>{t("listing:listingBannerBtnText")}</button>
              </div>

            </div>
            <button className="flex md:hidden uppercase text-costum-blue w-full h-12 border border-solid border-costum-blue rounded-md justify-center items-center mb-4" onClick={open}>Filters</button>
            <Tabs variant="pills" defaultValue="gallery" className='w-full mb-10'>
              <Tabs.List className='w-full tabss'>
                <div className="w-auto flex items-center gap-2">
                  <Tabs.Tab value="gallery" className="filter_tabs">
                    <img src="/images/listing_icon.svg" alt="" />
                  </Tabs.Tab>
                  <Tabs.Tab value="messages" className="filter_tabs">
                    <img src="/images/listing_icon2.svg" alt="" />
                  </Tabs.Tab>
                  <p className="text-costumBlack text-base md:text-xl ml-0 md:ml-5 mt-2.5"><span className='font-bold'>120</span> {t("listing:listingProductText")}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Select
                    placeholder="Popular items"
                    defaultValue='Popular items'
                    data={['Popular items', 'Angular', 'Vue', 'Svelte']}
                    className='md:mr-16 mr-0'
                  />
                  <Tabs.Tab value="9" className="filter_tabs" >
                    <p className="text-costumBlack">9</p>
                  </Tabs.Tab>
                  <Tabs.Tab className="filter_tabs" value="27" >
                    <p className="text-costumBlack">27</p>
                  </Tabs.Tab>
                  <Tabs.Tab className="filter_tabs" value="72" >
                    <p className="text-costumBlack">72</p>
                  </Tabs.Tab>

                </div>
              </Tabs.List>

              <Tabs.Panel value="gallery">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                  <div className="md:w-auto  min-h-72 rounded-lg">
                    <div className="relative">
                      <img src="/images/product_img.svg" alt="" className='w-full' />
                      <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">-30%</div>
                      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
                      <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
                      <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
                      <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                        <img src="/images/check.svg" alt="" />
                        <p className="text-costum-green">in stock</p>
                      </div>

                    </div>
                    <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
                    <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                      <p className="md:text-xl text-base text-costum-text-black font-bold mb-3.5">How much does it cost to <br /> finish an apartment?</p>
                      <p className="text-costum-text-black text-sm md:text-base mb-3">
                        Material of execution: brass <br />
                        Manufacturer’s color: chrome <br />
                        Guarantee: 5 years
                      </p>
                      <div className="md:flex block w-full md:items-center gap-2 mb-3">
                        <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                        <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
                      </div>
                      <div className="flex mb-2 gap-5 w-full  justify-between">
                        <input type="text" name="number" class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                        <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                          <option value="value1" selected>items</option>
                          <option value="value2" >Значение 2</option>
                          <option value="value3">Значение 3</option>
                        </select>
                      </div>

                      <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                        Add to cart
                        <img src="/images/down-icon.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="md:w-auto  min-h-72 rounded-lg">
                    <div className="relative">
                      <img src="/images/product_img.svg" alt="" className='w-full' />
                      <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">-30%</div>
                      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
                      <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
                      <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
                      <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                        <img src="/images/check.svg" alt="" />
                        <p className="text-costum-green">in stock</p>
                      </div>

                    </div>
                    <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
                    <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                      <p className="md:text-xl text-base text-costum-text-black font-bold mb-3.5">How much does it cost to <br /> finish an apartment?</p>
                      <p className="text-costum-text-black text-sm md:text-base mb-3">
                        Material of execution: brass <br />
                        Manufacturer’s color: chrome <br />
                        Guarantee: 5 years
                      </p>
                      <div className="md:flex block w-full md:items-center gap-2 mb-3">
                        <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                        <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
                      </div>
                      <div className="flex mb-2 gap-5 w-full  justify-between">
                        <input type="text" name="number" class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                        <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                          <option value="value1" selected>items</option>
                          <option value="value2" >Значение 2</option>
                          <option value="value3">Значение 3</option>
                        </select>
                      </div>

                      <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                        Add to cart
                        <img src="/images/down-icon.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="md:w-auto  min-h-72 rounded-lg">
                    <div className="relative">
                      <img src="/images/product_img.svg" alt="" className='w-full' />
                      <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">-30%</div>
                      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
                      <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
                      <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
                      <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                        <img src="/images/check.svg" alt="" />
                        <p className="text-costum-green">in stock</p>
                      </div>

                    </div>
                    <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
                    <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                      <p className="md:text-xl text-base text-costum-text-black font-bold mb-3.5">How much does it cost to <br /> finish an apartment?</p>
                      <p className="text-costum-text-black text-sm md:text-base mb-3">
                        Material of execution: brass <br />
                        Manufacturer’s color: chrome <br />
                        Guarantee: 5 years
                      </p>
                      <div className="md:flex block w-full md:items-center gap-2 mb-3">
                        <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                        <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
                      </div>
                      <div className="flex mb-2 gap-5 w-full  justify-between">
                        <input type="text" name="number" class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                        <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                          <option value="value1" selected>items</option>
                          <option value="value2" >Значение 2</option>
                          <option value="value3">Значение 3</option>
                        </select>
                      </div>

                      <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                        Add to cart
                        <img src="/images/down-icon.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="md:w-auto  min-h-72 rounded-lg">
                    <div className="relative">
                      <img src="/images/product_img.svg" alt="" className='w-full' />
                      <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">-30%</div>
                      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
                      <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
                      <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
                      <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                        <img src="/images/check.svg" alt="" />
                        <p className="text-costum-green">in stock</p>
                      </div>

                    </div>
                    <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
                    <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                      <p className="md:text-xl text-base text-costum-text-black font-bold mb-3.5">How much does it cost to <br /> finish an apartment?</p>
                      <p className="text-costum-text-black text-sm md:text-base mb-3">
                        Material of execution: brass <br />
                        Manufacturer’s color: chrome <br />
                        Guarantee: 5 years
                      </p>
                      <div className="md:flex block w-full md:items-center gap-2 mb-3">
                        <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                        <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
                      </div>
                      <div className="flex mb-2 gap-5 w-full  justify-between">
                        <input type="text" name="number" class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                        <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                          <option value="value1" selected>items</option>
                          <option value="value2" >Значение 2</option>
                          <option value="value3">Значение 3</option>
                        </select>
                      </div>

                      <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                        Add to cart
                        <img src="/images/down-icon.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="md:w-auto  min-h-72 rounded-lg">
                    <div className="relative">
                      <img src="/images/product_img.svg" alt="" className='w-full' />
                      <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">-30%</div>
                      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
                      <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
                      <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
                      <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                        <img src="/images/check.svg" alt="" />
                        <p className="text-costum-green">in stock</p>
                      </div>

                    </div>
                    <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
                    <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                      <p className="md:text-xl text-base text-costum-text-black font-bold mb-3.5">How much does it cost to <br /> finish an apartment?</p>
                      <p className="text-costum-text-black text-sm md:text-base mb-3">
                        Material of execution: brass <br />
                        Manufacturer’s color: chrome <br />
                        Guarantee: 5 years
                      </p>
                      <div className="md:flex block w-full md:items-center gap-2 mb-3">
                        <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                        <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
                      </div>
                      <div className="flex mb-2 gap-5 w-full  justify-between">
                        <input type="text" name="number" class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                        <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                          <option value="value1" selected>items</option>
                          <option value="value2" >Значение 2</option>
                          <option value="value3">Значение 3</option>
                        </select>
                      </div>

                      <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                        Add to cart
                        <img src="/images/down-icon.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="md:w-auto  min-h-72 rounded-lg">
                    <div className="relative">
                      <img src="/images/product_img.svg" alt="" className='w-full' />
                      <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">-30%</div>
                      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
                      <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
                      <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
                      <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                        <img src="/images/check.svg" alt="" />
                        <p className="text-costum-green">in stock</p>
                      </div>

                    </div>
                    <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
                    <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                      <p className="md:text-xl text-base text-costum-text-black font-bold mb-3.5">How much does it cost to <br /> finish an apartment?</p>
                      <p className="text-costum-text-black text-sm md:text-base mb-3">
                        Material of execution: brass <br />
                        Manufacturer’s color: chrome <br />
                        Guarantee: 5 years
                      </p>
                      <div className="md:flex block w-full md:items-center gap-2 mb-3">
                        <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                        <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
                      </div>
                      <div className="flex mb-2 gap-5 w-full  justify-between">
                        <input type="text" name="number" class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                        <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                          <option value="value1" selected>items</option>
                          <option value="value2" >Значение 2</option>
                          <option value="value3">Значение 3</option>
                        </select>
                      </div>

                      <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                        Add to cart
                        <img src="/images/down-icon.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="md:w-auto  min-h-72 rounded-lg">
                    <div className="relative">
                      <img src="/images/product_img.svg" alt="" className='w-full' />
                      <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">-30%</div>
                      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
                      <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
                      <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
                      <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                        <img src="/images/check.svg" alt="" />
                        <p className="text-costum-green">in stock</p>
                      </div>

                    </div>
                    <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
                    <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                      <p className="md:text-xl text-base text-costum-text-black font-bold mb-3.5">How much does it cost to <br /> finish an apartment?</p>
                      <p className="text-costum-text-black text-sm md:text-base mb-3">
                        Material of execution: brass <br />
                        Manufacturer’s color: chrome <br />
                        Guarantee: 5 years
                      </p>
                      <div className="md:flex block w-full md:items-center gap-2 mb-3">
                        <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                        <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
                      </div>
                      <div className="flex mb-2 gap-5 w-full  justify-between">
                        <input type="text" name="number" class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                        <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                          <option value="value1" selected>items</option>
                          <option value="value2" >Значение 2</option>
                          <option value="value3">Значение 3</option>
                        </select>
                      </div>

                      <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                        Add to cart
                        <img src="/images/down-icon.svg" alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="md:w-auto  min-h-72 rounded-lg">
                    <div className="relative">
                      <img src="/images/product_img.svg" alt="" className='w-full' />
                      <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">-30%</div>
                      <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
                      <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
                      <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
                      <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                        <img src="/images/check.svg" alt="" />
                        <p className="text-costum-green">in stock</p>
                      </div>

                    </div>
                    <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
                    <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
                      <p className="md:text-xl text-base text-costum-text-black font-bold mb-3.5">How much does it cost to <br /> finish an apartment?</p>
                      <p className="text-costum-text-black text-sm md:text-base mb-3">
                        Material of execution: brass <br />
                        Manufacturer’s color: chrome <br />
                        Guarantee: 5 years
                      </p>
                      <div className="md:flex block w-full md:items-center gap-2 mb-3">
                        <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                        <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
                      </div>
                      <div className="flex mb-2 gap-5 w-full  justify-between">
                        <input type="text" name="number" class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                        <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                          <option value="value1" selected>items</option>
                          <option value="value2" >Значение 2</option>
                          <option value="value3">Значение 3</option>
                        </select>
                      </div>

                      <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                        Add to cart
                        <img src="/images/down-icon.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>

              </Tabs.Panel>

              <Tabs.Panel value="messages">
                <div className="w-full mb-4 flex border border-costum-gray-300 rounded">
                  <div className="w-3/5   ">
                    <div className='border-r border-b border-costum-gray-100 border-solid flex'>
                      <div className="relative">
                        <img src="/images/product_img.svg" alt="" className='w-full' />
                        <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm   text-white font-bold">-30%</div>
                        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>

                        <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300  p-1.5 rounded">
                          <img src="/images/check.svg" alt="" />
                          <p className="text-costum-green">in stock</p>
                        </div>
                      </div>
                      <div className="texts mx-5">
                        <p className="text-sm text-costum-silver mb-2.5 mt-3.5">Logo Brand Name | Part No. 234565</p>
                        <p className="text-xl font-bold  mb-3">Ledsystems P45 LED, milky, warm color</p>
                        <p className="text-sm mb-1">Bulb thread type: <span className='font-semibold'>E27</span></p>
                        <p className="text-sm mb-1">Maximum bulb power: <span className='font-semibold'>E27</span></p>
                        <p className="text-sm mb-1">Luminous flux: <span className='font-semibold'>E27</span></p>

                      </div>
                    </div>
                    <div className="ml-4 mt-1 mb-2 flex items-center ">


                      <Menu width={1900}>
                        <Menu.Target>
                          <p className="text-custumBlack text-sm items-center mt-5 mb-5 font-bold cursor-pointer flex">
                            Technical details
                            <span>
                              <img src="/images/down_icon.svg" alt="" />
                            </span>
                          </p>
                        </Menu.Target>
                        <Menu.Dropdown >


                        </Menu.Dropdown>
                      </Menu>
                      <div className="rotate-60 h-12 bg-costum-gray w-0.5 mx-3"></div>

                      <Menu width={1900}>
                        <Menu.Target>
                          <p className="text-custumBlack text-sm items-center mt-5 mb-5 font-bold cursor-pointer flex">
                            Attachments
                            <span>
                              <img src="/images/down_icon.svg" alt="" />
                            </span>
                          </p>
                        </Menu.Target>
                        <Menu.Dropdown >


                        </Menu.Dropdown>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end p-2.5 w-2/5">
                    <div className="flex gap-3 justify-end pt-4 pr-4">
                      <img src="/images/compare.svg" alt="" />
                      <img src="/images/share.svg" alt="" />
                    </div>
                    <div className="mx-5 w-3/4 ">
                      <div className="md:flex block w-full md:items-center gap-2 mb-3">
                        <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                        <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
                      </div>
                      <div className="flex mb-2 w-full  justify-between">
                        <input type="text" name="number" class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                        <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                          <option value="value1" selected>items</option>
                          <option value="value2" >Значение 2</option>
                          <option value="value3">Значение 3</option>
                        </select>
                      </div>
                      <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                        Add to cart
                        <img src="/images/down-icon.svg" alt="" />
                      </button>
                    </div>

                  </div>
                </div>
                <div className="w-full mb-4 flex border border-costum-gray-300 rounded">
                  <div className="w-3/5   ">
                    <div className='border-r border-b border-costum-gray-100 border-solid flex'>
                      <div className="relative">
                        <img src="/images/product_img.svg" alt="" className='w-full' />
                        <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm   text-white font-bold">-30%</div>
                        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>

                        <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300  p-1.5 rounded">
                          <img src="/images/check.svg" alt="" />
                          <p className="text-costum-green">in stock</p>
                        </div>
                      </div>
                      <div className="texts mx-5">
                        <p className="text-sm text-costum-silver mb-2.5 mt-3.5">Logo Brand Name | Part No. 234565</p>
                        <p className="text-xl font-bold  mb-3">Ledsystems P45 LED, milky, warm color</p>
                        <p className="text-sm mb-1">Bulb thread type: <span className='font-semibold'>E27</span></p>
                        <p className="text-sm mb-1">Maximum bulb power: <span className='font-semibold'>E27</span></p>
                        <p className="text-sm mb-1">Luminous flux: <span className='font-semibold'>E27</span></p>

                      </div>
                    </div>
                    <div className="ml-4 mt-1 mb-2 flex items-center ">


                      <Menu width={1900}>
                        <Menu.Target>
                          <p className="text-custumBlack text-sm items-center mt-5 mb-5 font-bold cursor-pointer flex">
                            Technical details
                            <span>
                              <img src="/images/down_icon.svg" alt="" />
                            </span>
                          </p>
                        </Menu.Target>
                        <Menu.Dropdown >


                        </Menu.Dropdown>
                      </Menu>
                      <div className="rotate-60 h-12 bg-costum-gray w-0.5 mx-3"></div>

                      <Menu width={1900}>
                        <Menu.Target>
                          <p className="text-custumBlack text-sm items-center mt-5 mb-5 font-bold cursor-pointer flex">
                            Attachments
                            <span>
                              <img src="/images/down_icon.svg" alt="" />
                            </span>
                          </p>
                        </Menu.Target>
                        <Menu.Dropdown >


                        </Menu.Dropdown>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end p-2.5 w-2/5">
                    <div className="flex gap-3 justify-end pt-4 pr-4">
                      <img src="/images/compare.svg" alt="" />
                      <img src="/images/share.svg" alt="" />
                    </div>
                    <div className="mx-5 w-3/4 ">
                      <div className="md:flex block w-full md:items-center gap-2 mb-3">
                        <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                        <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
                      </div>
                      <div className="flex mb-2 w-full  justify-between">
                        <input type="text" name="number" class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                        <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                          <option value="value1" selected>items</option>
                          <option value="value2" >Значение 2</option>
                          <option value="value3">Значение 3</option>
                        </select>
                      </div>
                      <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                        Add to cart
                        <img src="/images/down-icon.svg" alt="" />
                      </button>
                    </div>

                  </div>
                </div>
                <div className="w-full mb-4 flex border border-costum-gray-300 rounded">
                  <div className="w-3/5   ">
                    <div className='border-r border-b border-costum-gray-100 border-solid flex'>
                      <div className="relative">
                        <img src="/images/product_img.svg" alt="" className='w-full' />
                        <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm   text-white font-bold">-30%</div>
                        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>

                        <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300  p-1.5 rounded">
                          <img src="/images/check.svg" alt="" />
                          <p className="text-costum-green">in stock</p>
                        </div>
                      </div>
                      <div className="texts mx-5">
                        <p className="text-sm text-costum-silver mb-2.5 mt-3.5">Logo Brand Name | Part No. 234565</p>
                        <p className="text-xl font-bold  mb-3">Ledsystems P45 LED, milky, warm color</p>
                        <p className="text-sm mb-1">Bulb thread type: <span className='font-semibold'>E27</span></p>
                        <p className="text-sm mb-1">Maximum bulb power: <span className='font-semibold'>E27</span></p>
                        <p className="text-sm mb-1">Luminous flux: <span className='font-semibold'>E27</span></p>

                      </div>
                    </div>
                    <div className="ml-4 mt-1 mb-2 flex items-center ">


                      <Menu width={1900}>
                        <Menu.Target>
                          <p className="text-custumBlack text-sm items-center mt-5 mb-5 font-bold cursor-pointer flex">
                            Technical details
                            <span>
                              <img src="/images/down_icon.svg" alt="" />
                            </span>
                          </p>
                        </Menu.Target>
                        <Menu.Dropdown >


                        </Menu.Dropdown>
                      </Menu>
                      <div className="rotate-60 h-12 bg-costum-gray w-0.5 mx-3"></div>

                      <Menu width={1900}>
                        <Menu.Target>
                          <p className="text-custumBlack text-sm items-center mt-5 mb-5 font-bold cursor-pointer flex">
                            Attachments
                            <span>
                              <img src="/images/down_icon.svg" alt="" />
                            </span>
                          </p>
                        </Menu.Target>
                        <Menu.Dropdown >


                        </Menu.Dropdown>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end p-2.5 w-2/5">
                    <div className="flex gap-3 justify-end pt-4 pr-4">
                      <img src="/images/compare.svg" alt="" />
                      <img src="/images/share.svg" alt="" />
                    </div>
                    <div className="mx-5 w-3/4 ">
                      <div className="md:flex block w-full md:items-center gap-2 mb-3">
                        <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                        <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
                      </div>
                      <div className="flex mb-2 w-full  justify-between">
                        <input type="text" name="number" class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                        <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                          <option value="value1" selected>items</option>
                          <option value="value2" >Значение 2</option>
                          <option value="value3">Значение 3</option>
                        </select>
                      </div>
                      <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                        Add to cart
                        <img src="/images/down-icon.svg" alt="" />
                      </button>
                    </div>

                  </div>
                </div>
                <div className="w-full mb-4 flex border border-costum-gray-300 rounded">
                  <div className="w-3/5   ">
                    <div className='border-r border-b border-costum-gray-100 border-solid flex'>
                      <div className="relative">
                        <img src="/images/product_img.svg" alt="" className='w-full' />
                        <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm   text-white font-bold">-30%</div>
                        <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>

                        <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300  p-1.5 rounded">
                          <img src="/images/check.svg" alt="" />
                          <p className="text-costum-green">in stock</p>
                        </div>
                      </div>
                      <div className="texts mx-5">
                        <p className="text-sm text-costum-silver mb-2.5 mt-3.5">Logo Brand Name | Part No. 234565</p>
                        <p className="text-xl font-bold  mb-3">Ledsystems P45 LED, milky, warm color</p>
                        <p className="text-sm mb-1">Bulb thread type: <span className='font-semibold'>E27</span></p>
                        <p className="text-sm mb-1">Maximum bulb power: <span className='font-semibold'>E27</span></p>
                        <p className="text-sm mb-1">Luminous flux: <span className='font-semibold'>E27</span></p>

                      </div>
                    </div>
                    <div className="ml-4 mt-1 mb-2 flex items-center ">


                      <Menu width={1900}>
                        <Menu.Target>
                          <p className="text-custumBlack text-sm items-center mt-5 mb-5 font-bold cursor-pointer flex">
                            Technical details
                            <span>
                              <img src="/images/down_icon.svg" alt="" />
                            </span>
                          </p>
                        </Menu.Target>
                        <Menu.Dropdown >


                        </Menu.Dropdown>
                      </Menu>
                      <div className="rotate-60 h-12 bg-costum-gray w-0.5 mx-3"></div>

                      <Menu width={1900}>
                        <Menu.Target>
                          <p className="text-custumBlack text-sm items-center mt-5 mb-5 font-bold cursor-pointer flex">
                            Attachments
                            <span>
                              <img src="/images/down_icon.svg" alt="" />
                            </span>
                          </p>
                        </Menu.Target>
                        <Menu.Dropdown >


                        </Menu.Dropdown>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end p-2.5 w-2/5">
                    <div className="flex gap-3 justify-end pt-4 pr-4">
                      <img src="/images/compare.svg" alt="" />
                      <img src="/images/share.svg" alt="" />
                    </div>
                    <div className="mx-5 w-3/4 ">
                      <div className="md:flex block w-full md:items-center gap-2 mb-3">
                        <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                        <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
                      </div>
                      <div className="flex mb-2 w-full  justify-between">
                        <input type="text" name="number" class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                        <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                          <option value="value1" selected>items</option>
                          <option value="value2" >Значение 2</option>
                          <option value="value3">Значение 3</option>
                        </select>
                      </div>
                      <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                        Add to cart
                        <img src="/images/down-icon.svg" alt="" />
                      </button>
                    </div>

                  </div>
                </div>

              </Tabs.Panel>


            </Tabs>
            <div className="w-full flex justify-center mb-20">
              <Pagination total={10} />
            </div>
          </div>
        </div>
      </div>
      <div id="products" className='mb-20'>
        <div className="flex justify-center md:justify-between  mb-8 w-full">
          <p className="text-costum-text-black font-bold text-2xl md:text-3xl ">{t("listing:listingProductTitle")}</p>
          <div className="md:flex hidden w-49 item-center gap-1 h-6">
            <p className="text-costum-blue text-base font-medium">{t("listing:listingProductSubTitle")}</p>
            <img src="/images/arrow_forward.svg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full md:gap-5  gap-1 mb-4 flex-wrap">
          <div className="md:w-auto md:block hidden w-44 min-h-72 rounded-lg">
            <div className="relative">
              <img src="/images/product_img.svg" alt="" className='w-full' />
              <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">-30%</div>
              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
              <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
              <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
              <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                <img src="/images/check.svg" alt="" />
                <p className="text-costum-green">in stock</p>
              </div>

            </div>
            <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
            <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
              <p className="md:text-xl text-base text-costum-text-black font-bold mb-3.5">How much does it cost to <br /> finish an apartment?</p>
              <p className="text-costum-text-black text-sm md:text-base mb-3">
                Material of execution: brass <br />
                Manufacturer’s color: chrome <br />
                Guarantee: 5 years
              </p>
              <div className="md:flex block w-full md:items-center gap-2 mb-3">
                <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
              </div>
              <div className="flex mb-2 w-full  justify-between">
                <input type="text" name="number" className=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                  <option value="value1" selected>items</option>
                  <option value="value2" >Значение 2</option>
                  <option value="value3">Значение 3</option>
                </select>
              </div>

              <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                Add to cart
                <img src="/images/down-icon.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="md:w-auto md:block hidden w-44 min-h-72 rounded-lg">
            <div className="relative">
              <img src="/images/product_img.svg" alt="" className='w-full' />
              <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">-30%</div>
              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
              <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
              <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
              <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                <img src="/images/check.svg" alt="" />
                <p className="text-costum-green">in stock</p>
              </div>

            </div>
            <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
            <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
              <p className="md:text-xl text-base text-costum-text-black font-bold mb-3.5">How much does it cost to <br /> finish an apartment?</p>
              <p className="text-costum-text-black text-sm md:text-base mb-3">
                Material of execution: brass <br />
                Manufacturer’s color: chrome <br />
                Guarantee: 5 years
              </p>
              <div className="md:flex block w-full md:items-center gap-2 mb-3">
                <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
              </div>
              <div className="flex mb-2 w-full  justify-between">
                <input type="text" name="number" className=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                  <option value="value1" selected>items</option>
                  <option value="value2" >Значение 2</option>
                  <option value="value3">Значение 3</option>
                </select>
              </div>

              <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                Add to cart
                <img src="/images/down-icon.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="md:w-auto w-44 min-h-72 rounded-lg">
            <div className="relative">
              <img src="/images/product_img.svg" alt="" className='w-full' />
              <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">-30%</div>
              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
              <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
              <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
              <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                <img src="/images/check.svg" alt="" />
                <p className="text-costum-green">in stock</p>
              </div>

            </div>
            <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
            <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
              <p className="md:text-xl text-base text-costum-text-black font-bold mb-3.5">How much does it cost to <br /> finish an apartment?</p>
              <p className="text-costum-text-black text-sm md:text-base mb-3">
                Material of execution: brass <br />
                Manufacturer’s color: chrome <br />
                Guarantee: 5 years
              </p>
              <div className="md:flex block w-full md:items-center gap-2 mb-3">
                <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
              </div>
              <div className="flex mb-2 w-full  justify-between">
                <input type="text" name="number" className=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                  <option value="value1" selected>items</option>
                  <option value="value2" >Значение 2</option>
                  <option value="value3">Значение 3</option>
                </select>
              </div>

              <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                Add to cart
                <img src="/images/down-icon.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="md:w-auto w-44 min-h-72 rounded-lg">
            <div className="relative">
              <img src="/images/product_img.svg" alt="" className='w-full' />
              <div className="absolute top-5 left-0 bg-costum-orange p-1 text-sm  w-max text-white font-bold">-30%</div>
              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2"><img src="/images/star.svg" alt="" /></div>
              <div className="absolute bottom-2 right-3"><img src="/images/share.svg" alt="" /></div>
              <div className="absolute bottom-10 right-3"><img src="/images/compare.svg" alt="" /></div>
              <div className="absolute bottom-2 left-2 flex gap-1 border border-solid border-costum-gray-300 p-1.5 rounded">
                <img src="/images/check.svg" alt="" />
                <p className="text-costum-green">in stock</p>
              </div>

            </div>
            <p className="text-silver text-sm md:text-base pt-2 px-2">Omnires | Part No. 2123532</p>
            <div className="w-full min-h-16 py-2 px-2 rounded-b-lg border-t-0 border border-costum-gray border-solid">
              <p className="md:text-xl text-base text-costum-text-black font-bold mb-3.5">How much does it cost to <br /> finish an apartment?</p>
              <p className="text-costum-text-black text-sm md:text-base mb-3">
                Material of execution: brass <br />
                Manufacturer’s color: chrome <br />
                Guarantee: 5 years
              </p>
              <div className="md:flex block w-full md:items-center gap-2 mb-3">
                <p className="text-costum-blue font-bold text-sm md:text-base">your price <span className='text-2xl mx-1 font-bold'>$45.00</span>net</p>
                <p className="text-costum-orange text-sm md:text-base line-through">$55.00 net</p>
              </div>
              <div className="flex mb-2 w-full  justify-between">
                <input type="text" name="number" className=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm " placeholder="1" />
                <select className='text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none' >
                  <option value="value1" selected>items</option>
                  <option value="value2" >Значение 2</option>
                  <option value="value3">Значение 3</option>
                </select>
              </div>

              <button className=" w-full flex justify-center gap-2 md:text-base text-sm py-2 px-6 rounded-3xl text-white bg-costum-blue">
                Add to cart
                <img src="/images/down-icon.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-49 item-center gap-1 w-full mb-8  justify-center h-6 md:hidden mx-auto ">
          <p className="text-costum-blue text-base font-medium ">Show all recomended products</p>
          <img src="/images/arrow_forward.svg" alt="" />
        </div>
      </div>
      <Drawer opened={opened} onClose={close}>
        <div className="px-4" id="drawer">
          <p className="text-2xl font-bold text-costumBlack">Filter & Subcategoris</p>
          <p className="text-costum-blue my-3 font-medium">Clear All</p>
          <label className="relative block w-full mb-6 ">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <img src="/images/search.svg" alt="" />
            </span>
            <input
              className=" block bg-white w-full border  rounded-md h-12 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm"
              placeholder="Search by product or SKU"
              type="text"
              name="search"
            />
          </label>
          <div className="flex justify-between mt-4 mb-2">
            <div className="flex gap-2 items-center">
              <Checkbox
                defaultChecked
              />
              <p className="text-costum-text-black">Subcategory 1</p>
            </div>
            <p className="text-costum-silver text-right" >139</p>
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex gap-2 items-center">
              <Checkbox
                defaultChecked
              />
              <p className="text-costum-text-black">Subcategory 2</p>
            </div>
            <p className="text-costum-silver text-right" >139</p>
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex gap-2 items-center">
              <Checkbox
                defaultChecked
              />
              <p className="text-costum-text-black">Subcategory 3</p>
            </div>
            <p className="text-costum-silver text-right" >139</p>
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex gap-2 items-center">
              <Checkbox
                defaultChecked
              />
              <p className="text-costum-text-black">Subcategory 4</p>
            </div>
            <p className="text-costum-silver text-right" >139</p>
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex gap-2 items-center">
              <Checkbox
                defaultChecked
              />
              <p className="text-costum-text-black">Subcategory 5</p>
            </div>
            <p className="text-costum-silver text-right" >139</p>
          </div>
          <div className="flex justify-between mb-6">
            <div className="flex gap-2 items-center">
              <Checkbox
                defaultChecked
              />
              <p className="text-costum-text-black">Subcategory 6</p>
            </div>
            <p className="text-costum-silver text-right" >139</p>
          </div>
          <p className="text-xl font-bold text-costumBlack">Filter & Subcategoris</p>

          <Accordion defaultValue='1_1' className='mb-5 p-0 w-full '>
            <Accordion.Item value='1_1'>
              <Accordion.Control>
                <p className="text-base text-[rgba(67, 68, 71, 1)] font-bold  bg-transparent outline-none">
                  Filters Group
                </p>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 1</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 2</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 3</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 4</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 5</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 6</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <a href='' className="text-costum-blue font-semibold">show more</a>

              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value='1_2'>
              <Accordion.Control>
                <p className="text-base text-[rgba(67, 68, 71, 1)] font-bold  bg-transparent outline-none">
                  Filters Group
                </p>
              </Accordion.Control>
              <Accordion.Panel>

                <div className="flex justify-between items-center mb-4">
                  <input
                    class=" block bg-white w-2/5 border pl-3  rounded-md h-12  shadow-sm focus:outline-none sm:text-sm"
                    placeholder="From"
                    type="text"
                    name="search"
                  />
                  <p className="border border-rgba(207, 210, 213, 1) w-3"></p>
                  <input
                    class=" block bg-white w-2/5 border pl-3  rounded-md h-12  shadow-sm focus:outline-none sm:text-sm"
                    placeholder="To"
                    type="text"
                    name="search"
                  />
                </div>

                <RangeSlider minRange={0.2} min={0} max={1} step={0.0005} defaultValue={[0.1245, 0.5535]} />
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value='1_3'>
              <Accordion.Control>
                <p className="text-base text-[rgba(67, 68, 71, 1)] font-bold  bg-transparent outline-none">
                  Filters Group
                </p>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 1</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 2</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 3</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 4</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 5</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 6</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>

              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value='1_4'>
              <Accordion.Control>
                <p className="text-base text-[rgba(67, 68, 71, 1)] font-bold  bg-transparent outline-none">
                  Filters Group
                </p>
              </Accordion.Control>
              <Accordion.Panel>
                <label className="relative block w-full mb-6 ">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <img src="/images/search.svg" alt="" />
                  </span>
                  <input
                    className=" block bg-white w-full border  rounded-md h-12 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm"
                    placeholder="Search by product or SKU"
                    type="text"
                    name="search"
                  />
                </label>

                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 3</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 4</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 5</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <p className="text-costum-text-black">Subcategory 6</p>
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>

              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value='1_5'>
              <Accordion.Control>
                <p className="text-base text-[rgba(67, 68, 71, 1)] font-bold  bg-transparent outline-none">
                  Filters Group
                </p>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <Rating defaultValue={5} />
                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <Rating defaultValue={4} />

                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <Rating defaultValue={3} />

                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <Rating defaultValue={2} />

                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="flex gap-2 items-center">
                    <Checkbox

                    />
                    <Rating defaultValue={1} />

                  </div>
                  <p className="text-costum-silver text-right" >139</p>
                </div>


              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value='1_6'>
              <Accordion.Control>
                <p className="text-base text-[rgba(67, 68, 71, 1)] font-bold  bg-transparent outline-none">
                  Filters Group
                </p>
              </Accordion.Control>
              <Accordion.Panel>
                <div className="flex flex-wrap gap-2">

                  <ColorSwatch color="white" />
                  <ColorSwatch color="silver" />
                  <ColorSwatch color="black" />
                  <ColorSwatch color="gray" />
                  <ColorSwatch color="red" />
                  <ColorSwatch color="pink" />
                  <ColorSwatch color="green" />
                  <ColorSwatch color="yellow" />
                  <ColorSwatch color="blue" />
                  <ColorSwatch color="green" />
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
      </Drawer>
    </div>
  )
}

export default ListingPage


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "listing"])),
    },
  }
}
