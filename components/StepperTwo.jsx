import React, { useState } from 'react';
import { Stepper, Select, Input, Radio, Accordion } from '@mantine/core';
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from 'next/link';
import { DateInput } from '@mantine/dates';


const StepperTwo = () => {
    const icon = <img src="/images/down_icon_select.svg" alt="" />
    const [value, setValue] = useState(null);
    const [active, setActive] = useState(0);
    const { t } = useTranslation("common", "checkout")
    return (
        <div className='container mx-auto my-10' id="stepper">
            <Stepper
                active={active}
                onStepClick={setActive}
                completedIcon={<img src="/images/stepper.svg" />}
            >
                <Stepper.Step icon="1" label={t("checkout:stepperTextOne")}>
                    <div className="w-full mt-14" id="checkout">
                        <div className="flex justify-between flex-wrap">
                            <div className="md:w-2/5 w-full md:mb-0 mb-4">
                                <div className="flex gap-2 mb-4 items-center">
                                    <img src="/images/oneIcon.svg" alt="" />
                                    <p className="md:text-2xl text-[18px] font-bold">{t("checkout:stepOneBoxOneTextOne")}</p>
                                </div>
                                <div className="w-full bg-star md:p-6 px-2 py-4 rounded mb-4">
                                    <div className="flex gap-2 mb-4 items-center">
                                        <p className="text-base font-normal leading-6">{t("checkout:stepOneBoxOneTextTwo")}</p>
                                        <p className="text-base font-bold leading-4">JKT Company</p>
                                    </div>
                                    <div className="flex gap-2 mb-4 items-center">
                                        <p className="text-base font-normal leading-6">{t("checkout:stepOneBoxOneTextThree")}</p>
                                        <p className="text-base font-bold leading-4">9932345431</p>
                                    </div>
                                    <div className="flex gap-2 mb-4 items-center">
                                        <p className="text-base font-normal leading-6">{t("checkout:stepOneBoxOneTextFour")}</p>
                                        <p className="text-base font-bold leading-4 w-[153px]">177 Kent St Brooklyn, NY 11222 United States</p>
                                    </div>
                                    <div className="flex gap-2  items-center">
                                        <p className="text-base font-normal leading-6">{t("checkout:stepOneBoxOneTextFive")}</p>
                                        <p className="text-base font-bold leading-4">+48 665 876 123</p>
                                    </div>
                                </div>
                                <label className="flex mb-2">
                                    <input type="checkbox" className="mr-2" />
                                    <p className="text-costumBlack">
                                        {t("checkout:stepOneBoxOneTextSix")}
                                    </p>
                                </label>
                                <label className="flex ">
                                    <input type="checkbox" className="mr-2" />
                                    <p className="text-costumBlack">
                                        {t("checkout:stepOneBoxOneTextSeven")}
                                    </p>
                                </label>
                            </div>
                            <div className="md:w-2/5 w-full md:mb-0 mb-4">
                                <div className="flex gap-2 mb-4 items-center">
                                    <img src="/images/twoIcon.svg" alt="" />
                                    <p className="md:text-2xl text-[18px] font-bold">{t("checkout:stepOneBoxTwoTextOne")}</p>
                                </div>
                                <p className="text-zinc-700 text-sm font-normal leading-normal mb-2 text-[#434447]">{t("checkout:stepOneBoxTwoTextTwo")}</p>
                                <Select
                                    placeholder="Item 1"
                                    className="Select_product"
                                    data={["React", "Angular", "Vue", "Svelte"]}
                                    rightSection={icon}
                                />
                                <div className="flex my-4">
                                    <input type="checkbox" className="mr-2" />
                                    <p className="text-costumBlack">
                                    {t("checkout:stepOneBoxTwoTextThree")}
                                    </p>
                                </div>
                                <div className="flex gap-1">
                                    <img src="/images/minusRemove.svg" alt="" />
                                    <p className="text-medium text-costum-blue text-base">{t("checkout:stepOneBoxTwoTextFour")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-star mt-6 md:p-6 px-2 py-6 rounded-lg" id="checkout">
                        <p className="text-xl font-bold mb-8">{t("checkout:stepOneBoxThreeTextOne")}</p>
                        <div className=" mb-4">
                            <p className=" text-sm font-normal leading-normal mb-1 text-[#434447]">{t("checkout:stepOneBoxThreeTextTwo")}</p>
                            <Input
                                size="md"
                                radius="md"
                            />
                        </div>
                        <div className=" mb-4">
                            <p className=" text-sm font-normal leading-normal mb-1 text-[#434447]" >{t("checkout:stepOneBoxThreeTextThree")}</p>
                            <Input
                                size="md"
                                radius="md"
                            />
                        </div>
                        <div className=" mb-4">
                            <p className=" text-sm font-normal leading-normal mb-1 text-[#434447]">{t("checkout:stepOneBoxThreeTextFour")}</p>
                            <Input
                                size="md"
                                radius="md"
                            />
                        </div>
                        <div className=" mb-4">
                            <p className=" text-sm font-normal leading-normal mb-1 text-[#434447]">{t("checkout:stepOneBoxThreeTextFive")}</p>
                            <Input
                                size="md"
                                radius="md"
                            />
                        </div>
                        <div className=" mb-4">
                            <p className=" text-sm font-normal leading-normal mb-1 text-[#434447]">{t("checkout:stepOneBoxThreeTextSix")}</p>
                            <Input
                                size="md"
                                radius="md"
                            />
                        </div>
                        <hr className='border-white mt-8 mb-8' />
                        <div className=" mb-4">
                            <p className=" text-sm font-normal leading-normal mb-1 text-[#434447]">{t("checkout:stepOneBoxThreeTextSeven")}</p>
                            <Input
                                size="md"
                                radius="md"
                            />
                        </div>
                        <div className=" mb-4">
                            <p className=" text-sm font-normal leading-normal mb-1 text-[#434447]">{t("checkout:stepOneBoxThreeTextAge")}</p>
                            <Input
                                size="md"
                                radius="md"
                            />
                        </div>
                        <div className=" mb-4">
                            <p className=" text-sm font-normal leading-normal mb-1 text-[#434447]">{t("checkout:stepOneBoxThreeTextNine")}</p>
                            <Input
                                size="md"
                                radius="md"
                            />
                        </div>
                        <div className="mb-4">
                            <p className="text-zinc-700 text-sm font-normal leading-normal mb-2 text-[#434447]">{t("checkout:stepOneBoxThreeTextTen")}</p>
                            <Select
                                placeholder="Any state/province"
                                className="Select_product"
                                data={["React", "Angular", "Vue", "Svelte"]}
                                rightSection={icon}
                            />
                        </div>
                        <div className="mb-6">
                            <p className="text-zinc-700 text-sm font-normal leading-normal mb-2 text-[#434447]">{t("checkout:stepOneBoxThreeTextEleven")}</p>
                            <Select
                                placeholder="Any Country"
                                className="Select_product"
                                data={["React", "Angular", "Vue", "Svelte"]}
                                rightSection={icon}
                            />
                        </div>
                        <div className="flex gap-[29px]">
                            <button className='text-costum-blue border-none bg-transparent'>{t("checkout:stepOneBoxThreeTextTwelve")}</button>
                            <button className="py-3 px-4 bg-costum-blue text-white flex justify-center items-center rounded-full">{t("checkout:stepOneBoxThreeTextThirteen")}</button>
                        </div>
                    </div>
                </Stepper.Step>

                <Stepper.Step icon="2" label={t("checkout:stepperTextTwo")}>
                    <div className="w-full mt-14 bg-[#F6F8FB] md:p-10 py-6 px-2 rounded-b-lg " id="checkout">
                        <div className="flex justify-between md:mb-[76px] mb-6 flex-wrap">
                            <div className="md:w-2/5 w-full">
                                <div className="flex gap-2 mb-4">
                                    <img src="/images/oneIcon.svg" alt="" />
                                    <p className="md:text-2xl text-[18px] font-bold">{t("checkout:stepTwoBoxOneTextOne")}</p>
                                </div>
                                <p className="text-base mb-4">{t("checkout:stepTwoBoxOneTextTwo")}</p>
                                <Radio.Group
                                    name="favoriteFramework"
                                    withAsterisk
                                >
                                    <div className="flex gap-2 mb-4 items-center">
                                        <Radio value="react" />
                                        <p className="text-base font-normal">{t("checkout:stepTwoBoxOneTextThree")} <span className='text-[#FF7E27] font-semibold ml-1'>59,99</span></p>
                                    </div>
                                    <div className="flex gap-2 mb-4 items-center">
                                        <Radio value="s" />
                                        <p className="text-base font-normal">{t("checkout:stepTwoBoxOneTextFour")} <span className='text-[#FF7E27] font-semibold ml-1'>49,99</span></p>
                                    </div>
                                    <div className="flex gap-2 mb-4 items-center">
                                        <Radio value="ng" />
                                        <p className="text-base font-normal">{t("checkout:stepTwoBoxOneTextFive")} <span className='text-[#FF7E27] font-semibold ml-1'>100,99</span></p>
                                    </div>
                                </Radio.Group>
                                <div className="flex my-4">
                                    <input type="checkbox" className="mr-2" />
                                    <p className="text-costumBlack">
                                    {t("checkout:stepTwoBoxOneTextSix")}
                                    </p>
                                </div>
                                <p className="text-sm text-[#434447] mb-1">{t("checkout:stepTwoBoxOneTextSeven")}</p>
                                <DateInput
                                    value={value}
                                    onChange={setValue}
                                    placeholder="Date input"
                                />
                                <div className="flex my-4">
                                    <input type="checkbox" className="mr-2" />
                                    <p className="text-costumBlack">
                                    {t("checkout:stepTwoBoxOneTextAge")}
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-2/5 w-full">
                                <div className="flex gap-2 mb-4">
                                    <img src="/images/oneIcon.svg" alt="" />
                                    <p className="md:text-2xl text-[18px] font-bold">{t("checkout:stepTwoBoxTwoTextOne")}</p>
                                </div>
                                <p className="text-base mb-4">{t("checkout:stepTwoBoxTwoTextTwo")}</p>
                                <Radio.Group
                                    name="favoriteFramework"
                                    withAsterisk
                                >
                                    <div className="flex gap-2 mb-4 items-center">
                                        <Radio value="reactt" />
                                        <p className="text-base font-normal">{t("checkout:stepTwoBoxTwoTextThree")}</p>
                                    </div>
                                    <div className="flex gap-2 mb-4 items-center">
                                        <Radio value="reactt" />
                                        <p className="text-base font-normal">{t("checkout:stepTwoBoxTwoTextFour")}</p>
                                    </div>
                                    <div className="flex gap-2 mb-4 items-center">
                                        <Radio value="react" />
                                        <p className="text-base font-normal">{t("checkout:stepTwoBoxTwoTextFive")}</p>
                                    </div>
                                    <div className="flex gap-2 mb-4 items-center">
                                        <Radio value="s" />
                                        <p className="text-base font-normal">{t("checkout:stepTwoBoxTwoTextSix")}</p>
                                    </div>
                                    <div className="flex gap-2 mb-4 items-center">
                                        <Radio value="ng" />
                                        <p className="text-base font-normal">{t("checkout:stepTwoBoxTwoTextSeven")}</p>
                                    </div>
                                </Radio.Group>
                                <div className="flex my-4">
                                    <input type="checkbox" className="mr-2" />
                                    <p className="text-costumBlack">
                                    {t("checkout:stepTwoBoxTwoTextAge")}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-costum-blue text-white rounded-full h-12 w-[198px]">{t("checkout:stepTwoBoxTwoBtnText")}</button>
                        </div>
                    </div>

                </Stepper.Step>
                <Stepper.Step icon="3" label={t("checkout:stepperTextThree")}>
                    <div className="w-full bg-[#F6F8FB] rounded-b-lg md:py-8 md:px-6 py-4 px-2 mt-14">
                        <div className="flex justify-between mb-6 flex-wrap">
                            <div className="w-auto ">
                                <div className="flex items-center gap-1 md:mb-0 mb-2">
                                    <p className="text-sm font-semibold">{t("checkout:stepThreeBoxOneTextOne")}</p>
                                    <p className="text-sm">12 Dmowskiego Street, 65-182 Wroclaw</p>
                                </div>
                                <div className="flex items-center gap-1 md:mb-0 mb-2">
                                    <p className="text-sm font-semibold">{t("checkout:stepThreeBoxOneTextOne")}</p>
                                    <p className="text-sm">Krakowska Street 26/28, 00-927 Warcaw</p>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="flex items-center gap-1 md:mb-0 mb-2">
                                    <p className="text-sm font-semibold">{t("checkout:stepThreeBoxOneTextTwo")}</p>
                                    <p className="text-sm">{t("checkout:stepThreeBoxOneTextFive")}</p>
                                    <p className="text-sm font-semibold">59,99</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <p className="text-sm font-semibold">{t("checkout:stepThreeBoxOneTextFour")}</p>
                                    <p className="text-sm">{t("checkout:stepThreeBoxOneTextSix")}</p>
                                </div>
                            </div>
                        </div>
                        <Accordion defaultValue="Apples">
                            <Accordion.Item value='Apples'>
                                <Accordion.Control>
                                    <div className="flex items-center gap-1">
                                        <p className="text-costum-blue">{t("checkout:stepThreeBoxOneTextFour")}</p>
                                        <img src="/images/downIcon.svg" alt="" />
                                    </div>
                                </Accordion.Control>
                                <Accordion.Panel>
                                    <div className="w-auto h-[350px] overflow-y-scroll ">
                                        <div className="w-full bg-white rounded-lg mb-2 p-4 gap-1 flex">
                                            <img src="/images/chekoutProductImg.svg" alt="" />
                                            <div className="flex justify-between w-full md:flex-row flex-col md:items-center md:gap-4 gap-2">
                                                <div className="text">
                                                    <p className="text-sm text-[#737B7D] md:mb-2 mb-1">{t("checkout:stepThreeBoxTwoTextOne")} | Part No. 234565</p>
                                                    <p className="md:text-xl text-base font-bold">AMBER DECOR Small Lamp 60W...</p>
                                                </div>
                                                <p className="text-sm">{t("checkout:stepThreeBoxTwoTextTwo")} 123335</p>
                                                <div className="text">
                                                    <p className="text-base md:text-right mb-2">$70.00 </p>
                                                    <p className="md:text-2xl text-xl font-semibold text-costum-blue">$120.00 </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full bg-white rounded-lg mb-2 p-4 gap-1 flex">
                                            <img src="/images/chekoutProductImg.svg" alt="" />
                                            <div className="flex justify-between w-full md:flex-row flex-col md:items-center md:gap-4 gap-2">
                                                <div className="text">
                                                    <p className="text-sm text-[#737B7D] md:mb-2 mb-1">{t("checkout:stepThreeBoxTwoTextOne")} | Part No. 234565</p>
                                                    <p className="md:text-xl text-base font-bold">AMBER DECOR Small Lamp 60W...</p>
                                                </div>
                                                <p className="text-sm">{t("checkout:stepThreeBoxTwoTextTwo")} 123335</p>
                                                <div className="text">
                                                    <p className="text-base md:text-right mb-2">$70.00 </p>
                                                    <p className="md:text-2xl text-xl font-semibold text-costum-blue">$120.00 </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full bg-white rounded-lg mb-2 p-4 gap-1 flex">
                                            <img src="/images/chekoutProductImg.svg" alt="" />
                                            <div className="flex justify-between w-full md:flex-row flex-col md:items-center md:gap-4 gap-2">
                                                <div className="text">
                                                    <p className="text-sm text-[#737B7D] md:mb-2 mb-1">{t("checkout:stepThreeBoxTwoTextOne")} | Part No. 234565</p>
                                                    <p className="md:text-xl text-base font-bold">AMBER DECOR Small Lamp 60W...</p>
                                                </div>
                                                <p className="text-sm">{t("checkout:stepThreeBoxTwoTextTwo")} 123335</p>
                                                <div className="text">
                                                    <p className="text-base md:text-right mb-2">$70.00 </p>
                                                    <p className="md:text-2xl text-xl font-semibold text-costum-blue">$120.00 </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full bg-white rounded-lg mb-2 p-4 gap-1 flex">
                                            <img src="/images/chekoutProductImg.svg" alt="" />
                                            <div className="flex justify-between w-full md:flex-row flex-col md:items-center md:gap-4 gap-2">
                                                <div className="text">
                                                    <p className="text-sm text-[#737B7D] md:mb-2 mb-1">{t("checkout:stepThreeBoxTwoTextOne")} | Part No. 234565</p>
                                                    <p className="md:text-xl text-base font-bold">AMBER DECOR Small Lamp 60W...</p>
                                                </div>
                                                <p className="text-sm">{t("checkout:stepThreeBoxTwoTextTwo")} 123335</p>
                                                <div className="text">
                                                    <p className="text-base md:text-right mb-2">$70.00 </p>
                                                    <p className="md:text-2xl text-xl font-semibold text-costum-blue">$120.00 </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Stepper.Step>
                <Stepper.Step icon="4" label={t("checkout:stepperTextFourera")}>
                    <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5 mt-14 mb-6">
                        <div className="w-auto bg-costum-blue rounded-lg md:p-12 py-6 px-4 h-[250px]">
                            <p className="text-white font-bold md:text-[28px] text-[24px] md:mb-6 mb-4">{t("checkout:stepFourBoxOneTextOne")}</p>
                            <p className="text-white text-base mb-3">{t("checkout:stepFourBoxOneTextTwo")} <span className='font-bold'>#809320, #249320  {t("checkout:stepFourBoxOneTextThree")} #809320</span></p>
                            <p className="text-sm text-white md:mb-6 mb-5">{t("checkout:stepFourBoxOneTextFour")}</p>
                            <div className="flex items-center gap-1">
                                <img src="/images/printCheckout.svg" alt="" />
                                <p className="text-base text-white">{t("checkout:stepFourBoxOneTextFive")}</p>
                            </div>
                        </div>
                        <div className="w-auto">
                            <img src="/images/cheoutImg.png" alt="" />
                        </div>
                    </div>
                    <div className="bg-[#F6F8FB] md:p-12 py-6 px-4 flex md:gap-[68px] flex-wrap ">
                        <div className="md:w-2/5 w-full">
                            <p className="md:text-[28px] text-[24px] font-bold md:mb-6 mb-4">{t("checkout:stepFourBoxOneTextSix")}</p>
                            <p className="text-base md:mb-6 mb-4 md:w-[481px] w-full">{t("checkout:stepFourBoxOneTextAge")}</p>
                            <div className="flex justify-between flex-wrap">
                                <button className="bg-white border-2 h-12 md:w-[253px] w-full mb-2 md:mb-0 border-solid border-costum-blue rounded-full text-costum-blue">{t("checkout:stepFourBoxBtnTextOne")}</button>
                                <button className="bg-costum-blue md:w-[253px] md:mb-0 mb-6 w-full rounded-full text-white flex justify-center items-center h-12">
                                {t("checkout:stepFourBoxBtnTextTwo")}
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <p className="md:text-xl text-base md:mb-6 mb-4 font-bold">{t("checkout:stepFourBoxTwoTextOne")}</p>
                            <p className="text-base md:mb-3 mb-2">{t("checkout:stepFourBoxTwoTextTwo")}</p>
                            <p className="text-base md:mb-3 mb-2">{t("checkout:stepFourBoxTwoTextThree")}</p>
                            <p className="text-base md:mb-7 mb-4">{t("checkout:stepFourBoxTwoTextFour")}</p>
                            <p className='md:text-base text-sm text-costum-blue font-medium'>contact@ecommerceBooster.io</p>
                        </div>
                    </div>
                </Stepper.Step>
            </Stepper>

        </div>
    )
}

export default StepperTwo
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "checkout"])),
        },
    }
}