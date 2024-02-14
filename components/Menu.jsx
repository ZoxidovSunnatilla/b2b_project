import React, { useState, useEffect } from 'react';
import { requests } from "@/src/services/request"


const menu = ({ item }) => {
    const { id, name, slug, children } = item;

    return (
        <div className='menu' key={id}>
            <div id="menu" className={`min-h-7 py-12 z-50 fixed w-full shadow-gray-500  relative shadow-lg shadow-black-500/50   bg-white `}>

                <div className="container mx-auto flex justify-between">
                    <div className="w-auto">
                        {children?.map((items) => (
                            <div className="" key={items.id}>
                                <div className="flex gap-2 items-center mb-2" key={items.id}>
                                    <img src="/images/menu_img1.svg" alt="" />
                                    <p className="text-base text-costum-blue font-medium">{items.name}</p>
                                </div>
                                <div className="flex flex-col mb-5">
                                
                                {items?.children.map((item) => (
                                    <a href="" key={item.id} className="text-base text-costumBlack mb-3">
                                        {item.name}
                                    </a>
                                    
                                ))}
                                </div>
                                
                            </div>

                        ))}
                       
                        <div className=" w-auto  flex item-center gap-1 h-6 ">
                            <p className="text-costum-blue text-base font-medium ">
                                Views all markets
                            </p>
                            <img src="/images/arrow_forward.svg" alt="" />
                        </div>
                    </div>
                
                    <div className="w-[30%] pr-10 h-96 scroll-smoth overflow-y-auto">
                        <div className="flex flex-wrap justify-between mb-10 gap-3">
                            <div className="flex justify-center items-center h-14 w-24 rounded-lg bg-star">
                                <p className="text-base font-medium text-costumBlack">
                                    LOGO
                                </p>
                            </div>
                            <div className="flex justify-center items-center h-14 w-24 rounded-lg bg-star">
                                <p className="text-base font-medium text-costumBlack">
                                    LOGO
                                </p>
                            </div>
                            <div className="flex justify-center items-center h-14 w-24 rounded-lg bg-star">
                                <p className="text-base font-medium text-costumBlack">
                                    LOGO
                                </p>
                            </div>
                            <div className="flex justify-center items-center h-14 w-24 rounded-lg bg-star">
                                <p className="text-base font-medium text-costumBlack">
                                    LOGO
                                </p>
                            </div>
                            <div className="flex justify-center items-center h-14 w-24 rounded-lg bg-star">
                                <p className="text-base font-medium text-costumBlack">
                                    LOGO
                                </p>
                            </div>
                            <div className="flex justify-center items-center h-14 w-24 rounded-lg bg-star">
                                <p className="text-base font-medium text-costumBlack">
                                    LOGO
                                </p>
                            </div>
                        </div>
                        <div className="cart mb-3">
                            <div className="flex px-6 py-4 border border-solid gap-2 border-costum-blue rounded-3xl">
                                <img src="/images/menu_product_img.svg" alt="" />
                                <p className="text-base text-costumBlack">
                                    ELECTRICAL Grill Mastergrill <br /> SUP412{" "}
                                    <span className="text-costum-orange text-sm">-30%</span>
                                </p>
                            </div>
                        </div>
                        <div className="cart mb-3">
                            <div className="flex px-6 py-4 border border-solid gap-2 border-costum-blue rounded-3xl">
                                <img src="/images/menu_product_img.svg" alt="" />
                                <p className="text-base text-costumBlack">
                                    ELECTRICAL Grill Mastergrill <br /> SUP412{" "}
                                    <span className="text-costum-orange text-sm">-30%</span>
                                </p>
                            </div>
                        </div>
                        <div className="cart mb-3">
                            <div className="flex px-6 py-4 border border-solid gap-2 border-costum-blue rounded-3xl">
                                <img src="/images/menu_product_img.svg" alt="" />
                                <p className="text-base text-costumBlack">
                                    ELECTRICAL Grill Mastergrill <br /> SUP412{" "}
                                    <span className="text-costum-orange text-sm">-30%</span>
                                </p>
                            </div>
                        </div>
                        <div className="cart mb-3">
                            <div className="flex px-6 py-4 border border-solid gap-2 border-costum-blue rounded-3xl">
                                <img src="/images/menu_product_img.svg" alt="" />
                                <p className="text-base text-costumBlack">
                                    ELECTRICAL Grill Mastergrill <br /> SUP412{" "}
                                    <span className="text-costum-orange text-sm">-30%</span>
                                </p>
                            </div>
                        </div>
                        <div className="cart mb-3">
                            <div className="flex px-6 py-4 border border-solid gap-2 border-costum-blue rounded-3xl">
                                <img src="/images/menu_product_img.svg" alt="" />
                                <p className="text-base text-costumBlack">
                                    ELECTRICAL Grill Mastergrill <br /> SUP412{" "}
                                    <span className="text-costum-orange text-sm">-30%</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default menu