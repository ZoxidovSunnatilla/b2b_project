import React from 'react'

const SearchMenu = () => {
    return (
        <div className="">
            <div id="menu" className={`min-h-7 md:block hidden py-12 z-50 fixed w-full shadow-gray-500   shadow-lg shadow-black-500/50   bg-white `}>
            <div className="container mx-auto flex justify-between">
                <div className="w-auto">
                    <div className="flex gap-2 items-center mb-2">
                        <p className="text-base text-costum-blue font-medium">Category</p>
                    </div>
                    <div className="flex flex-col mb-10">
                        <a href="" className="text-base text-costumBlack mb-3">
                            Home & Decor
                        </a>
                        <a href="" className="text-base text-costumBlack mb-3">
                            Books
                        </a>

                    </div>
                    <div className="">
                        <p className="text-base text-costum-blue font-medium">Product</p>
                        <div className="flex justify-center items-center h-14 w-24 mb-2 rounded-lg bg-star">
                            <p className="text-base font-medium text-costumBlack">
                                LOGO
                            </p>
                        </div>
                        <div className="flex justify-center items-center h-14 w-24 mb-2 rounded-lg bg-star">
                            <p className="text-base font-medium text-costumBlack">
                                LOGO
                            </p>
                        </div>
                        <div className="flex justify-center items-center h-14 w-24 mb-2 rounded-lg bg-star">
                            <p className="text-base font-medium text-costumBlack">
                                LOGO
                            </p>
                        </div>
                    </div>

                </div>
                <div className="w-auto">
                    <div className="flex gap-2 items-center mb-2">
                        <p className="text-base text-costum-blue font-medium">Kitchen</p>
                    </div>
                    <div className="flex flex-col mb-10">
                        <a href="" className="text-base text-costumBlack mb-3">
                            Decor in <span className='text-costum-orange'>Home Decor</span>
                        </a>
                        <a href="" className="text-base text-costumBlack mb-3">
                            Decor in <span className='text-costum-orange'>Books</span>
                        </a>
                        <a href="" className="text-base text-costumBlack mb-3">
                            Decorative pillows set
                        </a>
                        <a href="" className="text-base text-costumBlack mb-3">
                            Decorative presents boxes
                        </a>
                        <a href="" className="text-base text-costumBlack mb-3">
                            Decor Amber lamps
                        </a>
                        <a href="" className="text-base text-costumBlack mb-3">
                            Decorative boxes
                        </a>
                        <a href="" className="text-base text-costumBlack mb-3">
                            Decorative presents
                        </a>
                        <a href="" className="text-base text-costumBlack mb-3">
                            Decorative balls
                        </a>
                        <a href="" className="text-base text-costumBlack mb-3">
                            Decorative balls
                        </a>

                    </div>

                </div>
                <div className="w-auto">
                    <div className="flex gap-2 items-center mb-2">
                        <p className="text-base text-costum-blue font-medium">Kitchen</p>
                    </div>
                    <div className="flex flex-col mb-12">
                        <a href="" className="text-base text-costumBlack mb-3">
                            <span className='text-costum-orange'>Gabriola Ivory Bouclé</span> Modern <br /> Pillow Set
                        </a>
                        <a href="" className="text-base text-costumBlack mb-3">
                            <span className='text-costum-orange'>Gabriola Ivory Bouclé</span> Modern <br /> Pillow Set
                        </a>
                        <a href="" className="text-base text-costumBlack mb-3">
                            <span className='text-costum-orange'>Gabriola Ivory Bouclé</span> Modern <br /> Pillow Set
                        </a>
                        <a href="" className="text-base text-costumBlack mb-3">
                            <span className='text-costum-orange'>Gabriola Ivory Bouclé</span> Modern <br /> Pillow Set
                        </a>
                    </div>
                    <div className=" w-auto  flex item-center gap-1 h-6 ">
                        <p className="text-costum-blue text-base font-medium ">
                            Views all markets
                        </p>
                        <img src="/images/arrow_forward.svg" alt="" />
                    </div>
               
                </div>
                <div className="w-1/4 pr-5 h-96 scroll-smoth overflow-y-auto">
                    
                    <div className="cart mb-3">
                        <div className="flex border border-solid gap-2 border-[#E6EFFB] rounded-lg p-2">
                            <img src="/images/search_menu_img.svg" alt="" />
                            <div className="block ">
                                <p className="text-costum-silver text-sm">Brand Name | Part No. 234565</p>
                                <p className="text-costumBlack text-base font-bold">AMBER DECOR 60W, E27 590</p>
                                <p className="text-costumBlack text-sm">Decorative lamps, lightness around </p>
                                <p className="text-costum-blue font-semibold">from $45 net</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart mb-3">
                        <div className="flex border border-solid gap-2 border-[#E6EFFB] rounded-lg p-2">
                            <img src="/images/search_menu_img.svg" alt="" />
                            <div className="block ">
                                <p className="text-costum-silver text-sm">Brand Name | Part No. 234565</p>
                                <p className="text-costumBlack text-base font-bold">AMBER DECOR 60W, E27 590</p>
                                <p className="text-costumBlack text-sm">Decorative lamps, lightness around </p>
                                <p className="text-costum-blue font-semibold">from $45 net</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart mb-3">
                        <div className="flex border border-solid gap-2 border-[#E6EFFB] rounded-lg p-2">
                            <img src="/images/search_menu_img.svg" alt="" />
                            <div className="block ">
                                <p className="text-costum-silver text-sm">Brand Name | Part No. 234565</p>
                                <p className="text-costumBlack text-base font-bold">AMBER DECOR 60W, E27 590</p>
                                <p className="text-costumBlack text-sm">Decorative lamps, lightness around </p>
                                <p className="text-costum-blue font-semibold">from $45 net</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart mb-3">
                        <div className="flex border border-solid gap-2 border-[#E6EFFB] rounded-lg p-2">
                            <img src="/images/search_menu_img.svg" alt="" />
                            <div className="block ">
                                <p className="text-costum-silver text-sm">Brand Name | Part No. 234565</p>
                                <p className="text-costumBlack text-base font-bold">AMBER DECOR 60W, E27 590</p>
                                <p className="text-costumBlack text-sm">Decorative lamps, lightness around </p>
                                <p className="text-costum-blue font-semibold">from $45 net</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart mb-3">
                        <div className="flex border border-solid gap-2 border-[#E6EFFB] rounded-lg p-2">
                            <img src="/images/search_menu_img.svg" alt="" />
                            <div className="block ">
                                <p className="text-costum-silver text-sm">Brand Name | Part No. 234565</p>
                                <p className="text-costumBlack text-base font-bold">AMBER DECOR 60W, E27 590</p>
                                <p className="text-costumBlack text-sm">Decorative lamps, lightness around </p>
                                <p className="text-costum-blue font-semibold">from $45 net</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="mobile_menu" className={`min-h-screen overflow-y-scroll md:hidden left-0 relative block py-6 z-50 fixed w-full shadow-gray-500   shadow-lg shadow-black-500/50   bg-white `}>
            <div className="container mx-auto block">
                <div className="w-auto mb-8">
                    
                    <div className="">
                        <p className="text-base text-costum-blue font-medium">Product</p>
                        <div className="flex justify-center items-center h-12 w-full mb-2 rounded-lg bg-star">
                            <p className="text-base font-medium text-costumBlack">
                                LOGO
                            </p>
                        </div>
                        <div className="flex justify-center items-center h-12 w-full mb-2 rounded-lg bg-star">
                            <p className="text-base font-medium text-costumBlack">
                                LOGO
                            </p>
                        </div>
                        <div className="flex justify-center items-center h-12 w-full mb-2 rounded-lg bg-star">
                            <p className="text-base font-medium text-costumBlack">
                                LOGO
                            </p>
                        </div>
                        <div className="flex justify-center items-center h-12 w-full mb-2 rounded-lg bg-star">
                            <p className="text-base font-medium text-costumBlack">
                                LOGO
                            </p>
                        </div>
                        <div className="flex justify-center items-center h-12 w-full mb-2 rounded-lg bg-star">
                            <p className="text-base font-medium text-costumBlack">
                                LOGO
                            </p>
                        </div>
                        <div className="flex justify-center items-center h-12 w-full mb-2 rounded-lg bg-star">
                            <p className="text-base font-medium text-costumBlack">
                                LOGO
                            </p>
                        </div>
                    </div>

                </div>
                <div className="w-auto mb-8">
                    <div className="flex gap-2 items-center mb-2">
                        <p className="text-base text-costum-blue font-medium">Kitchen</p>
                    </div>
                    <div className="flex flex-col mb-10">
                        <a href="" className="text-base text-costumBlack mb-2">
                            Decor in <span className='text-costum-orange'>Home Decor</span>
                        </a>
                        <a href="" className="text-base text-costumBlack mb-2">
                            Decor in <span className='text-costum-orange'>Books</span>
                        </a>
                        <a href="" className="text-base text-costumBlack mb-2">
                            Decorative pillows set
                        </a>
                        <a href="" className="text-base text-costumBlack mb-2">
                            Decorative presents boxes
                        </a>
                        <a href="" className="text-base text-costumBlack mb-2">
                            Decor Amber lamps
                        </a>
                        <a href="" className="text-base text-costumBlack mb-2">
                            Decorative boxes
                        </a>
                        <a href="" className="text-base text-costumBlack mb-2">
                            Decorative presents
                        </a>
                        <a href="" className="text-base text-costumBlack mb-2">
                            Decorative balls
                        </a>
                        <a href="" className="text-base text-costumBlack mb-3">
                            Decorative balls
                        </a>

                    </div>

                </div>
                <div className="w-auto mb-8">
                    <div className="flex gap-2 items-center mb-3">
                        <p className="text-base text-costum-blue font-medium">Articles</p>
                    </div>
                    <div className="flex flex-col mb-6">
                        <a href="" className="text-base text-costumBlack mb-2">
                            <span className='text-costum-orange'>Gabriola Ivory Bouclé</span> Modern  Pillow Set
                        </a>
                        <a href="" className="text-base text-costumBlack mb-2">
                            <span className='text-costum-orange'>Gabriola Ivory Bouclé</span> Modern  Pillow Set
                        </a>
                        <a href="" className="text-base text-costumBlack mb-2">
                            <span className='text-costum-orange'>Gabriola Ivory Bouclé</span> Modern  Pillow Set
                        </a>
                        <a href="" className="text-base text-costumBlack mb-2">
                            <span className='text-costum-orange'>Gabriola Ivory Bouclé</span> Modern  Pillow Set
                        </a>
                    </div>
                    <div className=" w-auto  flex item-center gap-1 h-6 ">
                        <p className="text-costum-blue text-base font-medium ">
                            Views all markets
                        </p>
                        <img src="/images/arrow_forward.svg" alt="" />
                    </div>
               
                </div>
                <div className="w-full pr-5 h-96 scroll-smoth overflow-y-auto">
                    
                    <div className="cart mb-3">
                        <div className="flex border border-solid gap-2 border-[#E6EFFB] rounded-lg p-2">
                            <img src="/images/search_menu_img.svg" alt="" />
                            <div className="block ">
                                <p className="text-costum-silver text-sm">Brand Name | Part No. 234565</p>
                                <p className="text-costumBlack text-base font-bold">AMBER DECOR 60W, E27 590</p>
                                <p className="text-costumBlack text-sm">Decorative lamps, lightness around </p>
                                <p className="text-costum-blue font-semibold">from $45 net</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart mb-3">
                        <div className="flex border border-solid gap-2 border-[#E6EFFB] rounded-lg p-2">
                            <img src="/images/search_menu_img.svg" alt="" />
                            <div className="block ">
                                <p className="text-costum-silver text-sm">Brand Name | Part No. 234565</p>
                                <p className="text-costumBlack text-base font-bold">AMBER DECOR 60W, E27 590</p>
                                <p className="text-costumBlack text-sm">Decorative lamps, lightness around </p>
                                <p className="text-costum-blue font-semibold">from $45 net</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart mb-3">
                        <div className="flex border border-solid gap-2 border-[#E6EFFB] rounded-lg p-2">
                            <img src="/images/search_menu_img.svg" alt="" />
                            <div className="block ">
                                <p className="text-costum-silver text-sm">Brand Name | Part No. 234565</p>
                                <p className="text-costumBlack text-base font-bold">AMBER DECOR 60W, E27 590</p>
                                <p className="text-costumBlack text-sm">Decorative lamps, lightness around </p>
                                <p className="text-costum-blue font-semibold">from $45 net</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart mb-3">
                        <div className="flex border border-solid gap-2 border-[#E6EFFB] rounded-lg p-2">
                            <img src="/images/search_menu_img.svg" alt="" />
                            <div className="block ">
                                <p className="text-costum-silver text-sm">Brand Name | Part No. 234565</p>
                                <p className="text-costumBlack text-base font-bold">AMBER DECOR 60W, E27 590</p>
                                <p className="text-costumBlack text-sm">Decorative lamps, lightness around </p>
                                <p className="text-costum-blue font-semibold">from $45 net</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart mb-3">
                        <div className="flex border border-solid gap-2 border-[#E6EFFB] rounded-lg p-2">
                            <img src="/images/search_menu_img.svg" alt="" />
                            <div className="block ">
                                <p className="text-costum-silver text-sm">Brand Name | Part No. 234565</p>
                                <p className="text-costumBlack text-base font-bold">AMBER DECOR 60W, E27 590</p>
                                <p className="text-costumBlack text-sm">Decorative lamps, lightness around </p>
                                <p className="text-costum-blue font-semibold">from $45 net</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default SearchMenu