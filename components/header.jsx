import React, {useState} from 'react';

const header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isOpen] = useState(false)
    return (
        <div className='  '>
            <div className=" bg-costum-gray hidden md:flex">
                <div className=' container mx-auto h-12 flex justify-between items-center '>
                    <div className='w-auto flex  gap-2 '>
                        <div className='flex'>
                            <h1 className='text-sm text-costum-text-black font-normal'>Country:</h1>
                            <select className='text-sm text-costum-text-black font-normal mr-1 bg-transparent outline-none' >
                                <option value="value1" selected>Uzbekistan</option>
                                <option value="value2" >Значение 2</option>
                                <option value="value3">Значение 3</option>
                            </select>
                        </div>
                        <div className='flex'>
                            <h1 className='text-sm text-costum-text-black font-normal'>Language:</h1>
                            <select className='text-sm text-costum-text-black font-normal mr-1 bg-transparent outline-none' >
                                <option value="value1" selected>English</option>
                                <option value="value2" >Russian</option>
                                <option value="value3">Uzbek</option>
                            </select>
                        </div>
                        <div className='flex'>
                            <h1 className='text-sm text-costum-text-black font-normal'>Currency:</h1>
                            <select className='text-sm text-costum-text-black font-normal mr-1 bg-transparent outline-none' >
                                <option value="value1" className='text-sm text-costum-text-black font-normal' selected>Uzs</option>
                                <option value="value2" >RUB</option>
                                <option value="value3">TRY</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-auto flex relative space-between gap-3 '>
                        <div className='flex items-center gap-1'>
                            <img src="/images/phone.svg" alt="" />
                            <a href='' className=' text-sm text-costum-blue font-normal '>+998 71 200 00 00</a>
                        </div>
                        <div className="rotate-60 h-7 bg-costum-text-black w-0.5"></div>
                        <div className='flex relative gap-2 items-center'>
                            <div className='relative'>
                                <img src="/images/envelope.svg" alt="" />
                                <div className="bg-costum-orange w-auto absolute rounded-full w-5 h-5 justify-center flex items-center -top-3 -right-2.5 text-xs text-white text-costum-text-black font-normal">12</div>

                            </div>
                            <a href='' className=' text-sm text-costum-text-black font-normal '>Message</a>

                        </div>
                        <div className="rotate-60 h-7 bg-costum-text-black w-0.5"></div>

                        <div className='flex gap-1 items-center'>
                            <img src="/images/user.svg" alt="" />
                            <h1 className='text-sm text-costum-text-black font-normal'>Username:</h1>
                            <select className='text-sm text-costum-text-black font-normal bg-transparent outline-none' >
                                <option value="value1" selected>Surname</option>
                                <option value="value2" >Russian</option>
                                <option value="value3">Uzbek</option>
                            </select>
                        </div>
                    </div>

                </div>

            </div>
            <div className="container mx-auto py-5 md:hidden flex justify-between">
                <div className='nav'>
                    <img src="/images/navbar.svg" alt="" />
                </div>
                <img src="/images/logo_mobile.svg" alt="" />
                <div className='relative'>
                    <img src="/images/cart.svg" alt="" className='mr-2' />
                    <div className="bg-costum-orange w-auto absolute rounded-full w-4 h-4 justify-center flex items-center -top-1.5 right-1 text-xs text-white  text-costum-text-black font-normal">12</div>
                </div>
            </div>
            <div className="container px-4 md:px-0 mx-auto bg-costum-gray md:bg-white">
                <div className="h-20 flex justify-between  items-center">
                    <img src="/images/ABUsell.svg" alt="" className='hidden md:flex' />
                    <label class="relative block w-full md:w-1/3 ">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                            <img src="/images/search.svg" alt="" />
                        </span>
                        <input class=" block bg-white w-full border  rounded-md h-12 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm" placeholder="Search by product or SKU" type="text" name="search" />
                    </label>
                    <button className="h-12 w-48 bg-costum-blue rounded-3xl text-white text-base hidden md:block">Quick Order Form</button>

                </div>
            </div>
            <div className="bg-costum-gray hidden md:flex h-20">
                <div className="container mx-auto ">
                    <div className="flex items-center h-20  justify-between">
                        <div className="flex gap-10">
                            <p className="text-custum--text-black uppercase flex">
                                Home & Garden
                                <span><img src="/images/down_icon.svg" alt="" /></span>
                            </p>
                            <p className="text-costum-text-black uppercase flex ">
                                Motors
                                <span><img src="/images/down_icon.svg" alt="" /></span>
                            </p>
                            <p className="text-costum--text-black">ELECTRONICS</p>
                            <p className="text-costum--text-black">OFFICE EQUIPMENT</p>

                        </div>
                    </div>
                </div>
            </div>
            <div id="menu" className={`min-h-7 py-12 z-50  w-full bg-white hidden`}>
                <div className="container mx-auto flex justify-between">
                    <div className="w-auto">
                        <div className="flex gap-2 items-center mb-2">
                            <img src="/images/menu_img.svg" alt="" />
                            <p className="text-base text-costum-blue font-medium">Kitchen</p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Kitchen, Dining & Bar
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Small kitchen Appliances
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Kitchen Tools and Gadgets
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Cookware
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Bakeware
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Kitchen Storage
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Flatware
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Knives and cutlery
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Bar accessories
                            </a>
                        </div>
                        <div className=" w-auto  flex item-center gap-1 h-6 ">
                            <p className="text-costum-blue text-base font-medium ">Views all markets</p>
                            <img src="/images/arrow_forward.svg" alt="" />
                        </div>
                    </div>
                    <div className="w-auto">
                        <div className="flex gap-2 items-center mb-2">
                            <img src="/images/menu_img.svg" alt="" />
                            <p className="text-base text-costum-blue font-medium">Kitchen</p>
                        </div>
                        <div className="flex flex-col mb-10">
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Kitchen, Dining & Bar
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Small kitchen Appliances
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Kitchen Tools and Gadgets
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Cookware
                            </a>
                           
                        </div>

                        <div className="flex gap-2 items-center mb-2">
                            <img src="/images/menu_img.svg" alt="" />
                            <p className="text-base text-costum-blue font-medium">Kitchen</p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Kitchen, Dining & Bar
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Small kitchen Appliances
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Kitchen Tools and Gadgets
                            </a>
                           
                           
                        </div>
                    </div>
                    <div className="w-auto">
                        <div className="flex gap-2 items-center mb-2">
                            <img src="/images/menu_img.svg" alt="" />
                            <p className="text-base text-costum-blue font-medium">Kitchen</p>
                        </div>
                        <div className="flex flex-col mb-10">
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Kitchen, Dining & Bar
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Small kitchen Appliances
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Kitchen Tools and Gadgets
                            </a>
                       
                           
                        </div>

                        <div className="flex gap-2 items-center mb-2">
                            <img src="/images/menu_img.svg" alt="" />
                            <p className="text-base text-costum-blue font-medium">Kitchen</p>
                        </div>
                        <div className="flex flex-col mb-5">
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Kitchen, Dining & Bar
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Small kitchen Appliances
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Kitchen Tools and Gadgets
                            </a>
                            <a href="" className="text-base text-costum-text-black mb-3">
                                Cookware
                            </a>
                           
                           
                        </div>
                    </div>
                    <div className="w-1/4 pr-10 h-96 scroll-smoth overflow-y-auto">
                        <div className="flex flex-wrap justify-between mb-10 gap-3">
                            <div className="flex justify-center items-center h-14 w-24 rounded-lg bg-star">
                                <p className="text-base font-medium text-costum-text-black">LOGO</p>
                            </div>
                            <div className="flex justify-center items-center h-14 w-24 rounded-lg bg-star">
                                <p className="text-base font-medium text-costum-text-black">LOGO</p>
                            </div>
                            <div className="flex justify-center items-center h-14 w-24 rounded-lg bg-star">
                                <p className="text-base font-medium text-costum-text-black">LOGO</p>
                            </div>
                            <div className="flex justify-center items-center h-14 w-24 rounded-lg bg-star">
                                <p className="text-base font-medium text-costum-text-black">LOGO</p>
                            </div>
                            <div className="flex justify-center items-center h-14 w-24 rounded-lg bg-star">
                                <p className="text-base font-medium text-costum-text-black">LOGO</p>
                            </div>
                            <div className="flex justify-center items-center h-14 w-24 rounded-lg bg-star">
                                <p className="text-base font-medium text-costum-text-black">LOGO</p>
                            </div>
                        </div>
                        <div className="cart mb-3">
                            <div className="flex px-6 py-4 border border-solid gap-2 border-costum-blue rounded-3xl">
                                <img src="/images/menu_product_img.svg" alt="" />
                                <p className="text-base text-costum-text-black">ELECTRICAL Grill Mastergrill <br /> SUP412 <span className='text-costum-orange text-sm'>-30%</span></p>
                            </div>
                        </div>
                        <div className="cart mb-3">
                            <div className="flex px-6 py-4 border border-solid gap-2 border-costum-blue rounded-3xl">
                                <img src="/images/menu_product_img.svg" alt="" />
                                <p className="text-base text-costum-text-black">ELECTRICAL Grill Mastergrill <br /> SUP412 <span className='text-costum-orange text-sm'>-30%</span></p>
                            </div>
                        </div>
                        <div className="cart mb-3">
                            <div className="flex px-6 py-4 border border-solid gap-2 border-costum-blue rounded-3xl">
                                <img src="/images/menu_product_img.svg" alt="" />
                                <p className="text-base text-costum-text-black">ELECTRICAL Grill Mastergrill <br /> SUP412 <span className='text-costum-orange text-sm'>-30%</span></p>
                            </div>
                        </div>
                        <div className="cart mb-3">
                            <div className="flex px-6 py-4 border border-solid gap-2 border-costum-blue rounded-3xl">
                                <img src="/images/menu_product_img.svg" alt="" />
                                <p className="text-base text-costum-text-black">ELECTRICAL Grill Mastergrill <br /> SUP412 <span className='text-costum-orange text-sm'>-30%</span></p>
                            </div>
                        </div>
                        <div className="cart mb-3">
                            <div className="flex px-6 py-4 border border-solid gap-2 border-costum-blue rounded-3xl">
                                <img src="/images/menu_product_img.svg" alt="" />
                                <p className="text-base text-costum-text-black">ELECTRICAL Grill Mastergrill <br /> SUP412 <span className='text-costum-orange text-sm'>-30%</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default header