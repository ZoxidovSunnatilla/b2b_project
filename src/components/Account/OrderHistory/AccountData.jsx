import React from 'react'
import { useTranslation } from "next-i18next";
import { Select, Image } from '@mantine/core';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const AccountData = () => {
    const { t } = useTranslation("common", "account")
    const icon = <Image src="/images/down_icon_select.svg" alt="" />
    

    return (
        <div className="table w-full md:ml-5 ml-0" id="account_data">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className=" bg-[#E6EFFB] rounded-lg p-6">
                    <div className="flex mb-8 justify-between">
                        <p className="text-xl font-bold"> {t("account:accountTabSixTextOne")}</p>
                        <Image src="/images/edit.svg" alt="" />
                    </div>
                    <p className="text-base mb-5 text-normal">{t("account:accountTabSixTextTwo")} <span className='font-medium'>John</span></p>
                    <p className="text-base mb-5 text-normal">{t("account:accountTabSixTextThree")} <span className='font-medium'>Doe</span></p>
                    <p className="text-base mb-5 text-normal">{t("account:accountTabSixTextFour")} <span className='font-medium'>johndoe@gmail.com</span></p>
                    <p className="text-base mb-5 text-normal">{t("account:accountTabSixTextFive")} <span className='font-medium'>+48 665 876 123</span></p>
                    <p className="text-base mb-5 text-normal">{t("account:accountTabSixTextSix")} <span className='font-medium text-costum-blue'>{t("account:accountTabSixTextSeven")}</span></p>

                </div>
                <div className=" bg-[#F6F8FB] rounded-lg p-6">
                    <p className="text-xl mb-5 font-bold">{t("account:accountTabSixTextAge")}</p>
                    <p className="text-sm text-[#434447] mb-1">{t("account:accountTabSixTextNine")}</p>
                    <Select
                        placeholder="FEDEX"
                        className="Select_product mb-4"
                        data={["React", "Angular", "Vue", "Svelte"]}
                        rightSection={icon}
                    />
                      <p className="text-sm text-[#434447] mb-1">{t("account:accountTabSixTextTen")}</p>
                    <Select
                        placeholder="Shipping by e-mail"
                        className="Select_product mb-4"
                        data={["React", "Angular", "Vue", "Svelte"]}
                        rightSection={icon}
                    />
                    <p className="text-sm text-[#434447] mb-1">{t("account:accountTabSixTextEleven")}</p>
                    <Select
                        placeholder="Bank transfer"
                        className="Select_product mb-4"
                        data={["React", "Angular", "Vue", "Svelte"]}
                        rightSection={icon}
                    />
                    <p className="text-sm text-[#434447] mb-1">{t("account:accountTabSixTextTwelve")}</p>
                    <input type="text" className='input_select'placeholder='johndoe@gmail.com'/>
                </div>
            </div>
        </div>

    )
}

export default AccountData

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "account"])),
        },
    }
}
