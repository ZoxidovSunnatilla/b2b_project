import React from 'react';

const header = () => {
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
                    <div className="bg-costum-orange w-auto absolute rounded-full w-5 h-5 justify-center flex items-center -top-2.5 right-px text-xs text-white  text-costum-text-black font-normal">12</div>
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

        </div>
    )
}

export default header