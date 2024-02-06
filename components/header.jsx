import { Badge, Menu, Select, Input, Drawer, Accordion, AccordionItem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import MenuHeader from "./Menu";
import SearchMenu from './SearchMenu';


const header = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const search_icon = <img src='/images/search.svg' />


    return (

        <div className="  ">
            <div className=" bg-costum-gray hidden md:flex">
                <div className=" container mx-auto h-12 flex justify-between items-center ">
                    <div className="w-auto flex  items-center gap-2 ">
                        <div className="flex items-center">
                            <h1 className="text-sm text-costumBlack font-normal">
                                Country:
                            </h1>
                            <select className="text-sm text-costumBlack font-normal mr-1 bg-transparent outline-none">
                                <option value="value1" selected>
                                    Uzbekistan
                                </option>
                                <option value="value2">Значение 2</option>
                                <option value="value3">Значение 3</option>
                            </select>

                        </div>
                        <div className="flex">
                            <h1 className="text-sm text-costumBlack font-normal">
                                Language:
                            </h1>
                            <select className="text-sm text-costumBlack font-normal mr-1 bg-transparent outline-none">
                                <option value="value1" selected>
                                    English
                                </option>
                                <option value="value2">Russian</option>
                                <option value="value3">Uzbek</option>
                            </select>
                        </div>
                        <div className="flex">
                            <h1 className="text-sm text-costumBlack font-normal">
                                Currency:
                            </h1>
                            <select className="text-sm text-costumBlack font-normal mr-1 bg-transparent outline-none">
                                <option
                                    value="value1"
                                    className="text-sm text-costumBlack font-normal"
                                    selected
                                >
                                    Uzs
                                </option>
                                <option value="value2">RUB</option>
                                <option value="value3">TRY</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-auto flex relative space-between gap-3 ">
                        <div className="flex items-center gap-1">
                            <img src="/images/phone.svg" alt="" />
                            <a href="" className=" text-sm text-costum-blue font-normal ">
                                +998 71 200 00 00
                            </a>
                        </div>
                        <div className="rotate-60 h-7 bg-costumBlack w-0.5"></div>
                        <div className="flex relative gap-2 items-center">
                            <div className="relative">
                                <img src="/images/envelope.svg" alt="" />

                                <Badge size="sm" color='orange' className='absolute -top-2.5 -right-2.5' circle>
                                    12
                                </Badge>

                            </div>
                            <a
                                href=""
                                className=" text-sm text-costumBlack font-normal "
                            >
                                Message
                            </a>
                        </div>
                        <div className="rotate-60 h-7 bg-costumBlack w-0.5"></div>

                        <div className="flex gap-1 items-center">
                            <img src="/images/user.svg" alt="" />
                            <h1 className="text-sm text-costumBlack font-normal">
                                Username:
                            </h1>
                            <select className="text-sm text-costumBlack font-normal bg-transparent outline-none">
                                <option value="value1" selected>
                                    Surname
                                </option>
                                <option value="value2">Russian</option>
                                <option value="value3">Uzbek</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-5 md:hidden flex justify-between">

                <div className="nav" onClick={open}>
                    <img src="/images/navbar.svg" alt="" />
                </div>
                <img src="/images/logo_mobile.svg" alt="" />
                <div className="relative">
                    <img src="/images/cart.svg" alt="" className="mr-2" />

                    <Badge size="sm" color='orange' className='absolute -top-2 right-0.5' circle>
                        12
                    </Badge>
                </div>
            </div>
            <div className="container px-4 md:px-0 mx-auto bg-costum-gray md:bg-white">
                <div className="h-20 flex justify-between  items-center">
                    <img src="/images/ABUsell.svg" alt="" className="hidden md:flex" />
                    <label class="relative block w-full md:w-1/3 ">
                        <Menu classNames="md:width-[1900px] w-full ">
                            <Menu.Target>
                                <Input placeholder="Search by product or SKU" leftSection={search_icon} size='md' radius='md' />
                            </Menu.Target>
                            <Menu.Dropdown >

                                <SearchMenu />

                            </Menu.Dropdown>
                        </Menu>

                    </label>
                    <button className="h-12 w-48 bg-costum-blue rounded-3xl text-white text-base hidden md:block">
                        Quick Order Form
                    </button>
                </div>
            </div>
            <div className="bg-costum-gray hidden md:flex h-20">
                <div className="container mx-auto ">
                    <div className="flex items-center h-20  justify-between">
                        <div className="flex gap-10">
                            <Menu width={1900}>
                                <Menu.Target>
                                    <p className="text-custum--text-black uppercase cursor-pointer flex">
                                        Home & Garden
                                        <span>
                                            <img src="/images/down_icon.svg" alt="" />
                                        </span>
                                    </p>
                                </Menu.Target>
                                <Menu.Dropdown >

                                    <MenuHeader />

                                </Menu.Dropdown>
                            </Menu>

                            <Menu width={1900}>
                                <Menu.Target>
                                    <p className="text-costumBlack uppercase cursor-pointer flex ">
                                        Motors
                                        <span>
                                            <img src="/images/down_icon.svg" alt="" />
                                        </span>
                                    </p>
                                </Menu.Target>
                                <Menu.Dropdown >

                                    <MenuHeader />

                                </Menu.Dropdown>
                            </Menu>
                            <p className="text-costum--text-black">ELECTRONICS</p>
                            <p className="text-costum--text-black">OFFICE EQUIPMENT</p>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-max-content flex flex-col item-center">
                                <div className="relative mx-auto">
                                    <img src="/images/envelope.svg" alt="" />

                                    <Badge size="sm" color='orange' className='absolute -top-2.5 -right-2.5' circle>
                                        3
                                    </Badge>

                                </div>
                                <p className="text-costum-blue text-sm font-bold uppercase mt-2">compare</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Drawer opened={opened} onClose={close}>
                <div className="bg-white">
                    <Accordion defaultValue="Apples" className='mb-2'>
                        <Accordion.Item value='1'>
                            <Accordion.Control >
                                <p className="text-custum--text-black uppercase cursor-pointer flex">Home & Garden</p>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Accordion defaultValue='Apple'>
                                    <Accordion.Item value='1_1'>
                                        <Accordion.Control>
                                            <div className="flex gap-2 items-center mb-2">
                                                <img src="/images/menu_img1.svg" alt="" />
                                                <p className="text-base text-costum-blue font-medium">Kitchen</p>
                                            </div>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <div className="flex flex-col ">
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen, Dining & Bar
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Small kitchen Appliances
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen Tools and Gadgets
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Cookware
                                                </a>
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='1_2'>
                                        <Accordion.Control>
                                            <div className="flex gap-2 items-center mb-2">
                                                <img src="/images/menu_img1.svg" alt="" />
                                                <p className="text-base text-costum-blue font-medium">Kitchen</p>
                                            </div>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <div className="flex flex-col ">
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen, Dining & Bar
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Small kitchen Appliances
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen Tools and Gadgets
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Cookware
                                                </a>
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='1_3'>
                                        <Accordion.Control>
                                            <div className="flex gap-2 items-center mb-2">
                                                <img src="/images/menu_img1.svg" alt="" />
                                                <p className="text-base text-costum-blue font-medium">Kitchen</p>
                                            </div>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <div className="flex flex-col ">
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen, Dining & Bar
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Small kitchen Appliances
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen Tools and Gadgets
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Cookware
                                                </a>
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Panel>
                        </Accordion.Item >
                        <Accordion.Item value='2'>
                            <Accordion.Control >
                                <p className="text-custum--text-black uppercase cursor-pointer flex">Motors</p>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Accordion defaultValue='Apple'>
                                    <Accordion.Item value='2_1'>
                                        <Accordion.Control>
                                            <div className="flex gap-2 items-center mb-2">
                                                <img src="/images/menu_img1.svg" alt="" />
                                                <p className="text-base text-costum-blue font-medium">Kitchen</p>
                                            </div>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <div className="flex flex-col ">
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen, Dining & Bar
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Small kitchen Appliances
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen Tools and Gadgets
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Cookware
                                                </a>
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='2_2'>
                                        <Accordion.Control>
                                            <div className="flex gap-2 items-center mb-2">
                                                <img src="/images/menu_img1.svg" alt="" />
                                                <p className="text-base text-costum-blue font-medium">Kitchen</p>
                                            </div>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <div className="flex flex-col ">
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen, Dining & Bar
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Small kitchen Appliances
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen Tools and Gadgets
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Cookware
                                                </a>
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='2_3'>
                                        <Accordion.Control>
                                            <div className="flex gap-2 items-center mb-2">
                                                <img src="/images/menu_img1.svg" alt="" />
                                                <p className="text-base text-costum-blue font-medium">Kitchen</p>
                                            </div>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <div className="flex flex-col ">
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen, Dining & Bar
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Small kitchen Appliances
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen Tools and Gadgets
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Cookware
                                                </a>
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Panel>
                        </Accordion.Item >
                        <Accordion.Item value='3'>
                            <Accordion.Control >
                                <p className="text-custum--text-black uppercase cursor-pointer flex">Electronics</p>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Accordion defaultValue='Apple'>
                                    <Accordion.Item value='3_1'>
                                        <Accordion.Control>
                                            <div className="flex gap-2 items-center mb-2">
                                                <img src="/images/menu_img1.svg" alt="" />
                                                <p className="text-base text-costum-blue font-medium">Kitchen</p>
                                            </div>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <div className="flex flex-col ">
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen, Dining & Bar
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Small kitchen Appliances
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen Tools and Gadgets
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Cookware
                                                </a>
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='3_2'>
                                        <Accordion.Control>
                                            <div className="flex gap-2 items-center mb-2">
                                                <img src="/images/menu_img1.svg" alt="" />
                                                <p className="text-base text-costum-blue font-medium">Kitchen</p>
                                            </div>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <div className="flex flex-col ">
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen, Dining & Bar
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Small kitchen Appliances
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen Tools and Gadgets
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Cookware
                                                </a>
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='3_3'>
                                        <Accordion.Control>
                                            <div className="flex gap-2 items-center mb-2">
                                                <img src="/images/menu_img1.svg" alt="" />
                                                <p className="text-base text-costum-blue font-medium">Kitchen</p>
                                            </div>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <div className="flex flex-col ">
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen, Dining & Bar
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Small kitchen Appliances
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen Tools and Gadgets
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Cookware
                                                </a>
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Panel>
                        </Accordion.Item >
                        <Accordion.Item value='4'>
                            <Accordion.Control >
                                <p className="text-custum--text-black uppercase cursor-pointer flex">Office Equiment</p>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Accordion defaultValue='Apple'>
                                    <Accordion.Item value='4_1'>
                                        <Accordion.Control>
                                            <div className="flex gap-2 items-center mb-2">
                                                <img src="/images/menu_img1.svg" alt="" />
                                                <p className="text-base text-costum-blue font-medium">Kitchen</p>
                                            </div>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <div className="flex flex-col ">
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen, Dining & Bar
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Small kitchen Appliances
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen Tools and Gadgets
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Cookware
                                                </a>
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='4_2'>
                                        <Accordion.Control>
                                            <div className="flex gap-2 items-center mb-2">
                                                <img src="/images/menu_img1.svg" alt="" />
                                                <p className="text-base text-costum-blue font-medium">Kitchen</p>
                                            </div>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <div className="flex flex-col ">
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen, Dining & Bar
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Small kitchen Appliances
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen Tools and Gadgets
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Cookware
                                                </a>
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                    <Accordion.Item value='4_3'>
                                        <Accordion.Control>
                                            <div className="flex gap-2 items-center mb-2">
                                                <img src="/images/menu_img1.svg" alt="" />
                                                <p className="text-base text-costum-blue font-medium">Kitchen</p>
                                            </div>
                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <div className="flex flex-col ">
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen, Dining & Bar
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Small kitchen Appliances
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Kitchen Tools and Gadgets
                                                </a>
                                                <a href="" className="text-base text-costumBlack mb-3">
                                                    Cookware
                                                </a>
                                            </div>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                            </Accordion.Panel>
                        </Accordion.Item >
                    </Accordion>
                    <a href='' className="text-base text-costum-blue font-medium py-3 px-4 w-full ">View all markets</a>

                    <div className='border border-t border-b-0  border-costum-gray-500   mt-5'>
                        <a href='' className="flex  gap-2 items-center  py-3 px-4 border-t-1 border-indigo-500">
                            <img src="/images/menu_img1.svg" alt="" />
                            <p className="text-base text-costum-blue font-medium">Compare</p>
                        </a>
                    </div>
                    <div className='border border-t border-b-0 border-costum-gray-500   '>
                        <a href='' className="flex  gap-2 items-center  py-3 px-4 border-t-1 border-indigo-500">
                            <img src="/images/menu_img1.svg" alt="" />
                            <p className="text-base text-costum-blue font-medium">Favorites</p>
                        </a>
                    </div>
                    <div className='border border-t border-b-0 border-costum-gray-500 '>
                        <a href='' className="flex  gap-2 items-center  py-3 px-4 border-t-1 border-indigo-500">
                            <img src="/images/menu_img1.svg" alt="" />
                            <p className="text-base text-costum-blue font-medium">Masseges</p>
                        </a>
                    </div>
                    <div className='border border-t border-b-0 border-costum-gray-500 mb-5 '>
                        <a href='' className="flex  gap-2 items-center  py-3 px-4 border-t-1 border-indigo-500">
                            <img src="/images/menu_img1.svg" alt="" />
                            <p className="text-base text-costum-blue font-medium">+32 (0) 15 28 76 67</p>
                        </a>
                    </div>
                    <Accordion defaultValue='Apple' className='mb-5'>
                        <Accordion.Item value='1_1'>
                            <Accordion.Control>
                                <div className="flex items-center">
                                    <h1 className="text-sm text-costumBlack font-normal">
                                        Country:
                                    </h1>
                                    <p className="text-sm text-costumBlack font-normal ml-2 bg-transparent outline-none">
                                        Uzbekistan
                                    </p>
                                </div>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <p className="text-base">Uzbekistan</p>
                                <p className="text-base">Russia</p>
                                <p className="text-base">Amerika</p>

                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='1_2'>
                            <Accordion.Control>
                                <div className="flex items-center">
                                    <h1 className="text-sm text-costumBlack font-normal">
                                        Language:
                                    </h1>
                                    <p className="text-sm text-costumBlack font-normal ml-2 bg-transparent outline-none">
                                        English
                                    </p>
                                </div>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <p className="text-base">English</p>
                                <p className="text-base">Russia</p>
                                <p className="text-base">Uzbek</p>

                            </Accordion.Panel>
                        </Accordion.Item>
                        <Accordion.Item value='1_3'>
                            <Accordion.Control>
                                <div className="flex items-center">
                                    <h1 className="text-sm text-costumBlack font-normal">
                                        Country:
                                    </h1>
                                    <p className="text-sm text-costumBlack font-normal ml-2 bg-transparent outline-none">$</p>
                                </div>
                            </Accordion.Control>
                            <Accordion.Panel>
                                <p className="text-base">UZS</p>
                                <p className="text-base">RUBL</p>
                                <p className="text-base">USD</p>

                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>

                    <button className="bg-costum-blue w-full rounded-3xl text-white h-12 mb-5">Quick Order Form</button>
                </div>
            </Drawer>

        </div>
    )
}

export default header
