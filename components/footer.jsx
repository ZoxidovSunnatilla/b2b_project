import React from 'react';
import { Accordion } from '@mantine/core';

const footer = () => {
    return (
        <div className='bg-costum-gray  w-full'>
            <div className="container mx-auto">
                <div className="flex justify-between gap-5 md:gap-0 flex-wrap w-full pt-10 mb-2.5">
                    <div className="w-auto ">
                        <p className="text-costumBlack font-bold mb-6  text-xl">Sign up for news</p>
                        <p className="text-costumBlack mb-6">Keep up to date with the latest product <br /> launches and news. Find out more about our <br /> brands and get special promo codes.</p>
                        <label class="relative block">
                            <input class=" block bg-white w-full border  rounded-md py-2 pl-3 mb-6 pr-3 shadow-sm focus:outline-none    sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                        </label>
                        <button className='text-white bg-costum-blue w-full rounded-3xl h-12 mb-4'>Sign up for newsletter</button>
                        <label className='flex'>
                            <input type="checkbox" class="mr-2" />
                            <p className="text-costumBlack">I accept <span className='text-costum-blue'>the personal data management</span></p>

                        </label>
                    </div>
                    <Accordion defaultValue='Apple' className='mb-5 md:hidden block w-full '>
                        <Accordion.Item value='1_1'>
                            <Accordion.Control>
                                <p className="text-base  text-costumBlack font-bold  bg-transparent outline-none">
                                    How to buy
                                </p>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <div className="flex flex-col">
                                    <a href="" className="text-base text-costumBlack mb-3">Payment methods</a>
                                    <a href="" className="text-base text-costumBlack mb-3">Order and pick up</a>
                                    <a href="" className="text-base text-costumBlack mb-3">Order with delivery</a>
                                    <a href="" className="text-base text-costumBlack mb-3">Shoping over the phone</a>
                                    <a href="" className="text-base text-costumBlack ">Returns</a>
                                </div>

                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='1_2'>
                            <Accordion.Control>
                                <p className="text-base text-costumBlack font-bold  bg-transparent outline-none">
                                    Help
                                </p>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <div className="flex flex-col">
                                    <a href="" className="text-base text-costumBlack mb-3">Contact</a>
                                    <a href="" className="text-base text-costumBlack mb-3">Online Help</a>
                                    <a href="" className="text-base text-costumBlack mb-3">Our Commitments</a>
                                    <a href="" className="text-base text-costumBlack ">Give feedback</a>
                                </div>

                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='1_3'>
                            <Accordion.Control>
                                <p className="text-base text-costumBlack font-bold  bg-transparent outline-none">
                                    Services
                                </p>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <div className="flex flex-col">
                                    <a href="" className="text-base text-costumBlack mb-3">Transport</a>
                                    <a href="" className="text-base text-costumBlack mb-3">Design service</a>
                                    <a href="" className="text-base text-costumBlack mb-3">Paint an plaster mixing <br /> service</a>
                                    <a href="" className="text-base text-costumBlack mb-3">Dimensioning and assemly <br /> service</a>
                                    <a href="" className="text-base text-costumBlack mb-3">Return of used equipment</a>
                                    <a href="" className="text-base text-costumBlack ">Additional services</a>
                                </div>

                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='1_4'>
                            <Accordion.Control>
                                <p className="text-base text-costumBlack font-bold  bg-transparent outline-none">
                                    About
                                </p>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <div className="flex flex-col">
                                    <a href="" className="text-base text-costumBlack mb-3">About us</a>
                                    <a href="" className="text-base text-costumBlack mb-3">Press Office</a>
                                    <a href="" className="text-base text-costumBlack mb-3">For suppliers</a>
                                    <a href="" className="text-base text-costumBlack mb-3">Regulations</a>
                                    <a href="" className="text-base text-costumBlack mb-3">Pravicy Police</a>
                                    <a href="" className="text-base text-costumBlack mb-3">Cookies</a>
                                    <a href="" className="text-base text-costumBlack ">Personal Data Request</a>
                                </div>

                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                    <div className="w-auto md:block hidden">
                        <p className="text-costumBlack font-bold mb-4 md:mb-6  text-xl">How to buy</p>
                        <div className="flex flex-col" >
                            <a href="" className="text-base text-costumBlack mb-2">Payment methods</a>
                            <a href="" className="text-base text-costumBlack mb-2">Order and pick up</a>
                            <a href="" className="text-base text-costumBlack mb-2">Order with delivery</a>
                            <a href="" className="text-base text-costumBlack mb-2">Shoping over the phone</a>
                            <a href="" className="text-base text-costumBlack ">Returns</a>
                        </div>
                    </div>
                    <div className="w-auto md:block hidden">
                        <p className="text-costumBlack font-bold mb-4 md:mb-6  text-xl">Help</p>
                        <div className="flex flex-col" >
                            <a href="" className="text-base text-costumBlack mb-2">Contact</a>
                            <a href="" className="text-base text-costumBlack mb-2">Online Help</a>
                            <a href="" className="text-base text-costumBlack mb-2">Our Commitments</a>
                            <a href="" className="text-base text-costumBlack ">Give feedback</a>
                        </div>
                    </div>
                    <div className="w-auto md:block hidden">
                        <p className="text-costumBlack font-bold mb-4 md:mb-6  text-xl">Services</p>
                        <div className="flex flex-col" >
                            <a href="" className="text-base text-costumBlack mb-2">Transport</a>
                            <a href="" className="text-base text-costumBlack mb-2">Design service</a>
                            <a href="" className="text-base text-costumBlack mb-2">Paint an plaster mixing <br /> service</a>
                            <a href="" className="text-base text-costumBlack mb-2">Dimensioning and assemly <br /> service</a>
                            <a href="" className="text-base text-costumBlack mb-2">Return of used equipment</a>
                            <a href="" className="text-base text-costumBlack ">Additional services</a>
                        </div>
                    </div>
                    <div className="w-auto md:block hidden">
                        <p className="text-costumBlack font-bold mb-4 md:mb-6  text-xl">About</p>
                        <div className="flex flex-col" >
                            <a href="" className="text-base text-costumBlack mb-2">About us</a>
                            <a href="" className="text-base text-costumBlack mb-2">Press Office</a>
                            <a href="" className="text-base text-costumBlack mb-2">For suppliers</a>
                            <a href="" className="text-base text-costumBlack mb-2">Regulations</a>
                            <a href="" className="text-base text-costumBlack mb-2">Pravicy Police</a>
                            <a href="" className="text-base text-costumBlack mb-2">Cookies</a>
                            <a href="" className="text-base text-costumBlack ">Personal Data Request</a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center  gap-2 md:mb-0 mb-3 md:justify-between flex-wrap w-full h-20 py-1 items-center">
                    <div className="flex gap-1 md:w-auto w-full items-center md:justify-start justify-center md:order-1 order-2">
                        <img src="/images/copyright.svg" alt="" />
                        <p className="text-silver text-base">2023 ABUsell</p>
                    </div>
                    <div className="w-full md:w-1/4 order-1 md:order-2 flex gap-3 md:flex-row flex-col md:justify-between justify-center items-center">
                        <div className="flex gap-3 w-full justify-center">
                            <a href="">
                                <img src="/images/facebook.svg" alt="" />
                            </a>
                            <a href="">
                                <img src="/images/instagram.svg" alt="" />
                            </a>
                            <a href="">
                                <img src="/images/youtube.svg" alt="" />
                            </a>
                        </div>
                        <img src="/images/ABUsell.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer