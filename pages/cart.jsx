import React from "react"
import {
  Breadcrumbs,
  Tabs,
  List,
  Checkbox,
  Input,
  Accordion,
  Rating,
} from "@mantine/core"

const CartPage = () => {
  return (
    <div id="cart">
      <div className="container mx-auto">
        <Breadcrumbs className="mt-8 mb-10 breadcumbs">
          <a href="" className="text-costum-silver text-sm">
            Link{" "}
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
            Home Page{" "}
          </a>
          <a href="" className="text-costum-text-black text-sm">
            Link 10
          </a>
        </Breadcrumbs>

        <div className="flex gap-5 flex-wrap md:flex-nowrap">
          <div className="md:w-5/6 w-full">
            <div className="w-full bg-bg-voltiva rounded-lg p-5 w-full mb-5">
              <p className="md:text-xl text-base mb-2 font-bold">
                Search by product or part number
              </p>
              <div className="flex w-full justify-between gap-3 md:gap-0 flex-wrap md:flex-row ">
                <input
                  class=" block bg-white w-full md:w-2/4 border  rounded-md h-12 pl-5 pr-3 shadow-sm focus:outline-none sm:text-sm"
                  placeholder="Search by product or SKU"
                  type="text"
                  name="search"
                />
                <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costum-text-black font-normal w-full md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                  <option value="value1" selected>
                    Text input
                  </option>
                  <option value="value2">Значение 2</option>
                  <option value="value3">Значение 3</option>
                </select>
                <button className="bg-costum-silver rounded-3xl h-12 w-full md:w-48 text-white">
                  Add item
                </button>
              </div>
            </div>
            <div id="tabs" className="md:flex hidden w-full">
              <Tabs
                color="#1071FF"
                variant="pills"
                defaultValue="Cart-1"
                className="w-full"
              >
                <Tabs.List>
                  <Tabs.Tab value="Cart-1">Cart 1 (21)</Tabs.Tab>
                  <Tabs.Tab value="Cart-2">Cart 2 (21)</Tabs.Tab>
                  <Tabs.Tab value="Cart-3">Cart 3 (21)</Tabs.Tab>
                  <Tabs.Tab value="Cart-4">Cart 4 (21)</Tabs.Tab>
                  <Tabs.Tab value="Cart-5">Cart 5 (21)</Tabs.Tab>
                  <Tabs.Tab value="Cart-6">Cart 6 (0)</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="Cart-1">
                  <div className="w-full bg-costum-blue flex justify-between rounded-se-lg p-4 items-center">
                    <div className="flex">
                      <div className="flex gap-2">
                        <p className="text-white font-bold text-base">Cart 1</p>
                        <img src="/images/edit_icon.svg" alt="" />
                      </div>
                      <p className="text-xs text-white ml-8 items-center flex font-medium">
                        items: 21
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <img src="/images/star_white.svg" alt="" />
                      <div className="text-white">Save cart</div>
                    </div>
                  </div>
                  <Accordion defaultValue="1_1" className=" ">
                    <Accordion.Item value="1_1">
                      <Accordion.Control>
                        <div className="flex">
                          <div className="flex gap-2">
                            <p className="text-costumBlack font-bold text-base">
                              Supplier 1
                            </p>
                          </div>
                          <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                            items: 21
                          </p>
                        </div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="1_2">
                      <Accordion.Control>
                        <div className="flex">
                          <div className="flex gap-2">
                            <p className="text-costumBlack font-bold text-base">
                              Supplier 2{" "}
                            </p>
                          </div>
                          <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                            items: 21
                          </p>
                        </div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                  <div className="bg-bg-voltiva p-4 mb-20">
                    <div className="flex gap-3">
                      <input
                        class=" block bg-white w-auto border  rounded-md h-12 pl-3 w-96 pr-3 shadow-sm focus:outline-none sm:text-sm"
                        placeholder="Enter promotion code"
                        type="text"
                      />
                      <button className="bg-costum-blue text-white rounded-3xl w-28 h-12">
                        Apply
                      </button>
                    </div>
                    <div className="border border-solid mt-10 mb-10"></div>
                    <div className="flex justify-between">
                      <div className="block">
                        <div className="flex items-center gap-2">
                          <img src="/images/download_icon.svg" alt="" />
                          <p className="text-base text-costum-blue font-medium mb-3">
                            Download cart
                          </p>
                        </div>

                        <div className="flex items-center">
                          <img src="/images/cart_delete_icon.svg" alt="" />
                          <p className="text-base text-[#434447]">
                            Remove Product
                          </p>
                        </div>
                      </div>
                      <div className="w-2/5">
                        <div className="w-full flex justify-between">
                          <p className="text-base font-bold text-left w-2/4 justify-between text-costumBlack">
                            Price net:{" "}
                          </p>
                          <p className="text-base font-bold text-right w-1/4 justify-between text-costumBlack">
                            $910.00{" "}
                          </p>
                        </div>
                        <div className="w-full flex justify-between">
                          <p className="text-2xl font-bold text-left w-2/4 justify-between text-costum-blue">
                            Total price gross:{" "}
                          </p>
                          <p className="text-2xl font-bold text-right w-1/4 justify-between text-costum-blue">
                            $1154.00{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="Cart-2">
                  <div className="w-full bg-costum-blue flex justify-between rounded-se-lg p-4 items-center">
                    <div className="flex">
                      <div className="flex gap-2">
                        <p className="text-white font-bold text-base">Cart 2</p>
                        <img src="/images/edit_icon.svg" alt="" />
                      </div>
                      <p className="text-xs text-white ml-8 items-center flex font-medium">
                        items: 21
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <img src="/images/star_white.svg" alt="" />
                      <div className="text-white">Save cart</div>
                    </div>
                  </div>
                  <Accordion defaultValue="1_1" className="">
                    <Accordion.Item value="1_1">
                      <Accordion.Control>
                        <div className="flex">
                          <div className="flex gap-2">
                            <p className="text-costumBlack font-bold text-base">
                              Supplier 1
                            </p>
                          </div>
                          <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                            items: 21
                          </p>
                        </div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="1_2">
                      <Accordion.Control>
                        <div className="flex">
                          <div className="flex gap-2">
                            <p className="text-costumBlack font-bold text-base">
                              Supplier 2{" "}
                            </p>
                          </div>
                          <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                            items: 21
                          </p>
                        </div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                  <div className="bg-bg-voltiva p-4 mb-20">
                    <div className="flex gap-3">
                      <input
                        class=" block bg-white w-auto border  rounded-md h-12 pl-3 w-96 pr-3 shadow-sm focus:outline-none sm:text-sm"
                        placeholder="Enter promotion code"
                        type="text"
                      />
                      <button className="bg-costum-blue text-white rounded-3xl w-28 h-12">
                        Apply
                      </button>
                    </div>
                    <div className="border border-solid mt-10 mb-10"></div>
                    <div className="flex justify-between">
                      <div className="block">
                        <div className="flex items-center gap-2">
                          <img src="/images/download_icon.svg" alt="" />
                          <p className="text-base text-costum-blue font-medium mb-3">
                            Download cart
                          </p>
                        </div>

                        <div className="flex items-center">
                          <img src="/images/cart_delete_icon.svg" alt="" />
                          <p className="text-base text-[#434447]">
                            Remove Product
                          </p>
                        </div>
                      </div>
                      <div className="w-2/5">
                        <div className="w-full flex justify-between">
                          <p className="text-base font-bold text-left w-2/4 justify-between text-costumBlack">
                            Price net:{" "}
                          </p>
                          <p className="text-base font-bold text-right w-1/4 justify-between text-costumBlack">
                            $910.00{" "}
                          </p>
                        </div>
                        <div className="w-full flex justify-between">
                          <p className="text-2xl font-bold text-left w-2/4 justify-between text-costum-blue">
                            Total price gross:{" "}
                          </p>
                          <p className="text-2xl font-bold text-right w-1/4 justify-between text-costum-blue">
                            $1154.00{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="Cart-3">
                  <div className="w-full bg-costum-blue flex justify-between rounded-se-lg p-4 items-center">
                    <div className="flex">
                      <div className="flex gap-2">
                        <p className="text-white font-bold text-base">Cart 3</p>
                        <img src="/images/edit_icon.svg" alt="" />
                      </div>
                      <p className="text-xs text-white ml-8 items-center flex font-medium">
                        items: 21
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <img src="/images/star_white.svg" alt="" />
                      <div className="text-white">Save cart</div>
                    </div>
                  </div>
                  <Accordion defaultValue="1_1" className=" ">
                    <Accordion.Item value="1_1">
                      <Accordion.Control>
                        <div className="flex">
                          <div className="flex gap-2">
                            <p className="text-costumBlack font-bold text-base">
                              Supplier 1
                            </p>
                          </div>
                          <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                            items: 21
                          </p>
                        </div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="1_2">
                      <Accordion.Control>
                        <div className="flex">
                          <div className="flex gap-2">
                            <p className="text-costumBlack font-bold text-base">
                              Supplier 2{" "}
                            </p>
                          </div>
                          <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                            items: 21
                          </p>
                        </div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                  <div className="bg-bg-voltiva p-4 mb-20">
                    <div className="flex gap-3">
                      <input
                        class=" block bg-white w-auto border  rounded-md h-12 pl-3 w-96 pr-3 shadow-sm focus:outline-none sm:text-sm"
                        placeholder="Enter promotion code"
                        type="text"
                      />
                      <button className="bg-costum-blue text-white rounded-3xl w-28 h-12">
                        Apply
                      </button>
                    </div>
                    <div className="border border-solid mt-10 mb-10"></div>
                    <div className="flex justify-between">
                      <div className="block">
                        <div className="flex items-center gap-2">
                          <img src="/images/download_icon.svg" alt="" />
                          <p className="text-base text-costum-blue font-medium mb-3">
                            Download cart
                          </p>
                        </div>

                        <div className="flex items-center">
                          <img src="/images/cart_delete_icon.svg" alt="" />
                          <p className="text-base text-[#434447]">
                            Remove Product
                          </p>
                        </div>
                      </div>
                      <div className="w-2/5">
                        <div className="w-full flex justify-between">
                          <p className="text-base font-bold text-left w-2/4 justify-between text-costumBlack">
                            Price net:{" "}
                          </p>
                          <p className="text-base font-bold text-right w-1/4 justify-between text-costumBlack">
                            $910.00{" "}
                          </p>
                        </div>
                        <div className="w-full flex justify-between">
                          <p className="text-2xl font-bold text-left w-2/4 justify-between text-costum-blue">
                            Total price gross:{" "}
                          </p>
                          <p className="text-2xl font-bold text-right w-1/4 justify-between text-costum-blue">
                            $1154.00{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tabs.Panel>

                <Tabs.Panel value="Cart-4">
                  <div className="w-full bg-costum-blue flex justify-between rounded-se-lg p-4 items-center">
                    <div className="flex">
                      <div className="flex gap-2">
                        <p className="text-white font-bold text-base">Cart 4</p>
                        <img src="/images/edit_icon.svg" alt="" />
                      </div>
                      <p className="text-xs text-white ml-8 items-center flex font-medium">
                        items: 21
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <img src="/images/star_white.svg" alt="" />
                      <div className="text-white">Save cart</div>
                    </div>
                  </div>
                  <Accordion defaultValue="1_1" className="">
                    <Accordion.Item value="1_1">
                      <Accordion.Control>
                        <div className="flex">
                          <div className="flex gap-2">
                            <p className="text-costumBlack font-bold text-base">
                              Supplier 1
                            </p>
                          </div>
                          <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                            items: 21
                          </p>
                        </div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="1_2">
                      <Accordion.Control>
                        <div className="flex">
                          <div className="flex gap-2">
                            <p className="text-costumBlack font-bold text-base">
                              Supplier 2{" "}
                            </p>
                          </div>
                          <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                            items: 21
                          </p>
                        </div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                  <div className="bg-bg-voltiva p-4 mb-20">
                    <div className="flex gap-3">
                      <input
                        class=" block bg-white w-auto border  rounded-md h-12 pl-3 w-96 pr-3 shadow-sm focus:outline-none sm:text-sm"
                        placeholder="Enter promotion code"
                        type="text"
                      />
                      <button className="bg-costum-blue text-white rounded-3xl w-28 h-12">
                        Apply
                      </button>
                    </div>
                    <div className="border border-solid mt-10 mb-10"></div>
                    <div className="flex justify-between">
                      <div className="block">
                        <div className="flex items-center gap-2">
                          <img src="/images/download_icon.svg" alt="" />
                          <p className="text-base text-costum-blue font-medium mb-3">
                            Download cart
                          </p>
                        </div>

                        <div className="flex items-center">
                          <img src="/images/cart_delete_icon.svg" alt="" />
                          <p className="text-base text-[#434447]">
                            Remove Product
                          </p>
                        </div>
                      </div>
                      <div className="w-2/5">
                        <div className="w-full flex justify-between">
                          <p className="text-base font-bold text-left w-2/4 justify-between text-costumBlack">
                            Price net:{" "}
                          </p>
                          <p className="text-base font-bold text-right w-1/4 justify-between text-costumBlack">
                            $910.00{" "}
                          </p>
                        </div>
                        <div className="w-full flex justify-between">
                          <p className="text-2xl font-bold text-left w-2/4 justify-between text-costum-blue">
                            Total price gross:{" "}
                          </p>
                          <p className="text-2xl font-bold text-right w-1/4 justify-between text-costum-blue">
                            $1154.00{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="Cart-5">
                  <div className="w-full bg-costum-blue flex justify-between rounded-se-lg p-4 items-center">
                    <div className="flex">
                      <div className="flex gap-2">
                        <p className="text-white font-bold text-base">Cart 5</p>
                        <img src="/images/edit_icon.svg" alt="" />
                      </div>
                      <p className="text-xs text-white ml-8 items-center flex font-medium">
                        items: 21
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <img src="/images/star_white.svg" alt="" />
                      <div className="text-white">Save cart</div>
                    </div>
                  </div>
                  <Accordion defaultValue="1_1" className=" ">
                    <Accordion.Item value="1_1">
                      <Accordion.Control>
                        <div className="flex">
                          <div className="flex gap-2">
                            <p className="text-costumBlack font-bold text-base">
                              Supplier 1
                            </p>
                          </div>
                          <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                            items: 21
                          </p>
                        </div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item value="1_2">
                      <Accordion.Control>
                        <div className="flex">
                          <div className="flex gap-2">
                            <p className="text-costumBlack font-bold text-base">
                              Supplier 2{" "}
                            </p>
                          </div>
                          <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                            items: 21
                          </p>
                        </div>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white w-full flex px-4 mb-2 py-3 rounded-lg">
                            <div className="relative w-2/12">
                              <img src="/images/cart_img.svg" alt="" />
                              <div className="w-8 h-8 rounded-full flex justify-center items-center bg-star absolute top-2 right-2">
                                <img src="/images/star.svg" alt="" />
                              </div>
                            </div>
                            <div className="flex justify-between w-10/12">
                              <div className="block ml-1 mt-2">
                                <p className="text-sm text-costum-silver mb-3">
                                  Brand Name | Part No. 234565
                                </p>
                                <p className="text-xl text-costumBlack font-bold mb-2">
                                  AMBER DECOR Small Lamp 60W, E27 590
                                </p>
                                <p className="text-sm text-[#3DB62A]">
                                  Delivery date: April 4th
                                </p>
                                <div className="flex  mt-4 gap-3 w-full  ">
                                  <input
                                    type="text"
                                    name="number"
                                    class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-12 md:w-24 block  rounded-md sm:text-sm "
                                    placeholder="1"
                                  />
                                  <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-24 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                    <option value="value1" selected>
                                      items
                                    </option>
                                    <option value="value2">Значение 2</option>
                                    <option value="value3">Значение 3</option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex flex-col justify-between items-end w-auto">
                                <div className="text-end">
                                  <p className="text-base mb-3 text-costumBlack">
                                    $70.00 net
                                  </p>
                                  <p className="text-2xl text-costum-blue font-semibold">
                                    $120.00 gross
                                  </p>
                                </div>
                                <div className="flex items-center">
                                  <img
                                    src="/images/cart_delete_icon.svg"
                                    alt=""
                                  />
                                  <p className="text-base text-[#434447]">
                                    Remove Product
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                  <div className="bg-bg-voltiva p-4 mb-20">
                    <div className="flex gap-3">
                      <input
                        class=" block bg-white w-auto border  rounded-md h-12 pl-3 w-96 pr-3 shadow-sm focus:outline-none sm:text-sm"
                        placeholder="Enter promotion code"
                        type="text"
                      />
                      <button className="bg-costum-blue text-white rounded-3xl w-28 h-12">
                        Apply
                      </button>
                    </div>
                    <div className="border border-solid mt-10 mb-10"></div>
                    <div className="flex justify-between">
                      <div className="block">
                        <div className="flex items-center gap-2">
                          <img src="/images/download_icon.svg" alt="" />
                          <p className="text-base text-costum-blue font-medium mb-3">
                            Download cart
                          </p>
                        </div>

                        <div className="flex items-center">
                          <img src="/images/cart_delete_icon.svg" alt="" />
                          <p className="text-base text-[#434447]">
                            Remove Product
                          </p>
                        </div>
                      </div>
                      <div className="w-2/5">
                        <div className="w-full flex justify-between">
                          <p className="text-base font-bold text-left w-2/4 justify-between text-costumBlack">
                            Price net:{" "}
                          </p>
                          <p className="text-base font-bold text-right w-1/4 justify-between text-costumBlack">
                            $910.00{" "}
                          </p>
                        </div>
                        <div className="w-full flex justify-between">
                          <p className="text-2xl font-bold text-left w-2/4 justify-between text-costum-blue">
                            Total price gross:{" "}
                          </p>
                          <p className="text-2xl font-bold text-right w-1/4 justify-between text-costum-blue">
                            $1154.00{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tabs.Panel>
                <Tabs.Panel value="Cart-6">
                  <div className="w-full bg-costum-blue flex justify-between rounded-se-lg p-4 items-center">
                    <div className="flex">
                      <div className="flex gap-2">
                        <p className="text-white font-bold text-base">Cart 6</p>
                        <img src="/images/edit_icon.svg" alt="" />
                      </div>
                      <p className="text-xs text-white ml-8 items-center flex font-medium">
                        items: 0
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <img src="/images/star_white.svg" alt="" />
                      <div className="text-white">Save cart</div>
                    </div>
                  </div>
                  <div className="bg-bg-voltiva p-5 rounded-b-lg mb-10">
                    <p className="text-base text-costumBlack font-bold mb-3">
                      Your shopping cart is empty
                    </p>
                    <p className="text-base text-costumBlack">
                      Save time, you can place your last unfinished and saved
                      carts or search by product and part number.
                    </p>
                  </div>
                  <p className="text-2xl font-bold mb-4">Abandoned carts</p>
                  <div className="flex bg-star w-full justify-between rounded-lg mb-5 items-cetner p-5">
                    <div className="flex items-center">
                      <div className="flex items-center  gap-2">
                        <img src="/images/shopping_cart.svg" alt="" />
                        <p className="text-xl text-costum-blue font-bold">
                          Private Card
                        </p>
                      </div>
                      <p className="text-sm text-costumBlack ml-10 ">
                        items:20
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <div className="text">
                        <p className="text-sm text-costumBlack font-semibold mb-2 text-right">
                          Total net:
                        </p>
                        <p className="text-sm text-costum-blue  font-semibold text-right">
                          Total net:
                        </p>
                      </div>
                      <div className="text">
                        <p className="text-sm text-costumBlack font-semibold mb-2 text-right">
                          $270.00 net{" "}
                        </p>
                        <p className="text-sm text-costum-blue font-semibold text-right">
                          $320.00 grass
                        </p>
                      </div>
                    </div>
                    <button className="bg-costum-blue h-12 rounded-full text-white w-48 ">
                      Restore cart
                    </button>
                  </div>
                  <div className="flex bg-star w-full justify-between rounded-lg mb-5 items-cetner p-5">
                    <div className="flex items-center">
                      <div className="flex items-center  gap-2">
                        <img src="/images/shopping_cart.svg" alt="" />
                        <p className="text-xl text-costum-blue font-bold">
                          Private Card
                        </p>
                      </div>
                      <p className="text-sm text-costumBlack ml-10 ">
                        items:20
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <div className="text">
                        <p className="text-sm text-costumBlack font-semibold mb-2 text-right">
                          Total net:
                        </p>
                        <p className="text-sm text-costum-blue  font-semibold text-right">
                          Total net:
                        </p>
                      </div>
                      <div className="text">
                        <p className="text-sm text-costumBlack font-semibold mb-2 text-right">
                          $270.00 net{" "}
                        </p>
                        <p className="text-sm text-costum-blue font-semibold text-right">
                          $320.00 grass
                        </p>
                      </div>
                    </div>
                    <button className="bg-costum-blue h-12 rounded-full text-white w-48 ">
                      Restore cart
                    </button>
                  </div>
                  <div className="flex bg-star w-full justify-between rounded-lg mb-5 items-cetner p-5">
                    <div className="flex items-center">
                      <div className="flex items-center  gap-2">
                        <img src="/images/shopping_cart.svg" alt="" />
                        <p className="text-xl text-costum-blue font-bold">
                          Private Card
                        </p>
                      </div>
                      <p className="text-sm text-costumBlack ml-10 ">
                        items:20
                      </p>
                    </div>
                    <div className="flex gap-5">
                      <div className="text">
                        <p className="text-sm text-costumBlack font-semibold mb-2 text-right">
                          Total net:
                        </p>
                        <p className="text-sm text-costum-blue  font-semibold text-right">
                          Total net:
                        </p>
                      </div>
                      <div className="text">
                        <p className="text-sm text-costumBlack font-semibold mb-2 text-right">
                          $270.00 net{" "}
                        </p>
                        <p className="text-sm text-costum-blue font-semibold text-right">
                          $320.00 grass
                        </p>
                      </div>
                    </div>
                    <button className="bg-costum-blue h-12 rounded-full text-white w-48 ">
                      Restore cart
                    </button>
                  </div>
                </Tabs.Panel>
              </Tabs>
            </div>
            <div id="tabs_mobile">
              <Accordion defaultValue="Apple" className="mb-5 md:hidden block">
                <Accordion.Item value="1_1">
                  <Accordion.Control>
                    <p
                      id="mobile_tabs"
                      className="text-sm text-costumBlack font-normal ml-2 bg-transparent outline-none"
                    >
                      Cart 1 (21)
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="w-full bg-[#004796] flex justify-between  p-4 items-center">
                      <div className="flex">
                        <div className="flex gap-2">
                          <p className="text-white font-bold text-base">
                            Cart 1
                          </p>
                          <img src="/images/edit_icon.svg" alt="" />
                        </div>
                        <p className="text-xs text-white ml-8 items-center flex font-medium">
                          items: 21
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <img src="/images/star_white.svg" alt="" />
                        <div className="text-white">Save cart</div>
                      </div>
                    </div>
                    <Accordion defaultValue="1_1" className=" ">
                      <Accordion.Item value="1_1" id="accordion_mobile">
                        <Accordion.Control>
                          <div className="flex">
                            <div className="flex gap-2">
                              <p className="text-costumBlack font-bold text-base">
                                Supplier 1
                              </p>
                            </div>
                            <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                              items: 21
                            </p>
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Panel>
                      </Accordion.Item>
                      <Accordion.Item value="1_2">
                        <Accordion.Control>
                          <div className="flex">
                            <div className="flex gap-2">
                              <p className="text-costumBlack font-bold text-base">
                                Supplier 2{" "}
                              </p>
                            </div>
                            <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                              items: 21
                            </p>
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Panel>
                      </Accordion.Item>
                    </Accordion>
                    <div className="bg-bg-voltiva p-4 mb-20">
                      <div className="flex gap-3">
                        <input
                          class=" block bg-white w-auto border  rounded-md h-12 pl-3 w-96 pr-3 shadow-sm focus:outline-none sm:text-sm"
                          placeholder="Enter promotion code"
                          type="text"
                        />
                        <button className="bg-costum-blue text-white rounded-3xl w-28 h-12">
                          Apply
                        </button>
                      </div>
                      <div className="border border-solid mt-5 mb-5"></div>
                      <div className="block">
                        <div className="block">
                          <div className="flex items-center gap-2">
                            <img src="/images/download_icon.svg" alt="" />
                            <p className="text-sm  text-costum-blue font-medium mb-3">
                              Download cart
                            </p>
                          </div>

                          <div className="flex items-center">
                            <img src="/images/cart_delete_icon.svg" alt="" />
                            <p className="text-sm font-medium  text-[#434447]">
                              Remove Product
                            </p>
                          </div>
                        </div>
                        <div className="w-full mt-3">
                          <div className="w-full flex justify-between">
                            <p className="text-sm font-bold text-left w-2/4 justify-between text-costumBlack">
                              Price net:{" "}
                            </p>
                            <p className="text-sm font-bold text-right w-1/4 justify-between text-costumBlack">
                              $910.00{" "}
                            </p>
                          </div>
                          <div className="w-full flex justify-between">
                            <p className="text-lg font-bold text-left w-2/4 justify-between text-costum-blue">
                              Total price gross:{" "}
                            </p>
                            <p className="text-lg font-bold text-right w-1/4 justify-between text-costum-blue">
                              $1154.00{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="1_2">
                  <Accordion.Control>
                    <p
                      id="mobile_tabs"
                      className="text-sm text-costumBlack font-normal ml-2 bg-transparent outline-none"
                    >
                      Cart 2 (21)
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="w-full bg-[#004796] flex justify-between  p-4 items-center">
                      <div className="flex">
                        <div className="flex gap-2">
                          <p className="text-white font-bold text-base">
                            Cart 1
                          </p>
                          <img src="/images/edit_icon.svg" alt="" />
                        </div>
                        <p className="text-xs text-white ml-8 items-center flex font-medium">
                          items: 21
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <img src="/images/star_white.svg" alt="" />
                        <div className="text-white">Save cart</div>
                      </div>
                    </div>
                    <Accordion defaultValue="1_1" className=" ">
                      <Accordion.Item value="1_1" id="accordion_mobile">
                        <Accordion.Control>
                          <div className="flex">
                            <div className="flex gap-2">
                              <p className="text-costumBlack font-bold text-base">
                                Supplier 1
                              </p>
                            </div>
                            <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                              items: 21
                            </p>
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Panel>
                      </Accordion.Item>
                      <Accordion.Item value="1_2">
                        <Accordion.Control>
                          <div className="flex">
                            <div className="flex gap-2">
                              <p className="text-costumBlack font-bold text-base">
                                Supplier 2{" "}
                              </p>
                            </div>
                            <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                              items: 21
                            </p>
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Panel>
                      </Accordion.Item>
                    </Accordion>
                    <div className="bg-bg-voltiva p-4 mb-20">
                      <div className="flex gap-3">
                        <input
                          class=" block bg-white w-auto border  rounded-md h-12 pl-3 w-96 pr-3 shadow-sm focus:outline-none sm:text-sm"
                          placeholder="Enter promotion code"
                          type="text"
                        />
                        <button className="bg-costum-blue text-white rounded-3xl w-28 h-12">
                          Apply
                        </button>
                      </div>
                      <div className="border border-solid mt-5 mb-5"></div>
                      <div className="block">
                        <div className="block">
                          <div className="flex items-center gap-2">
                            <img src="/images/download_icon.svg" alt="" />
                            <p className="text-sm  text-costum-blue font-medium mb-3">
                              Download cart
                            </p>
                          </div>

                          <div className="flex items-center">
                            <img src="/images/cart_delete_icon.svg" alt="" />
                            <p className="text-sm font-medium  text-[#434447]">
                              Remove Product
                            </p>
                          </div>
                        </div>
                        <div className="w-full mt-3">
                          <div className="w-full flex justify-between">
                            <p className="text-sm font-bold text-left w-2/4 justify-between text-costumBlack">
                              Price net:{" "}
                            </p>
                            <p className="text-sm font-bold text-right w-1/4 justify-between text-costumBlack">
                              $910.00{" "}
                            </p>
                          </div>
                          <div className="w-full flex justify-between">
                            <p className="text-lg font-bold text-left w-2/4 justify-between text-costum-blue">
                              Total price gross:{" "}
                            </p>
                            <p className="text-lg font-bold text-right w-1/4 justify-between text-costum-blue">
                              $1154.00{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="1_3">
                  <Accordion.Control>
                    <p
                      id="mobile_tabs"
                      className="text-sm text-costumBlack font-normal ml-2 bg-transparent outline-none"
                    >
                      Cart 3 (21)
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="w-full bg-[#004796] flex justify-between  p-4 items-center">
                      <div className="flex">
                        <div className="flex gap-2">
                          <p className="text-white font-bold text-base">
                            Cart 3
                          </p>
                          <img src="/images/edit_icon.svg" alt="" />
                        </div>
                        <p className="text-xs text-white ml-8 items-center flex font-medium">
                          items: 21
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <img src="/images/star_white.svg" alt="" />
                        <div className="text-white">Save cart</div>
                      </div>
                    </div>
                    <Accordion defaultValue="1_1" className=" ">
                      <Accordion.Item value="1_1" id="accordion_mobile">
                        <Accordion.Control>
                          <div className="flex">
                            <div className="flex gap-2">
                              <p className="text-costumBlack font-bold text-base">
                                Supplier 1
                              </p>
                            </div>
                            <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                              items: 21
                            </p>
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Panel>
                      </Accordion.Item>
                      <Accordion.Item value="1_2">
                        <Accordion.Control>
                          <div className="flex">
                            <div className="flex gap-2">
                              <p className="text-costumBlack font-bold text-base">
                                Supplier 2{" "}
                              </p>
                            </div>
                            <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                              items: 21
                            </p>
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Panel>
                      </Accordion.Item>
                    </Accordion>
                    <div className="bg-bg-voltiva p-4 mb-20">
                      <div className="flex gap-3">
                        <input
                          class=" block bg-white w-auto border  rounded-md h-12 pl-3 w-96 pr-3 shadow-sm focus:outline-none sm:text-sm"
                          placeholder="Enter promotion code"
                          type="text"
                        />
                        <button className="bg-costum-blue text-white rounded-3xl w-28 h-12">
                          Apply
                        </button>
                      </div>
                      <div className="border border-solid mt-5 mb-5"></div>
                      <div className="block">
                        <div className="block">
                          <div className="flex items-center gap-2">
                            <img src="/images/download_icon.svg" alt="" />
                            <p className="text-sm  text-costum-blue font-medium mb-3">
                              Download cart
                            </p>
                          </div>

                          <div className="flex items-center">
                            <img src="/images/cart_delete_icon.svg" alt="" />
                            <p className="text-sm font-medium  text-[#434447]">
                              Remove Product
                            </p>
                          </div>
                        </div>
                        <div className="w-full mt-3">
                          <div className="w-full flex justify-between">
                            <p className="text-sm font-bold text-left w-2/4 justify-between text-costumBlack">
                              Price net:{" "}
                            </p>
                            <p className="text-sm font-bold text-right w-1/4 justify-between text-costumBlack">
                              $910.00{" "}
                            </p>
                          </div>
                          <div className="w-full flex justify-between">
                            <p className="text-lg font-bold text-left w-2/4 justify-between text-costum-blue">
                              Total price gross:{" "}
                            </p>
                            <p className="text-lg font-bold text-right w-1/4 justify-between text-costum-blue">
                              $1154.00{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="1_4">
                  <Accordion.Control>
                    <p
                      id="mobile_tabs"
                      className="text-sm text-costumBlack font-normal ml-2 bg-transparent outline-none"
                    >
                      Cart 4 (21)
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="w-full bg-[#004796] flex justify-between  p-4 items-center">
                      <div className="flex">
                        <div className="flex gap-2">
                          <p className="text-white font-bold text-base">
                            Cart 4
                          </p>
                          <img src="/images/edit_icon.svg" alt="" />
                        </div>
                        <p className="text-xs text-white ml-8 items-center flex font-medium">
                          items: 21
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <img src="/images/star_white.svg" alt="" />
                        <div className="text-white">Save cart</div>
                      </div>
                    </div>
                    <Accordion defaultValue="1_1" className=" ">
                      <Accordion.Item value="1_1" id="accordion_mobile">
                        <Accordion.Control>
                          <div className="flex">
                            <div className="flex gap-2">
                              <p className="text-costumBlack font-bold text-base">
                                Supplier 1
                              </p>
                            </div>
                            <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                              items: 21
                            </p>
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Panel>
                      </Accordion.Item>
                      <Accordion.Item value="1_2">
                        <Accordion.Control>
                          <div className="flex">
                            <div className="flex gap-2">
                              <p className="text-costumBlack font-bold text-base">
                                Supplier 2{" "}
                              </p>
                            </div>
                            <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                              items: 21
                            </p>
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Panel>
                      </Accordion.Item>
                    </Accordion>
                    <div className="bg-bg-voltiva p-4 mb-20">
                      <div className="flex gap-3">
                        <input
                          class=" block bg-white w-auto border  rounded-md h-12 pl-3 w-96 pr-3 shadow-sm focus:outline-none sm:text-sm"
                          placeholder="Enter promotion code"
                          type="text"
                        />
                        <button className="bg-costum-blue text-white rounded-3xl w-28 h-12">
                          Apply
                        </button>
                      </div>
                      <div className="border border-solid mt-5 mb-5"></div>
                      <div className="block">
                        <div className="block">
                          <div className="flex items-center gap-2">
                            <img src="/images/download_icon.svg" alt="" />
                            <p className="text-sm  text-costum-blue font-medium mb-3">
                              Download cart
                            </p>
                          </div>

                          <div className="flex items-center">
                            <img src="/images/cart_delete_icon.svg" alt="" />
                            <p className="text-sm font-medium  text-[#434447]">
                              Remove Product
                            </p>
                          </div>
                        </div>
                        <div className="w-full mt-3">
                          <div className="w-full flex justify-between">
                            <p className="text-sm font-bold text-left w-2/4 justify-between text-costumBlack">
                              Price net:{" "}
                            </p>
                            <p className="text-sm font-bold text-right w-1/4 justify-between text-costumBlack">
                              $910.00{" "}
                            </p>
                          </div>
                          <div className="w-full flex justify-between">
                            <p className="text-lg font-bold text-left w-2/4 justify-between text-costum-blue">
                              Total price gross:{" "}
                            </p>
                            <p className="text-lg font-bold text-right w-1/4 justify-between text-costum-blue">
                              $1154.00{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="1_5">
                  <Accordion.Control>
                    <p
                      id="mobile_tabs"
                      className="text-sm text-costumBlack font-normal ml-2 bg-transparent outline-none"
                    >
                      Cart 5 (21)
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="w-full bg-[#004796] flex justify-between  p-4 items-center">
                      <div className="flex">
                        <div className="flex gap-2">
                          <p className="text-white font-bold text-base">
                            Cart 5
                          </p>
                          <img src="/images/edit_icon.svg" alt="" />
                        </div>
                        <p className="text-xs text-white ml-8 items-center flex font-medium">
                          items: 21
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <img src="/images/star_white.svg" alt="" />
                        <div className="text-white">Save cart</div>
                      </div>
                    </div>
                    <Accordion defaultValue="1_1" className=" ">
                      <Accordion.Item value="1_1" id="accordion_mobile">
                        <Accordion.Control>
                          <div className="flex">
                            <div className="flex gap-2">
                              <p className="text-costumBlack font-bold text-base">
                                Supplier 1
                              </p>
                            </div>
                            <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                              items: 21
                            </p>
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Panel>
                      </Accordion.Item>
                      <Accordion.Item value="1_2">
                        <Accordion.Control>
                          <div className="flex">
                            <div className="flex gap-2">
                              <p className="text-costumBlack font-bold text-base">
                                Supplier 2{" "}
                              </p>
                            </div>
                            <p className="text-xs text-costumBlack ml-8 items-center flex font-medium">
                              items: 21
                            </p>
                          </div>
                        </Accordion.Control>
                        <Accordion.Panel>
                          <div className="bg-star p-2 h-[530px] overflow-y-scroll">
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white w-full flex px-4 mb-2 py-2 rounded-lg">
                              <div className="relative w-3/12">
                                <img src="/images/cart_img.svg" alt="" />
                              </div>
                              <div className="flex justify-between flex-col   w-full">
                                <div className="block ml-1 mt-2">
                                  <p className="text-sm text-costum-silver mb-3">
                                    Brand Name | Part No. 234565
                                  </p>
                                  <p className="text-base text-costumBlack font-bold mb-2">
                                    AMBER DECOR Small Lamp 60W, E27 590
                                  </p>
                                  <p className="text-sm text-[#3DB62A]">
                                    Delivery date: April 4th
                                  </p>
                                </div>
                                <div className="flex flex-col justify-between  w-full">
                                  <div className="">
                                    <p className="text-base mb-1 text-costumBlack">
                                      $70.00 net
                                    </p>
                                    <p className="text-xl  text-costum-blue font-semibold">
                                      $120.00 gross
                                    </p>
                                  </div>
                                  <div className="flex  mt-2 mb-2 gap-3 w-full  ">
                                    <input
                                      type="text"
                                      name="number"
                                      class=" px-3 py-2 h-12 text-center bg-white border shadow-sm border-slate-300 placeholder-slate-400 outline-none w-1/4 md:w-24 block  rounded-md sm:text-sm "
                                      placeholder="1"
                                    />
                                    <select className="text-sm bg-white border shadow-sm h-12 border-slate-300 rounded-md text-costumBlack font-normal w-3/4 md:w-40 mr-1 bg-transparent py-2 px-3 outline-none">
                                      <option value="value1" selected>
                                        items
                                      </option>
                                      <option value="value2">Значение 2</option>
                                      <option value="value3">Значение 3</option>
                                    </select>
                                  </div>
                                  <div className="flex items-center">
                                    <img
                                      src="/images/cart_delete_icon.svg"
                                      alt=""
                                    />
                                    <p className="text-base text-[#434447]">
                                      Remove Product
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Accordion.Panel>
                      </Accordion.Item>
                    </Accordion>
                    <div className="bg-bg-voltiva p-4 mb-20">
                      <div className="flex gap-3">
                        <input
                          class=" block bg-white w-auto border  rounded-md h-12 pl-3 w-96 pr-3 shadow-sm focus:outline-none sm:text-sm"
                          placeholder="Enter promotion code"
                          type="text"
                        />
                        <button className="bg-costum-blue text-white rounded-3xl w-28 h-12">
                          Apply
                        </button>
                      </div>
                      <div className="border border-solid mt-5 mb-5"></div>
                      <div className="block">
                        <div className="block">
                          <div className="flex items-center gap-2">
                            <img src="/images/download_icon.svg" alt="" />
                            <p className="text-sm  text-costum-blue font-medium mb-3">
                              Download cart
                            </p>
                          </div>

                          <div className="flex items-center">
                            <img src="/images/cart_delete_icon.svg" alt="" />
                            <p className="text-sm font-medium  text-[#434447]">
                              Remove Product
                            </p>
                          </div>
                        </div>
                        <div className="w-full mt-3">
                          <div className="w-full flex justify-between">
                            <p className="text-sm font-bold text-left w-2/4 justify-between text-costumBlack">
                              Price net:{" "}
                            </p>
                            <p className="text-sm font-bold text-right w-1/4 justify-between text-costumBlack">
                              $910.00{" "}
                            </p>
                          </div>
                          <div className="w-full flex justify-between">
                            <p className="text-lg font-bold text-left w-2/4 justify-between text-costum-blue">
                              Total price gross:{" "}
                            </p>
                            <p className="text-lg font-bold text-right w-1/4 justify-between text-costum-blue">
                              $1154.00{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="1_6">
                  <Accordion.Control>
                    <p className="text-sm text-costum-text-black font-normal ml-2 bg-transparent outline-none">
                      Cart 6 (0)
                    </p>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <div className="w-full bg-costum-blue flex justify-between  p-4 items-center">
                      <div className="flex">
                        <div className="flex gap-2">
                          <p className="text-white font-bold text-base">
                            Cart 6
                          </p>
                          <img src="/images/edit_icon.svg" alt="" />
                        </div>
                        <p className="text-xs text-white ml-8 items-center flex font-medium">
                          items: 0
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <img src="/images/star_white.svg" alt="" />
                        <div className="text-white">Save cart</div>
                      </div>
                    </div>
                    <div className="bg-bg-voltiva p-5 rounded-b-lg mb-10">
                      <p className="text-base text-costumBlack font-bold mb-3">
                        Your shopping cart is empty
                      </p>
                      <p className="text-base text-costumBlack">
                        Save time, you can place your last unfinished and saved
                        carts or search by product and part number.
                      </p>
                    </div>
                    <p className="text-2xl font-bold mb-4">Abandoned carts</p>
                    <div className="block bg-star w-full  rounded-lg mb-5 items-cetner p-5">
                      <div className="flex justify-between mb-2 flex-wrap w-full">
                        <div className="flex items-center  gap-2">
                          <img src="/images/shopping_cart.svg" alt="" />
                          <p className="text-base text-costum-blue font-bold">
                            Private Card
                          </p>
                        </div>
                        <p className="text-sm text-costumBlack ml-10 ">
                          items:20
                        </p>
                      </div>
                      <div className="flex gap-5 mb-3 w-full justify-between ">
                        <div className="text">
                          <p className="text-sm text-costumBlack font-semibold mb-1 text-right">
                            Total net:
                          </p>
                          <p className="text-sm text-costum-blue  font-semibold text-right">
                            Total net:
                          </p>
                        </div>
                        <div className="text">
                          <p className="text-sm text-costumBlack font-semibold mb-1 text-right">
                            $270.00 net{" "}
                          </p>
                          <p className="text-sm text-costum-blue font-semibold text-right">
                            $320.00 grass
                          </p>
                        </div>
                      </div>
                      <button className="bg-costum-blue h-12 w-full rounded-full text-white w-48 ">
                        Restore cart
                      </button>
                    </div>
                    <div className="block bg-star w-full  rounded-lg mb-5 items-cetner p-5">
                      <div className="flex justify-between mb-2 flex-wrap w-full">
                        <div className="flex items-center  gap-2">
                          <img src="/images/shopping_cart.svg" alt="" />
                          <p className="text-base text-costum-blue font-bold">
                            Private Card
                          </p>
                        </div>
                        <p className="text-sm text-costumBlack ml-10 ">
                          items:20
                        </p>
                      </div>
                      <div className="flex gap-5 mb-3 w-full justify-between ">
                        <div className="text">
                          <p className="text-sm text-costumBlack font-semibold mb-1 text-right">
                            Total net:
                          </p>
                          <p className="text-sm text-costum-blue  font-semibold text-right">
                            Total net:
                          </p>
                        </div>
                        <div className="text">
                          <p className="text-sm text-costumBlack font-semibold mb-1 text-right">
                            $270.00 net{" "}
                          </p>
                          <p className="text-sm text-costum-blue font-semibold text-right">
                            $320.00 grass
                          </p>
                        </div>
                      </div>
                      <button className="bg-costum-blue h-12 w-full rounded-full text-white w-48 ">
                        Restore cart
                      </button>
                    </div>
                    <div className="block bg-star w-full  rounded-lg mb-5 items-cetner p-5">
                      <div className="flex justify-between mb-2 flex-wrap w-full">
                        <div className="flex items-center  gap-2">
                          <img src="/images/shopping_cart.svg" alt="" />
                          <p className="text-base text-costum-blue font-bold">
                            Private Card
                          </p>
                        </div>
                        <p className="text-sm text-costumBlack ml-10 ">
                          items:20
                        </p>
                      </div>
                      <div className="flex gap-5 mb-3 w-full justify-between ">
                        <div className="text">
                          <p className="text-sm text-costumBlack font-semibold mb-1 text-right">
                            Total net:
                          </p>
                          <p className="text-sm text-costum-blue  font-semibold text-right">
                            Total net:
                          </p>
                        </div>
                        <div className="text">
                          <p className="text-sm text-costumBlack font-semibold mb-1 text-right">
                            $270.00 net{" "}
                          </p>
                          <p className="text-sm text-costum-blue font-semibold text-right">
                            $320.00 grass
                          </p>
                        </div>
                      </div>
                      <button className="bg-costum-blue h-12 w-full rounded-full text-white w-48 ">
                        Restore cart
                      </button>
                    </div>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="md:w-2/5 w-full bg-bg-voltiva h-max rounded-lg md:p-6 p-3">
            <p className="text-3xl font-bold text-costumBlack mb-6">Summary</p>
            <div className="bg-white md:p-3 p-3 flex justify-between mb-2 rounded-lg">
              <div className="text">
                <p className="text-costum-blue md:text-xl text-base mb-2 font-bold">
                  Supplier 1
                </p>
                <p className="text-sm text-costumBlack">items: 23</p>
              </div>
              <div className="w-3/5">
                <div className="w-full flex justify-between">
                  <p className="text-sm font-semibold mb-3 text-left w-2/5 justify-between text-costumBlack">
                    Price net:{" "}
                  </p>
                  <p className="text-sm font-semibold text-right w-1/3 justify-between text-costumBlack">
                    $910.00{" "}
                  </p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm font-semibold  text-left w-2/4 justify-between text-costum-blue">
                    Price gross:{" "}
                  </p>
                  <p className="text-sm font-semibold text-right w-1/3 justify-between text-costum-blue">
                    $154.00{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 flex justify-between mb-2 rounded-lg">
              <div className="text">
                <p className="text-costum-blue text-base md:text-xl mb-2 font-bold">
                  Supplier 1
                </p>
                <p className="text-sm text-costumBlack">items: 23</p>
              </div>
              <div className="w-3/5">
                <div className="w-full flex justify-between">
                  <p className="text-sm font-semibold mb-3 text-left w-2/5 justify-between text-costumBlack">
                    Price net:{" "}
                  </p>
                  <p className="text-sm font-semibold text-right w-1/3 justify-between text-costumBlack">
                    $910.00{" "}
                  </p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="text-sm font-semibold  text-left w-2/4 justify-between text-costum-blue">
                    Price gross:{" "}
                  </p>
                  <p className="text-sm font-semibold text-right w-1/3 justify-between text-costum-blue">
                    $154.00{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between mb-3">
              <p className="text-base font-bold  text-left  justify-between text-costumBlack">
                Price net:{" "}
              </p>
              <p className="text-base font-bold text-right  justify-between text-costumBlack">
                $910.00{" "}
              </p>
            </div>
            <div className="w-full flex justify-between mb-3">
              <p className="text-base font-bold  text-left  justify-between text-costumBlack">
                Price gross:{" "}
              </p>
              <p className="text-base font-bold text-right  justify-between text-costumBlack">
                $154.00{" "}
              </p>
            </div>
            <div className="w-full flex justify-between mb-3">
              <p className="text-base font-bold  text-left  justify-between text-costumBlack">
                Price gross:{" "}
              </p>
              <p className="text-base font-bold text-right  justify-between text-costumBlack">
                $154.00{" "}
              </p>
            </div>
            <div className="w-full flex justify-between mb-6">
              <p className="text-2xl font-bold  text-left  justify-between text-costum-blue">
                Price net:{" "}
              </p>
              <p className="text-2xl font-bold text-right  justify-between text-costum-blue">
                $910.00{" "}
              </p>
            </div>
            <button className="bg-costum-blue text-white mb-3 w-full h-12 rounded-full text-center font-medium">
              Go to checkout
            </button>
            <button className="bg-[#FF4E00] text-white mb-3 w-full h-12 rounded-full text-center font-medium">
              Send RFQ
            </button>
            <button className="bg-white border-2 border-solid border-costum-blue text-costum-blue mb-6 w-full h-12 rounded-full text-center font-medium">
              Go back to shopping
            </button>

            <div className="flex gap-2 items-center mb-2">
              <img src="/images/credit_card.svg" alt="" />
              <p className="text-sm text-[#434447]">Safety payment</p>
            </div>
            <div className="flex gap-2 items-center mb-2">
              <img src="/images/credit_card.svg" alt="" />
              <p className="text-sm text-[#434447]">Safety payment</p>
            </div>

            <div className="flex items-center gap-2 ">
              <img src="/images/credit_card.svg" alt="" />
              <p className="text-sm text-[#434447]">Safety payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
